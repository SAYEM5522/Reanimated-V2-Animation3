import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StackImage from '../Components/StackImage'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1,backgroundColor:'black' }}>
 
        <View style={{ flex: 1 }}>
          <StackImage/>
        </View>
  
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
