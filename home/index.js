import React, {useState, useEffect } from 'react';

import { 
 Text, View, ImageBackground,StyleSheet
} from 'react-native';


export default function Home() {

  
 
  return (
      <View style={styles.container}> 
          <Text style={{color:"#fff",fontSize:40, fontWeight:"bold"}}>Anonibus</Text>
      </View>
          
  );
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
  }
})