import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StackImage from '../Components/StackImage'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}></View>
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
  backgroundColor:'black'
}
})
