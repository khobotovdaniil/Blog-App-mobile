import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { THEME } from '../theme';
import { removePost, toggleBooked } from '../store/actions/postAction';
import { AppHeaderIcon } from '../components/AppHeaderIcon';


export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { postId, date } = route.params

  const post = useSelector(state =>
    state.post.allPosts.find(p => p.id === postId)
  )

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const toggleHandler = () => {
    dispatch(toggleBooked(post))
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
          onPress() {
            navigation.navigate('Main')
            dispatch(removePost(postId))
          }
        },
      ],
      { cancelable: false }
    );
  }

  if (!post) {
    return null
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
