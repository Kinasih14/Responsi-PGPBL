import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import PetaniScreen from './screens/PetaniScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairingScreen from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

export default function Navigation() {
    return (
        <NavigationContainer screenOptions={{
            headerShown: false
        }}>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Petani" component={PetaniScreen} />
            <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
            <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreen} />
            <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}