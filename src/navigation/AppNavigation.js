import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'react-native-paper';

import { THEME } from "../theme";
import { BookedStackScreen } from './stackScreens/BookedStackScreen'
import { MainStackScreen } from "./stackScreens/MainStackScreen";
import { Platform } from "react-native";

const BottomTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const AppNavigation = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        activeColor={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
        inactiveColor='#9fa7b6'
        barStyle={{
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
          height: 70,
        }}
        shifting={true}
        tabBarOptions={{
          activeBackgroundColor: 'transparent'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = route.name === 'All' ? 'ios-albums' : 'ios-star'

            return <Ionicons name={iconName} size={25} color={color} />
          },
          tabBarLabel: route.name === 'All' ? 'Все' : 'Избранное',
          headerShown: false
        })}
      >
        <BottomTab.Screen name="All" component={MainStackScreen} />
        <BottomTab.Screen name="Marked" component={BookedStackScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}