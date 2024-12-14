import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import PetaniScreen from './screens/PetaniScreen';

export default function Navigation() {
    return (
        <NavigationContainer screenOptions={{
            headerShown: false
        }}>
            <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Petani' component={PetaniScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}