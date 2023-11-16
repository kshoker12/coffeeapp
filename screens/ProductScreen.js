import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import tw from "twrnc";
import { ArrowLeftCircleIcon } from 'react-native-heroicons/outline';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon, MinusIcon, PlusIcon, ShoppingBagIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';

export default function (props) {
    const navigation = useNavigation()
    const item = props.route.params;
    const [size, setSize] = useState("small");
    const [quantity, setQuantity] = useState(0);

    return (
        <View style = {tw `flex-1`}>
            <StatusBar style = "light" />
            <Image source = {require("../assets/images/beansBackground2.png")}
                style = {tw `w-full absolute h-70`}
            />
            <SafeAreaView style = {tw `space-y-4`}>
                <View style = {tw `mx-4 flex-row justify-between items-center`}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <ArrowLeftCircleIcon size = "50" strokeWidth={1.2} color = "white"/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {tw `rounded-full border-2 border-white p-2`}>
                        <HeartIcon size = "24" color = "white"/>
                    </TouchableOpacity>
                </View>
                <View style = {tw `flex-row justify-center`}>
                    <View 
                        style = {{
                            shadowColor: themeColors.bgDark,
                            shadowRadius: 30, 
                            shadowOffset: {width: 0, height: 30},
                            shadowOpacity: 0.9
                        }}
                    >
                        <Image source = {item.image} style = {tw `h-60 w-60`} />
                    </View>
                </View>
                <View style = {tw `flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 bg-[${themeColors.bgLight}] bg-opacity-90`}>
                    <StarIcon size = "15" color = "white" />
                    <Text style = {tw `text-base font-semibold text-white`}>{item.stars}</Text>
                </View>
                <View style = {tw `mx-4 flex-row justify-between items-center`}>
                    <Text style = {tw `text-3xl font-semibold color-[${themeColors.text}]`}>
                        {item.name}
                    </Text>
                    <Text style = {tw `text-lg font-semibold color-[${themeColors.text}]`}>
                        $ {item.price}
                    </Text>
                </View>
                <View style = {tw `mx-4 space-y-2`}>
                    <Text style = {tw `text-lg font-bold color-[${themeColors.text}]`}>
                        Coffee size
                    </Text>
                    <View style = {tw `flex-row justify-between`}>
                        <TouchableOpacity
                            onPress={()=> setSize("small")}
                            style = {tw `p-3 px-8 rounded-full bg-[${size == "small" ? themeColors.bgLight: "#0000000f"}]`}
                        >
                            <Text style = {tw `${size == "small" ? `text-white`: `text-gray-700`}`}>Small</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity
                            onPress={()=> setSize("Medium")}
                            style = {tw `p-3 px-8 rounded-full bg-[${size == "Medium" ? themeColors.bgLight: "#0000000f"}]`}
                        >
                            <Text style = {tw `${size == "Medium" ? `text-white`: `text-gray-700`}`}>Medium</Text>
                        </TouchableOpacity>  
                        <TouchableOpacity
                            onPress={()=> setSize("Large")}
                            style = {tw `p-3 px-8 rounded-full bg-[${size == "Large" ? themeColors.bgLight: "#0000000f"}]`}
                        >
                            <Text style = {tw `${size == "Large" ? `text-white`: `text-gray-700`}`}>Large</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
                <View style = {tw `mx-4 space-y-2 h-28`}>
                    <Text style = {tw `text-lg font-bold color-[${themeColors.text}]`}>
                        About
                    </Text>    
                    <Text style = {tw `text-gray-600`}>
                        {item.desc}
                    </Text>            
                </View>
                <View style = {tw `flex-row justify-between items-center mx-4 mb-2`}>
                    <View style = {tw `flex-row items-center space-x-1`}>
                        <Text style = {tw `text-base text-gray-700 font-semibold opacity-60`}>Volume</Text>
                        <Text style = {tw `text-base text-black font-semibold`}>
                            {"  " + item.volume}
                        </Text>
                    </View>
                    <View 
                        style = {tw `flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4`}
                    >
                        <TouchableOpacity onPress={()=> {
                            if(quantity > 0) {
                                let temp = quantity
                                temp -= 1;
                                setQuantity(temp)
                            }
                        }}>
                            <MinusIcon size = "20" strokeWidth={3} color = {themeColors}/>
                        </TouchableOpacity>
                        <Text style = {tw `font-extrabold text-lg color-[${themeColors.text}]`}>{quantity}</Text>
                        <TouchableOpacity onPress={()=> {
                            let temp = quantity;
                            temp += 1;
                            setQuantity(temp)
                        }}>
                            <PlusIcon size = "20" strokeWidth={3} color = {themeColors}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {tw `flex-row justify-between items-center mx-4`}>
                    <TouchableOpacity style = {tw `p-4 rounded-full border border-gray-400`}>
                        <ShoppingBagIcon size = "30" color = "gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {tw `p-5 rounded-full flex-1 ml-3 bg-[${themeColors.bgLight}]`}>
                        <Text style = {tw `text-center text-base font-semibold text-white`}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
     )
}