import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import ShopScreen from './Screen/ShopScreen';
import ChatScreen from './Screen/ChatScreen';
import ProfileScreen from './Screen/ProfileScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
