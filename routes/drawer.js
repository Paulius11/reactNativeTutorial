import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import aboutNavigator from './aboutStack';
import homeNavigator from './homeStack';

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={homeNavigator} />
                <Drawer.Screen name="About" component={aboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}