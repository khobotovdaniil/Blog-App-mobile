import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'react-native-paper';
import { BookedNavigator } from './BookedNavigator'
import { MainNavigator } from "./MainNavigator";
import { Platform } from "react-native";
import { THEME } from "../../theme";


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
    <Tab.Navigator
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
      <Tab.Screen name="All" component={MainNavigator} />
      <Tab.Screen name="Marked" component={BookedNavigator} />
    </Tab.Navigator>
  )
}