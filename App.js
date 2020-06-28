
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './chat'
import Home from './home'
//import Teste from './teste'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, ImageBackgroundComponent } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
 
  return (
    <NavigationContainer>{
      
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubble-outline  ';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      
    >
       
       {// <Tab.Screen  name="Teste" component={Teste}/> // 
       
      }
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Chat" component={Chat} />
        
        
      </Tab.Navigator>
      
      
      }</NavigationContainer>
  );
    
   
}
