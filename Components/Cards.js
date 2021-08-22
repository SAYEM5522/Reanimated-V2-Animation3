import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
  const ImageWidth=305
  const ImageHeight=350

const Cards = ({item,index}) => {
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
      if(x.value<-40){
        x.value=withSpring(-430)
      }
      if(x.value>40){
        x.value=withSpring(430)
      }
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
        {
          rotate: (index%2==0)?`${(index*20)}deg`:"-30deg"
        },
        
      ],
    };
  });

  return (
    <PanGestureHandler
        onGestureEvent={gestureHandler}
     >
        <Animated.View
        style={[styles.container,animatedStyle]}
      >
        <Image
          key={item.id}
          style={styles.image}
          source={{uri:item.image}}
        />
      </Animated.View>
      </PanGestureHandler>
  )
}

export default Cards

const styles = StyleSheet.create({
  container:{
    top:170,
    left:50,
    height: ImageHeight,
    width: ImageWidth,
    padding: 10,
    position:'absolute',
   
  },
  image:{
    flex: 1,
    height: null,
    width: null,
    resizeMode: "contain",
  }
})
