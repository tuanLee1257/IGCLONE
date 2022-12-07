import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NewPostSCreen from './NewPostSCreen';
import LoginScreen from './LoginScreen';
const Stack = createStackNavigator();
const screenOptions = {headerShown: false};
function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostSCreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
// navigationHook
