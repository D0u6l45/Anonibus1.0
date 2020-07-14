import React, {useState, useEffect } from 'react';
import { Ionicons} from '@expo/vector-icons';
import { 
  StyleSheet, Text, Vibration, YellowBox,  View, ToastAndroid, ScrollView, Image, TextInput, TouchableOpacity
} from 'react-native';

import firebase  from '../config/firebase';
import api from '../services/axios';
import axios from 'axios';


export default function Chat() {
const [user,setUser] = useState('');
const [caixaT, setCaixaT] = useState('');
const [mensagens, setMensagens] = useState(['']);
const [scroll, setScroll] = useState(['']);


const db = firebase.firestore()


 const salvar = ()=>{
   Vibration.vibrate();
   api.post('/enviarMsg', {
     msg: caixaT,
     usuario: user.name,
     avatar: user.picture
})

   .then(function (){
     // setMensagens([...mensagens, caixaT])

     setCaixaT('')
     scroll.scrollToEnd({animated:true})
    ToastAndroid.show("Mensagem enviada com sucesso", ToastAndroid.BOTTOM);
    }).catch(function (){


   })
 }

 useEffect(()=>{
  console.ignoredYellowBox = ['Setting a timer'];

  carregaUserAnon();

  let msg_enviada = []
  const pegaMsg = db.collection("chat").doc("bate_papo").collection("msg")
  .onSnapshot( { includeMetadataChanges: false }, function (snapshot){
    snapshot.docChanges().forEach(function (change){
      if (change.type === "added") {
        const {msg,usuario,avatar} = change.doc.data()
        const id = change.doc.id
        msg_enviada.push({msg, usuario, avatar, id})
       
      }
    })
    
    setMensagens([...msg_enviada])
    
  

  })
  
  return () => {
    
    pegaMsg()
  }
  
 },[])


 const carregaUserAnon = () =>{
   axios.get('https://randomuser.me/api')
   .then(function (response){
     const user = response.data.results[0];
     setUser({
       name: `${user.name.first} ${user.name.last}`,
       picture: user.picture.large
      })
      console.log('user', user )
   })
   .catch(function (error){
     console.log(error);
   });
 }
 
 
 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={carregaUserAnon}>
        <Image
         style={styles.imagem}
         source={{uri: user.picture}} />
          </TouchableOpacity>



  <Text style={styles.nome}>{user.name}</Text>
     

      
    <ScrollView style={styles.scroll} ref={(view)=>{setScroll(view)}}>
       {
         mensagens.length > 0 && mensagens.map(item => (

          <View key={item.id} style={styles.linha_conv}>

            <Image style={styles.avatar_conv} source={{uri: item.avatar}}/>


            <View style={{marginTop: 7, flexDirection:"column"}}>
            <Text style={{color:"#fff", }}>{item.usuario}</Text>

          <Text style={{color:"#fff"}}>{item.msg}</Text>

          
            </View>
          
          </View>

         ))
       }
    </ScrollView>




       <View style={styles.footer}>
    <TextInput style={styles.caixa}
      onChangeText={text => setCaixaT(text)}
      value={caixaT} 
       />

          {caixaT.length > 0 &&
             <TouchableOpacity style={styles.enviar}  onPress={salvar}>
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
  );
      };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#fff'


    
  },
  imagem: {
    alignItems:'center',
    alignContent:'center',
    width:100,
    height: 100,
    borderRadius: 50,
    borderWidth:3,
    borderColor:'#fff',
    margin:10,
  },
  nome:{
      fontSize: 25,
      color:'#999'
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

  scroll:{
    backgroundColor:"#000",
    width:"100%",
    borderTopColor:'#e6e6e6',
    borderTopWidth:1
  },
  avatar_conv:{

    width:50,
    height: 50,
    borderRadius: 50,
    borderWidth:1,
    borderColor:'#fff',
    margin: 10,
    flexDirection:'row'
  },
  linha_conv:{
    flexDirection:"row",
    paddingLeft:10,
    paddingTop:10,
    marginRight:90,
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
