import React from "react";
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { AboutScreen } from "../../screens/AboutScreen";
import { THEME } from "../../theme";
import { AppHeaderIcon } from '../../components/AppHeaderIcon'

const Stack = createNativeStackNavigator();

export const AboutNavigator = ({ navigation }) => {
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
        name="About"
        component={AboutScreen}
        options={{
          title: 'О Приложении',
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
    </Stack.Navigator>
  )
}