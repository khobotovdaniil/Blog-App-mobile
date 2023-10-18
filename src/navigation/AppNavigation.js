import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../theme";
import { BookedStackScreen } from './stackScreens/BookedStackScreen'
import { MainStackScreen } from "./stackScreens/MainStackScreen";

const BottomTab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = route.name === 'All' ? 'ios-albums' : 'ios-star'

            return <Ionicons name={iconName} size={25} color={color} />
          },
          headerShown: false,
          tabBarActiveTintColor: THEME.MAIN_COLOR
        })}
      >
        <BottomTab.Screen name="All" component={MainStackScreen} />
        <BottomTab.Screen name="Booked" component={BookedStackScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}