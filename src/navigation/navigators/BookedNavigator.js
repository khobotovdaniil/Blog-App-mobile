import React from "react";
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PostScreen } from "../../screens/PostScreen";
import { BookedScreen } from "../../screens/BookedScreen";
import { THEME } from "../../theme";
import { AppHeaderIcon } from '../../components/AppHeaderIcon'

const Stack = createNativeStackNavigator();

export const BookedNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
      }}
    >
      <Stack.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          title: 'Избранное',
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
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  )
}