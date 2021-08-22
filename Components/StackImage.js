import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { interpolate } from 'react-native-reanimated'
import Cards from './Cards'
const item=[{
  id:'1',
  image:'https://www.designscene.net/wp-content/uploads/2019/08/dazed-china-04-730x959.jpg'
},
{
  id:'2',
  image:'https://www.designscene.net/wp-content/uploads/2019/08/dazed-china-01-730x953.jpg'
},
{
  id:'3',
  image:'https://www.fashiongonerogue.com/wp-content/uploads/2019/05/Karen-Elson-Dazed-Magazine-Cover-Photoshoot01.jpg'
},
{
  id:'4',
  image:'https://www.designscene.net/wp-content/uploads/2019/08/dazed-china-04-730x959.jpg'
}]
const StackImage = () => {

// const position=interpolate()
  return (
   
    <View>
     {
       item.map((item,index)=>(
        <Cards item={item} index={index}key={index} />
       )).reverse()
     }
    </View>
  
  )
}

export default StackImage

const styles = StyleSheet.create({


})
