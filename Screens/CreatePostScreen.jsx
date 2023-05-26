import React from "react";
import { View, Text } from "react-native";
import AddPost from "../Components/AddPost/AddPost";
import { colors } from "../utils/colors";
import { StyleSheet } from "react-native";

const CreatePostScreen = () => {
  return (
    <View style={styles.createPostScreen}>
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
