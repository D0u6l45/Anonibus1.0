
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator} from '@react-navigation/stack';
//import SignIn from './base';
import Chat from './chat'
import Home from './home'
import Login from './login'
import Ionicons from 'react-native-vector-icons/Ionicons';


//const AuthStack = createStackNavigator();


export default ()=> {
  const Tab = createBottomTabNavigator();
 
  return (
    <NavigationContainer>


  {/*    
<AuthStack.Navigator>
<AuthStack.Screen name= "SignIn" component={SignIn} options={{title:"Acessar"}}/>
<AuthStack.Screen name= "CreateAccount" component={CreateAccount} options= {{title:"Acessar"}}/>


</AuthStack.Navigator>
  */}

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
        <Tab.Screen name="Chat" component={Chat} />
        
        
      </Tab.Navigator>
   
      
      
      
      
    
    
    </NavigationContainer>
  );
    
   
}
