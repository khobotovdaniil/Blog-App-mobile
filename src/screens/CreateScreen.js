import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useDispatch } from 'react-redux';
import { THEME } from '../theme';
import { addPost } from '../store/actions/postAction';
import { PhotoPicker } from '../components/PhotoPicker';

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const img = 'https://all.accor.com/magazine/imagerie/1-34bc.jpg'

  const saveHandler = () => {
    const post = {
      img,
      text,
      date: new Date().toJSON(),
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создание нового поста</Text>
          <TextInput
            style={styles.text}
            placeholder='Введите текст заметки'
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker />
          <Button
            title='Создать пост'
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  text: {
    padding: 10,
    marginBottom: 10
  }
})
