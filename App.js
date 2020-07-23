
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
//import SignIn from './base';
import Chat from './chat'
import Home from './home'
import Outra from './home/outra'
import Login from './login'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

//const AuthStack = createStackNavigator();
const homeStackScreen = () =>(
 
  <stack.Navigator  headerMode={"none"} >
      <stack.Screen name="Chat" component={Chat} /> 
      <stack.Screen name="Outra" component={Outra} />

  </stack.Navigator>
  

)




export default ()=> {
  





  return (



    
    <NavigationContainer>


      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'Login'){

            iconName = focused
            ? 'ios-contact'
            : 'md-contact';
          
          }else if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'md-home';
          } else if (route.name === 'Chat') {
            iconName = focused 
            ? 'ios-chatbubbles' 
            : 'md-chatbubbles';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
      
    >
       
       
       <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Chat" component={homeStackScreen} />
        
        
      </Tab.Navigator>
   
      
      
      
      
    
    
    </NavigationContainer>
  );
    
   
}
