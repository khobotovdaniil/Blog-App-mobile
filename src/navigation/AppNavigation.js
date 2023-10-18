import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const iconName = 'ios-star'

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
      }}
    >
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Мой блог',
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title='Take Photo'
                iconName='ios-camera'
                onPress={() => console.log('Press photo')}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title='Toggle Drawer'
                iconName={'ios-menu'}
                onPress={() => console.log('Press drawer')}
              />
            </HeaderButtons>
          )
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title='Take Photo'
                iconName={iconName}
                onPress={() => console.log('Press photo')}
              />
            </HeaderButtons>
          )
        })}
      />
    </Stack.Navigator>
  )
}