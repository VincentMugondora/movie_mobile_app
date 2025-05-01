import React from 'react'
import { ImageBackground, Text, View, Image as RNImage } from 'react-native'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <ImageBackground
      source={images.highlight}
      className="flex-row items-center justify-center px-3 py-2 rounded-full overflow-hidden min-w-[80px] h-10 bg-white"
    >
      <RNImage 
        source={icon} 
        style={{ width: 20, height: 20, tintColor: '#151312' }} 
      />
      <Text className="ml-2 text-sm font-medium text-secondary">{title}</Text>
    </ImageBackground>
  )
}

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.home}
              title="Home"
            />
          )
        }}  
      />   

      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.person}
              title="Profile"
            />
          )
        }}  
      />

      <Tabs.Screen 
        name="search" 
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.search}
              title="Search"
            />
          )
        }}  
      />

      <Tabs.Screen 
        name="saved" 
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.save}
              title="Saved"
            />
          )
        }}  
      />
    </Tabs>
  )
}

export default _layout
