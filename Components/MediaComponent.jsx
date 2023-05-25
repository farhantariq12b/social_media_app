import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MediaComponent = ({ mediaUrl, isVideo }) => {
  return (
    <View style={styles.container}>
      {isVideo ? (
        <Image source={{ uri: mediaUrl }} style={styles.image} />
      ) : (
        <Image source={{ uri: mediaUrl }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  video: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default MediaComponent;
