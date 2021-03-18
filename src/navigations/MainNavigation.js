import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';

const Stack=createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Index" options={{headerShown:false}} component={IndexScreen}/>
      <Stack.Screen name="Edit" options={{headerShown:false}} component={EditScreen}/>
      <Stack.Screen name="Show" options={{headerShown:false}} component={ShowScreen}/>
      <Stack.Screen name="Create" options={{headerShown:false}} component={CreateScreen}/>
    </Stack.Navigator>
  )
}

export default () => {
 return(
   <NavigationContainer>
     <MyStack />
   </NavigationContainer>
 ) 
}
