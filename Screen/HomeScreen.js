import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import StackImage from '../Components/StackImage'
import { FontAwesome5 } from '@expo/vector-icons';
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.view1}/>
        <View style={styles.view2}/>
        <Text style={styles.HeaderText}>Magaz</Text>
        <FontAwesome5 name="minus-square" style={styles.HeaderIcon} size={30} color="white" />
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
  top:-30
},
view1:{
  width:23,
  height:23,
  borderRadius:12,
  backgroundColor:"#d94545",
  top:26,
  left:30
},
view2:{
  width:23,
  top:14,
  height:23,
  borderRadius:12,
  backgroundColor:"#5cedd0",
  left:20
},
HeaderIcon:{
  left:360,
  top:-60,
  
}
})
