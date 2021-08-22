import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import ShopScreen from './Screen/ShopScreen';
import ChatScreen from './Screen/ChatScreen';
import ProfileScreen from './Screen/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeHeader from './Components/HomeHeader';
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator 
      
        screenOptions= {{
       tabBarShowLabel:false,
        tabBarActiveBackgroundColor:'white'
        }}
      >
        <Tab.Screen
        
         options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={30} color="black" color={focused?"black":'gray'} />
          ),
          headerShown:false,
            
        }
      }
        name="Home" component={HomeScreen} />
        <Tab.Screen
         options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="shopping-bag" size={30} color="black" />
          ), 

        }}
        name="Shop" component={ShopScreen} />
        <Tab.Screen
         options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="md-chatbubble-sharp" size={30} color="black" />
          ), 

        }}
        name="Chat" component={ChatScreen} />
        <Tab.Screen
         options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="emoji-neutral" size={30} color="black" />
          ), 

        }}
        name="Profile" component={ProfileScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
