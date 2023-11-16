import { View, Text, Image, TextInput, TouchableOpacity, FlatList} from "react-native"
import React, {useState} from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {themeColors} from "../theme"
import {MapPinIcon } from "react-native-heroicons/solid";
import {BellIcon, MagnifyingGlassMinusIcon} from "react-native-heroicons/outline"
import tw from "twrnc";
import {categories, coffeeItems} from "../constants/index";
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from "../components/CoffeeCard";

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(1);

    return (
        <View style = {tw `flex-1 relative bg-white`}>
            <StatusBar/>
            <Image source = {require("../assets/images/beansBackground1.png")}
                style = {tw `w-full absolute -top-5 opacity-10 h-55` }
            />
            <SafeAreaView style = {tw `flex-1`}>
                <View style = {tw `px-4 flex-row justify-between item`}>
                    <Image source = {require("../assets/images/avatar.png")}
                        style = {tw `h-9 w-9 rounded-full`}
                    />
                    <View style = {tw `flex-row items-center space-x-2`}>
                        <MapPinIcon size = "25" color = {themeColors.bgLight} />
                        <Text style = {tw `text-base font-semibold`}>New York, NYC</Text>
                    </View>
                    <BellIcon size = "27" color = "black"/>
                </View>

                <View style = {tw `mx-5 mt-14`}>
                    <View style = {tw `flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]`}>
                        <TextInput placeholder="Search" style = {tw `p-4 flex-1 font-semibold text-gray-700`}/>
                        <TouchableOpacity style = {tw `rounded-full p-2 bg-[${themeColors.bgLight}]`}>
                            <MagnifyingGlassMinusIcon size = "25" strokeWidth={2} color = "white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {tw `px-5 mt-6`}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        data = {categories}
                        keyExtractor={item=> item.id}
                        style = {tw `overflow-visible`}
                        renderItem={({item})=>{
                            isActive = item.id == activeCategory;
                            let activeTextClass = isActive? "text-white": "text-gray-700";
                            return (
                                <TouchableOpacity
                                    onPress={()=>setActiveCategory(item.id)}
                                    style = {tw `p-4 px-5 rounded-full mr-2 shadow bg-[${isActive? themeColors.bgLight: "#e6e6e6"}]`}
                                >
                                    <Text style = {tw `font-semibold` + activeTextClass}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View style = {tw `mt-16 py-2`}>
                    <Carousel
                        containerCustomStyle = {{overflow: "visible"}}
                        data = {coffeeItems}
                        loop = {true}
                        renderItem={({item})=> <CoffeeCard item = {item}/>}
                        firstItem={1}
                        inactiveSlideOpacity={0.75}
                        inactiveSlideScale={0.77}
                        sliderWidth={400}
                        itemWidth={260}
                        slideStyle = {{display: "flex", alignItems: "center"}}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}