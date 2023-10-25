import React, { useState } from "react";
import { StyleSheet, View, Image, Button } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

export const PhotoPicker = ({ }) => {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState(null)

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permission!',
        'You need to grant camera access to use this app'
      );
      return false
    }
    return true;
  }

  const takePhoto = async () => {
    const hasPermission = await verifyPermission()
    if (!hasPermission) {
      return;
    }
    const img = await launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.7
    });
    setImage(img.assets)
  }

  // const takePhoto = async () => {
  //   const hasPermissions = await ImagePicker.getCameraPermissionsAsync()

  //   if (hasPermissions) {
  //     return
  //   }

  //   const img = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     quality: 0.7,
  //     allowsEditing: false,
  //     aspect: [16, 9]
  //   })

  //   console.log(img);
  // }

  return (
    <View style={styles.wrapper}>
      <Button title='Сделать фото' onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image[0].uri }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})