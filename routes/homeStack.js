import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/header';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const homeStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:'#4caf50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={ () => ({ 
          headerTitle: () => <Header  title='HOME' />,
          headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:80}}/>
        })}


      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};


export default homeStack;