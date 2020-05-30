import React, { useState } from 'react';
import * as Font from 'expo-font';
import{ AppLoading } from 'expo';
import drawerNavigator from './routes/drawer';


const getFonts = () => Font.loadAsync({
    'roboto-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'roboto-bold' : require('./assets/fonts/Nunito-Bold.ttf')
    // 'roboto-regular' : require('./assets/fonts/Roboto-Regular.ttf'),
    // 'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf')
  })


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(fontLoaded){
  return (
    drawerNavigator()
  );
  } else {
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontLoaded(true)}
    />
    )
  }
}