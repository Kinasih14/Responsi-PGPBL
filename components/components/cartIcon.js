import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';

export default function CartIcon() {
    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
            >
                {/* Badge Section */}
                <View
                    className="p-2 px-4 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <Text className="font-extrabold text-white text-lg">3</Text>
                </View>

                {/* Center Text */}
                <Text className="flex-1 text-center font-extrabold text-white text-lg">
                    View Cart
                </Text>

                {/* Price Section */}
                <Text className="font-extrabold text-white text-lg">${23}</Text>
            </TouchableOpacity>
        </View>
    );
}
