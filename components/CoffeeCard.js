import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import tw from "twrnc";
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

export default function CoffeeCard({item}) {
    const navigation = useNavigation()
  return (
    <View 
        style = {{borderRadius: 40, backgroundColor: themeColors.bgDark, height: 350, width: 250}}
    >
        <View 
            style = {tw `flex-row justify-center -mt-14`}
        >
            <View
                style = {{
                    shadowColor: "black",
                    shadowRadius: 30,
                    shadowOffset: {width: 0, height: 40},
                    shadowOpacity: 0.8
                }}
            >
                <Image source = {item.image} style = {tw `h-40 w-40`}/>
            </View>
        </View>
        <View style = {tw `px-5 mt-5 space-y-3`}>
            <Text style = {tw `text-3xl text-white font-semibold z-10`}>
                {item.name}
            </Text>
            <View style = {tw `bg-[${"#ffffff"}] bg-opacity-20 flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
                <StarIcon size = "15" color = "white" />
                <Text style = {tw `text-base font-semibold text-white`}>
                    {item.stars}
                </Text>
            </View>
            <View style = {tw `flex-row space-x-1 z-10 mb-6`}>
                <Text style = {tw `text-base text-white font-semibold opacity-60`}>
                    Volume
                </Text>
                <Text style = {tw `text-base text-white font-semibold`}>
                    {" " + item.volume}
                </Text>
            </View>
            <View 
                style = {tw `flex-row justify-between items-center`}
            >
                    <Text style = {tw `text-white font-bold text-lg`}>$ {item.price}</Text>
                    <TouchableOpacity 
                        style = {tw `p-4 bg-white rounded-full`}
                        onPress={()=> navigation.navigate("Product", {...item})}
                    >
                        <PlusIcon size = "25" strokeWidth={2} color = {themeColors.bgDark} />
                    </TouchableOpacity> 
            </View>
        </View>
    </View>
  )
}