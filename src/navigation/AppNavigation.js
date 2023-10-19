import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigator } from './navigators/BottomTabNavigator';
import { AboutNavigator } from './navigators/AboutNavigator';
import { CreateNavigator } from "./navigators/CreateNavigator";

const Drawer = createDrawerNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Drawer.Screen
          name="AboutNavigator"
          component={AboutNavigator}
        />
        <Drawer.Screen
          name="CreateNavigator"
          component={CreateNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}