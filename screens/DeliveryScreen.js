import {  View, Text} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { featured } from '../constants';
import MapView, {Marker} from 'react-native-maps'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { TouchableOpacity } from 'react-native-web';

export default function DeliveryScreen() {
    const petani = featured.petani[0];
    const navigation = useNavigation();
    return (
        <View className="flex-1">
        {/* {map view} */}
        <MapView
        initialRegion={{
            latitude: petani.lat,
            longitude: petani.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType='standar'
        >
            <Marker
            coordinat={{
                latitude: petani.lat,
                longitude: petani.lng,
            }}
            title={petani.name}
            description={petani.description}
            pinColor={themeColors.bgColor(1)}
            />
        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Estimaed Arrival
                    </Text>
                    <Text className="text-3xl  font-extrabold text-gray-700">
                       20-30 Minutes
                    </Text>
                    <Text className="mt-2 text-gray-700 font-semibold ">
                      Your order is own its way!
                    </Text>
                    
                </View>
                <Image className="w-24 h-24" source={require('../assets/images/agriSale.png')}/>
            
            </View>
            <View
            style={{backgroundColor: themeColors.bgColor(0.8)}}
            className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                <View className="p-1 rounded-full"
                style={{backgroundColor: 'rgba(225,225,225,0.4'}}>
                    <Image className="h-16 w-16 rounded-full" 
                    source={require('../assets/images/delivery.png')}/> 
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-bold text-white">
                        Hamada Asahi
                    </Text>
                    <Text className="font-semibold text-white">
                        Your Rider
                    </Text>
                </View>
                <View className="flex-row items-center pace-x-3 mr-3">
                    <TouchableOpacity className="bg-white pt-2 rounded-full">
                        <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-white pt-2 rounded-full">
                        <Icon.X stroke={'red'} strokeWidth={4}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        </View>
    )}
