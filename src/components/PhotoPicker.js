import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Button, Text } from "react-native";
import { launchCameraAsync, launchImageLibraryAsync, requestMediaLibraryPermissionsAsync, requestCameraPermissionsAsync } from 'expo-image-picker';

import { THEME } from "../theme";

export const PhotoPicker = ({ onPick, img }) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!img) {
      setImage(null)
    }
  }, [img])

  const takePhoto = async () => {
    const permissionResult = await requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Вы не дали приложению разрешение на доступ к камере!');
      return
    }
    await launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.7
    })
      .then((response) => {
        if (!response.canceled) {
          setImage(response.assets[0].uri)
          onPick(response.assets[0].uri)
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }

  const takePicture = async () => {
    const permissionResult = await requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Вы не дали приложению разрешение на доступ к файлам!');
      return
    }
    await launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.7
    })
      .then((response) => {
        if (!response.canceled) {
          setImage(response.assets[0].uri)
          onPick(response.assets[0].uri)
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttons}>
        <Button color={THEME.MAIN_COLOR} title='Сделать фото' onPress={takePhoto} />
        <Button color={THEME.MAIN_COLOR} title='Фото из галереи' onPress={takePicture} />
      </View>
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})