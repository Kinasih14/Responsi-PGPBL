import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { useSelector } from 'react-redux';

export default function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
    if (!cartItems.length) return;

    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
            onPress={()=> navigation.navigate('Cart')}
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
            >
                {/* Badge Section */}
                <View
                    className="p-2 px-4 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <Text className="font-extrabold text-white text-lg">
                        {cartItems.length}
                        </Text>
                </View>

                {/* Center Text */}
                <Text className="flex-1 text-center font-extrabold text-white text-lg">
                    View Cart
                </Text>

                {/* Price Section */}
                <Text className="font-extrabold text-white text-lg">
                    Rp {cartTotal.length}
                    </Text>
            </TouchableOpacity>
        </View>
    );
}
