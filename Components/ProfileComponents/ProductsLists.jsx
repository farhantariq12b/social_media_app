import { Image, Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const ProductsList = ({ products }) => {
  const navigation = useNavigation();
  const navigationTo = (item, routeName) => {
    navigation.navigate(routeName, {
      productDetails: item,
    });
  };

  return (
    <>
      <View style={styles.container}>
        {products.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigationTo(item, "Product")}>
              <Image
                style={styles.images}
                source={{ uri: item.productPicture }}
              />
            </TouchableOpacity>
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

export default ProductsList;
