import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'expo-image';
import { images } from '@/constants/images';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <ImageBackground
                source={images.highlight}
                style={styles.imageBackground}
              >
                <Image
                  source={images.home}
                  tintColor="#151512"
                  style={styles.icon}
                />
              </ImageBackground>
              <Text
                style={[
                  styles.tabText,
                  { color: focused ? '#151512' : '#888' },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          title: 'Movie',
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
  },
  imageBackground: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
  },
});