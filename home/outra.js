import React, {useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { 
 Text, View,StyleSheet,Button,Image,TextInput, ToastAndroid
} from 'react-native';

import img from '../img/pri.png'
import firebase  from '../config/firebase';
import LottieView from "lottie-react-native";
import { TouchableOpacity, Directions } from 'react-native-gesture-handler';
import { Ionicons} from '@expo/vector-icons';


export default function Outra({route}) {

const [caixaT, setCaixaT] = useState('');
const [msg, setMsg] = useState('')
var mensagem = () =>{
     setMsg({
        a : caixaT,
        b: "ola, como vai? ",
        c : caixaT
     })


}

  return(
 <View style={styles.container}>
   
    {route.params  && 
    <>
    <Image  style={{width:100, height:100, borderRadius:50, marginTop:20}}  source={{uri: route.params.caminho }} /> 
    <Text style={{color:"#fff", fontSize:19}}>{route.params.name} </Text> 
    
    </>
    }
    
    {!route.params &&
    <Text>Error</Text>
    }
   

   <View style={{flex:1}}> 

{msg.a &&
<>
  <Text style={{color:"#fff"}}>{msg.a}</Text>
  <Text style={{color:"#fff"}}>{msg.b}</Text>
</>
}

   </View>


   <View style={styles.footer}>
    <TextInput style={styles.caixa}
      onChangeText={text => setCaixaT(text)}
      value={caixaT} 
       />

          {caixaT.length > 0 &&
             <TouchableOpacity style={styles.enviar}   onPress={mensagem}>
          <Ionicons style={{width: 30 , height: 30, marginLeft: 10}}  name={"md-send"} size={32} color={"#fff"} />
       </TouchableOpacity>
        }
          {caixaT.length === 0 &&
           <TouchableOpacity style={styles.enviar}>
          <Ionicons style={{opacity:0.5,width: 30 , height: 30, marginLeft: 10}}  name={"md-send"} size={32} color={"#fff"} 
          onPress={()=>{ToastAndroid.show("Mensagem vazia!", ToastAndroid.SHORT)}}
          />
          </TouchableOpacity>
          }
        
       </View>
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
    marginTop:25
  
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

  },
  footer:{
    flexDirection:'row',
    
    backgroundColor:'#000'
  },
  caixa:{
    padding:10,
    marginBottom:10,
    flex:1,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#999',
    borderRadius:50
  },
  enviar:{
    backgroundColor:"#0000CD",
    width:50,
    height:50,
    marginBottom:10,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 5
    

}

})