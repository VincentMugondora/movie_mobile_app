import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
   <Tabs>
        <Tabs.Screen name="index" options={{ 
            title: 'Home',
            headerShown: false
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