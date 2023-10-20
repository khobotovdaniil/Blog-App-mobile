import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigator } from './navigators/BottomTabNavigator';
import { AboutNavigator } from './navigators/AboutNavigator';
import { CreateNavigator } from "./navigators/CreateNavigator";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

const Drawer = createDrawerNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: THEME.MAIN_COLOR,
          drawerLabelStyle: {
            fontFamily: 'open-bold'
          }
        }}
      >
        <Drawer.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            title: 'Главная',
            drawerIcon: () => (
              <Ionicons name='home' size={22} color={THEME.MAIN_COLOR} />
            )
          }}
        />
        <Drawer.Screen
          name="CreateNavigator"
          component={CreateNavigator}
          options={{
            title: 'Новый пост',
            drawerIcon: () => (
              <Ionicons name='ios-camera' size={22} color={THEME.MAIN_COLOR} />
            )
          }}
        />
        <Drawer.Screen
          name="AboutNavigator"
          component={AboutNavigator}
          options={{
            title: 'О приложении',
            drawerIcon: () => (
              <Ionicons name='information-circle' size={22} color={THEME.MAIN_COLOR} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer >
  )
}