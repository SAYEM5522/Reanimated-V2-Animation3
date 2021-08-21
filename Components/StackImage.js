import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
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
const StackImage = () => {
  const x=useSharedValue(0)
  const y=useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;

    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;

    },
    onEnd: (_) => {
      x.value = withSpring(0);
      y.value = withSpring(0);

    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    };
  });

  return (
   
    <View>
     {
       item.map((item,index)=>(
        <View
        key={index}
        style={styles.container}
      >
         <PanGestureHandler
       onGestureEvent={gestureHandler}
    >
        <Animated.Image
          key={item.id}
          style={[styles.image,animatedStyle]}
          source={{uri:item.image}}
        />
    </PanGestureHandler>

      </View>
      
    
       ))

      
     }
    </View>
  
  )
}

export default StackImage

const styles = StyleSheet.create({
container:{
  height: 400,
  width: 400,
  padding: 10,
  position:'absolute',
},
image:{
  flex: 1,
  height: null,
  width: null,
  resizeMode: "cover",
  borderRadius: 20
}

})
