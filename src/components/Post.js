import React from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from "react-native";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} resizeMode="cover" source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    height: 200,
    width: '100%'
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
})