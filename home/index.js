import React, {useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { 
 Text, View,StyleSheet,Button,Image,Dimensions
} from 'react-native';

import img from '../img/pri.png'
import firebase  from '../config/firebase';
import LottieView from "lottie-react-native";
import { TouchableOpacity, Directions } from 'react-native-gesture-handler';


export default function Home() {





  
  
  

  
  

resetAnimation = () => {
  this.animation.reset();
  this.animation.play();
};








  const [imagem,setImagem] = useState(null)

    uploadImagem =  async(uri) =>{
      const response = await fetch(uri);
      const blob = await response.blob();
      const filename = new Date().getTime();
      var ref = firebase.storage().ref().child('upload/' + filename);
      ref.put(blob).then(function (snapshot){
        snapshot.ref.getDownloadURL().then(function(downloadURL){
          setImagem(downloadURL);
        })
      })
    }

  const pegaImg  = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,

    });

    setImagem('');
    console.log(result);

    if (!result.cancelled) {
      //setImagem(result.uri);
      uploadImagem(result.uri)
    }
  };
  
  
       
  return (
    
      <View style={styles.container}>


        

        <Text style={{color:"#e6e6e6", fontSize:40}}>Anonibus</Text>

        {!imagem ?
      
      <Image  source={ img} style={{margin:30,width:200, height:200, borderRadius:100, borderWidth:2, borderColor:"#fff"}} />
         :
        <Image  source={{uri: imagem}} style={{margin:30,width:200, height:200, borderRadius:100, borderWidth:2, borderColor:"#fff"}} />
        }
          <TouchableOpacity style={styles.escolha}  onPress={pegaImg}>
          <Text  style={{color:"#fff", fontSize:23}}>Escoha a Imagem</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.escolha}  onPress={()=>{setImagem(null)}}>
          <Text  style={{color:"#fff", fontSize:23 }}>Apagar</Text>
          </TouchableOpacity>
        


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