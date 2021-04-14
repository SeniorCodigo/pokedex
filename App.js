import React from 'react';
import Home from './viewsNavigate/Home';
import Tap from './viewsNavigate/Tap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App =()=> {
  
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Tap">
      <Stack.Screen 
        name="Tap" 
        component={Tap}
        options={{headerShown: false}} />
      
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown: false}} />
    </Stack.Navigator>

  </NavigationContainer>

  );
}

export default App;