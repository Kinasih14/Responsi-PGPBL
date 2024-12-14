import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'


export default function OrderPrepairingScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            //move to delivery screen
            Navigation.navigate('Delivery');
        }, 3000)
    }, [])
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('.../assets/images/farmGuy.png')} className="h-80 w-80" />
        </View>
    )
}