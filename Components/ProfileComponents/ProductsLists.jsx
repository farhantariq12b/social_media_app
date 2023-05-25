import { Image } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ProductsList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      scrollEnabled={true}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.images} source={{ uri: item.productPicture }} />
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

export default ProductsList;
