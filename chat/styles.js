import React,{useState, useEffect} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import  axios from 'axios'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Teste(){

  const [usuario,setUsuario] = useState('') 

const pegar = () =>{
        axios.get('https://randomuser.me/api').then(function(responde){

          let resposta = responde.data.results[0];
          
        
          setUsuario({

            name : resposta.name.first,
            gender: resposta.gender, 
            id : resposta.id.name
          })
        
          console.log(usuario)

        })
}



useEffect(()=>{
  
})



  return(
                <View style={{justifyContent: "center", alignItems:"center", flex:1}}>
                  
                  <TouchableOpacity  onPress={pegar}>
                  <Text style={{fontSize:40}}>Botao</Text>
                  </TouchableOpacity>
                   <Text>{usuario.name}</Text>
                   <Text>{usuario.gender}</Text>
                   <Text>{usuario.id}</Text>
                </View>
  )
}

