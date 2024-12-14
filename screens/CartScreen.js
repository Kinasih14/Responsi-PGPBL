import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { featured } from '../constants';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { useNavigation } from 'expo-router';

export default function CartScreen() {
    const petani = featured.petani[0]; // Mengakses elemen pertama dari array petani
    const navigation = useNavigation();

    return (
        <View className="bg-white flex-1">
            {/* Back Button */}
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()} // Perbaikan navigation.goBack
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>

                <View>
                    <Text className="text-center font-bold text-xl">Your Cart</Text>
                    {petani && <Text className="text-center text-gray-500">{petani.name}</Text>}
                </View>
            </View>

            {/* Delivery Time */}
            <View
                style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center py-4"
            >
                <Image
                    source={require('../assets/images/delivery.png')}
                    className="w-20 h-20 rounded-full"
                />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: themeColors.text }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Cart Items (Tani) */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50,
                }}
                className="bg-white pt-5"
            >
                {petani.panen.map((panen, index) => {
                    return (
                        <View
                            key={index}
                            className="flex-row items-center space-x-3 py-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                        >
                            <Text className="font-bold" style={{ color: themeColors.text }}>
                                2 x 
                            </Text>
                            <Image className="h-14 w-14 rounded-full" source={panen.image} />
                            <Text className="flex-1 font-bold text-gray-700">{panen.name}</Text>
                            <Text className="font-semibold text-base">${panen.price}</Text>
                            <TouchableOpacity
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>

            {/* Totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="p-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">20000</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">6000</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-extrabold">Order Total</Text>
                    <Text className="text-gray-700 font-extrabold">50000</Text>
                </View>
            </View>
            <TouchableOpacity
            onPress={()=> navigation.navigate('OrderPrepairing')}
            style={{backgroundColor:themeColors.bgColor(1)}}
            className="p-3 rounded-full"
            >
                <Text className="text-white text-center dont-bold text-lg">
                    Place Order
                </Text>
            </TouchableOpacity>
        </View>
    );
}
