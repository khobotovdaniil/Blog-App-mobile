import React from "react";
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PostScreen } from "../../screens/PostScreen";
import { MainScreen } from "../../screens/MainScreen";
import { THEME } from "../../theme";
import { AppHeaderIcon } from '../../components/AppHeaderIcon'

const Stack = createNativeStackNavigator();

export const MainNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Мой блог',
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title='Take Photo'
                iconName='ios-camera'
                onPress={() => navigation.navigate('Create')}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title='Toggle Drawer'
                iconName={'ios-menu'}
                onPress={() => navigation.toggleDrawer()}
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
                title='Add to Booked'
                iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                onPress={() => console.log('Press Book')}
              />
            </HeaderButtons>
          )
        })}
      />
    </Stack.Navigator>
  )
}