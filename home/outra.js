import React, {useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { 
 Text, View,StyleSheet,Button,Image,Dimensions
} from 'react-native';

import img from '../img/pri.png'
import firebase  from '../config/firebase';
import LottieView from "lottie-react-native";
import { TouchableOpacity, Directions } from 'react-native-gesture-handler';


export default function Outra({route}) {


  return(
 <View>
   
    {route.params ? <Text>{route.params.name}</Text> : <Text>Ola</Text>}
   
   
   </View>
   
   
  )
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#fff',
    justifyContent:"center",
  },
  escolha:{
    backgroundColor:"#0000CD",	
    borderWidth:1,
    borderColor:"#000", 
    width: 300,
    borderRadius: 150,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    margin:5,

  }


})