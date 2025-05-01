import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'expo-image'
import { images } from '@/constants/images'

const _layout = () => {
  return (
   <Tabs>
        <Tabs.Screen name="index" options={{ 
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <>
                    <ImageBackground className='flex flex-row flex-1 w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'>
                        <Image source={images.home} tintColor="#000000" className="size-5" />
                        <Text>Home</Text>
                    </ImageBackground>
                </>
            )
             }}  />   
        <Tabs.Screen name="saved" options={{
            title: 'Saved',
            headerShown: false
             }}  />
        <Tabs.Screen name="profile" options={{
            title: 'Profile',
            headerShown: false
             }}  />
        <Tabs.Screen name="settings" options={{
            title: 'Settings',
            headerShown: false
             }}  />
        <Tabs.Screen name="about" options={{
            title: 'About',
            headerShown: false
             }}  />
        <Tabs.Screen name="search" options={{
            title: 'Search',
            headerShown: false
             }}  />
        <Tabs.Screen name="[id]" options={{
            title: 'Movie',
            headerShown: false
             }}  />
   </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})