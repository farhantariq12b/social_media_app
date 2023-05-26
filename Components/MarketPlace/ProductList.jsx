import { Image, View, Text, TouchableOpacity, Pressable } from "react-native";
import { colors } from "../../constants/colors";
import { faHeart as faHeartFiled } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import CustomButton from "../Button.jsx";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductList = ({
  productPicture,
  price,
  productName,
  data,
  productDetails,
  addStyle,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const setLike = () => {
    setIsLiked(!isLiked);
  };

  const navigation = useNavigation();
  const navigateTo = (id) => {
    navigation.navigate("ProductDetails", {
      productDetails: productDetails,
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        { marginTop: addStyle ? 20 : 0, marginLeft: addStyle ? 10 : 0 },
      ]}
      onPress={() => navigateTo(data)}
    >
      <Image source={{ uri: productPicture }} style={styles.profilePicture} />
      <Text style={styles.product}>{productName}</Text>
      <View style={styles.priceLikeSection}>
        <Text style={styles.price}>${price}</Text>
        <CustomButton
          icon={isLiked ? faHeartFiled : faHeart}
          onPress={setLike}
          color={isLiked ? "red" : `${colors.secondary}`}
          addAdditionalSize={25}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: 150,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: `${colors.darkGrey2}`,

    marginRight: 15,
    borderRadius: 8,
  },
  profilePicture: {
    width: 146,
    height: 120,
    // borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  product: {
    fontSize: 14,
    color: `${colors.secondary}`,
    paddingTop: 10,
    paddingLeft: 10,
  },
  price: {
    fontSize: 18,
    color: `${colors.orange}`,
    fontWeight: "bold",
  },
  priceLikeSection: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProductList;
