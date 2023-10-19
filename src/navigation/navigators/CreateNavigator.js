import React from "react";
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CreateScreen } from "../../screens/CreateScreen";
import { THEME } from "../../theme";
import { AppHeaderIcon } from '../../components/AppHeaderIcon'

const Stack = createNativeStackNavigator();

export const CreateNavigator = ({ navigation }) => {
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
        name="Create"
        component={CreateScreen}
        options={{
          title: 'Создать',
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