import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

const PostsList = ({ posts }) => {
  return (
    <>
      <View style={styles.container}>
        {posts.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image style={styles.images} source={{ uri: item.postImage }} />
          </View>
        ))}
      </View>
      <View style={{ height: 90, backgroundColor: colors.primary }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "flex-start",
    backgroundColor: colors.primary,
  },
  itemContainer: {
    padding: 5,
  },
  images: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
});

export default PostsList;
