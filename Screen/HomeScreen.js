import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import StackImage from '../Components/StackImage'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.view1}/>
        <View style={styles.view2}/>
        <Text style={styles.HeaderText}>Magaz</Text>
        <FontAwesome5 name="minus-square" style={styles.HeaderIcon} size={30} color="white" />
        <View style={styles.SearBar}>
        <AntDesign name="search1" style={styles.SearchIcon} size={24} color="white" />
          <TextInput/>
        </View>
      </View>
      <LinearGradient
        colors={['rgba(0,0,0,0.98)','rgba(250,250,250,250)', ]}
        style={styles.background}/>
        <View style={{ flex: 1 }}>
          <StackImage/>
        </View>
  
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background:{
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
},
container:{
  height:300,
  backgroundColor:'black',
  
},
HeaderText:{
  left:65,
  fontSize:35,
  color:'white',
  fontWeight:'bold',
  top:-36
},
view1:{
  width:23,
  height:23,
  borderRadius:12,
  backgroundColor:"#d94545",
  top:20,
  left:30
},
view2:{
  width:23,
  top:8,
  height:23,
  borderRadius:12,
  backgroundColor:"#5cedd0",
  left:20
},
HeaderIcon:{
  left:360,
  top:-66,
  
},
SearBar:{
  height:46,
  width:360,
  backgroundColor:'#1c1c1c',
  left:30,
  top:-54,
  borderRadius:30,
  
},
SearchIcon:{
  top:10,
  left:17
}
})
