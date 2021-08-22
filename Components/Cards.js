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
      x.value = withSpring(0);
      y.value = withSpring(0);

    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange=[-ImageWidth / 2, 0, ImageWidth / 2];
    const outputRange= ["45deg"];
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
        {
          rotateZ: (index%2==0)?"0deg":"30deg"
        },
        
      ],
    };
  });

 
  return (
    <PanGestureHandler
        onGestureEvent={gestureHandler}
     >
        <Animated.View
       
        style={[styles.container,animatedStyle,]}
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
    top:100,
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
    // borderRadius: 20
  }
})
