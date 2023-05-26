import React from "react";
import { View, Text } from "react-native";
import AddPost from "../Components/AddPost/AddPost";
import { colors } from "../constants/colors";
import { StyleSheet } from "react-native";
import Header from "../Components/NewsFeed/Header";

const CreatePostScreen = () => {
  return (
    <View style={styles.createPostScreen}>
      <Header />
      <AddPost />
    </View>
  );
};

const styles = StyleSheet.create({
  createPostScreen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default CreatePostScreen;
