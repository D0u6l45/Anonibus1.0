import React, {useState,useEffect} from 'react';

import {Text, TextInput,View,Button,Dimensions,ScrollView, SafeAreaView, StyleSheet} from 'react-native';
 
 import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login({navigation}){

//const larg = Dimensions.get("window").width;


        return(
          
          <SafeAreaView   style={styles.container}>
              <>
              <Text style={{color:"#fff", fontSize: 40, marginBottom:50 }}>Anonibus </Text>
              <View style={{
                    flexDirection:"row",
                    right:15

              }}>
              <Ionicons  style={{
              left:30
              }} name={'ios-contact'} size={35} color={"#fff"}/>
              


               <TextInput placeholder={"                    Usuario"} 
               style={{
                 width: 250,
                  color:"#fff",
                   textAlign:"left",
                    height: 40,
                     marginBottom:30,
                      borderWidth:1,
                       borderBottomColor:"#e0e0e0e0",
                       paddingLeft:35
                      }} />
               </View>
            

               <TextInput secureTextEntry={true} placeholder={"                    Senha"} 
               style={{
                 width: 250, 
                 textAlign:"left",
                 height: 40,
                 opacity:0.9,
                 color:"#fff", 
                 borderWidth:1, 
                 borderBottomColor:"#e0e0e0e0",
                 paddingLeft:35

                 
                 }} />
           
                 
           <Button  title="outra pag" onPress={()=>navigation.push('Outra')} />
           <Button  title="outra pag_params" 
           onPress={()=>navigation.push('Outra', {name:"logado"})} />
           
            </>
          </SafeAreaView>

   
          )


          


          }


          const styles = StyleSheet.create({

            container:{
              backgroundColor:"#000",
              flex:1,
              alignItems: "center",
              justifyContent:"center"
            }


        })