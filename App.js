import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackImage from './Components/StackImage';
const item=[{
  id:'1',
  image:'https://cdn.pixabay.com/photo/2021/08/17/14/48/sea-6553205__340.jpg'
},
{
  id:'2',
  image:'https://cdn.pixabay.com/photo/2021/05/22/10/11/fishing-boat-6273132__340.jpg'
},
{
  id:'3',
  image:'https://cdn.pixabay.com/photo/2021/08/16/09/18/park-6549851__340.jpg'
},
{
  id:'4',
  image:'https://cdn.pixabay.com/photo/2021/08/16/14/57/fountain-6550493__340.jpg'
}]
export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ height: 60,backgroundColor:'gray' }}>
        </View>
        <View style={{ flex: 1 }}>
          <StackImage/>
        </View>
        <View style={{ height: 60,backgroundColor:'red'  }}>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
