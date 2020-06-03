import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from "../screens/About";
import Header from '../shared/header'
import { Image } from 'react-native';

const Stack = createStackNavigator()

export default function aboutNavigator() {
  return (
    <Stack.Navigator initialRouteName='About'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#999',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen 
          name='About' 
          component={About} 
          options={() => ({ 
            headerTitle: () => <Header title='About' />,
            headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:80}}/>
          })}
      />
    </Stack.Navigator>
  );
}