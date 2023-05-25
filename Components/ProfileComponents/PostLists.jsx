import { Image, StyleSheet, Text } from "react-native";
import { FlatList, View } from "react-native";

const PostsList = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.images} source={{ uri: item.postImage }} />
        </View>
      )}
      ListFooterComponent={<View style={{ height: 90 }} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 5,
  },
  images: {
    height: 150,
    width: 150,
    borderRadius: 8,
  },
});

export default PostsList;
