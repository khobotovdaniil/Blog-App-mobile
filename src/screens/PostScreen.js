import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';

import { DATA } from '../data';
import { THEME } from '../theme';

export const PostScreen = ({ route, navigation }) => {
  const { postId } = route.params;

  const post = DATA.find(p => p.id === postId)

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => { }
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{ uri: post.img }}
        />
        <View style={styles.textWrap}>
          <Text style={styles.title}>{post.text}</Text>
        </View>
        <Button
          title='Удалить'
          color={THEME.DANGER_COLOR}
          onPress={removeHandler}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  },
  textWrap: {
    marginVertical: 20
  },
  title: {
    fontFamily: 'open-regular'
  },
  image: {
    width: '100%',
    height: 200
  }
})
