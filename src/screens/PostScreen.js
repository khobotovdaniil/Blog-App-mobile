import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from '../data';
import { THEME } from '../theme';
import { toggleBooked } from '../store/actions/postAction';
import { AppHeaderIcon } from '../components/AppHeaderIcon';


export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { postId, date } = route.params

  const post = DATA.find(p => p.id === postId)

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const toggleHandler = () => {
    dispatch(toggleBooked(postId))
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Add to Booked'
            iconName={booked ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleHandler}
          />
        </HeaderButtons>
      )
    })
  }, [navigation, toggleHandler])

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
