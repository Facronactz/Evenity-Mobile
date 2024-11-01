import {Image, View} from 'react-native'
import React, {useEffect} from 'react'
import logo from '@/assets/evenity.png'
import {router} from "expo-router";

const SplashScreen = () => {

    useEffect(() => {
        setTimeout(() => {
            router.replace("/welcome")
        }, 3000)
    }, [])


    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Image source={logo}/>
        </View>
    )
}

export default SplashScreen