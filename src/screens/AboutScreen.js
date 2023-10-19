import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { THEME } from '../theme'

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Приложение для заметок</Text>
      <Text>Версия <Text style={styles.version}>1.0.0</Text></Text>
      <View style={styles.button}>
        <Button
          title="Назад"
          color={THEME.MAIN_COLOR}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontFamily: 'open-bold'
  },
  button: {
    marginTop: 30
  }
})
