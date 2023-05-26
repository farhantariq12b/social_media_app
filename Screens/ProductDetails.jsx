import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import CustomButton from "../Components/Button";
import { colors } from "../utils/colors";
import Footer from "../Components/ProductDetails/Footer";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants/icons";
import { useState } from "react";
import { set } from "react-native-reanimated";

const ProductDetails = ({ route }) => {
  const { productDetails } = route.params;
  const [increaseQuantity, setIncreaseQuantity] = useState(1);
  const { price } = productDetails;
  const [productPrice, setProductPrice] = useState(price);

  const increase = () => {
    setIncreaseQuantity(increaseQuantity + 1);
    setProductPrice(price * (increaseQuantity + 1));
  };
  const decrease = () => {
    if (increaseQuantity > 1) {
      setIncreaseQuantity(increaseQuantity - 1);
      setProductPrice(productPrice - price);
    }
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primary }}>
        <Image
          style={styles.productImage}
          source={{ uri: productDetails.productPicture }}
        />
        <View style={styles.mainContainer}>
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{productDetails.name}</Text>
          </View>
          <View style={styles.productDescriptionContainer}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              impedit iusto id nisi. Expedita facere, voluptatum, voluptates,
              adipisicing elit. Commodi impedit iusto id nisi. Expedita facere,
              voluptatum, voluptates,
            </Text>
          </View>
          <View style={styles.quantityConatiner}>
            <View style={styles.increaseDecreaseQuantity}>
              <TouchableOpacity style={styles.plusBtn} onPress={increase}>
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={styles.plusBtnImage}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{increaseQuantity}</Text>
              <TouchableOpacity style={styles.minusBtn} onPress={decrease}>
                <Image
                  source={icons.minus}
                  resizeMode="contain"
                  style={styles.minusBtnImage}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.price}>$ {productPrice}</Text>
            </View>
          </View>
          <Text>Standard Shipping</Text>

          <Footer />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: -45,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: `${colors.primary}`,
  },
  productNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productDescriptionContainer: {
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    color: `${colors.darkGrey2}`,
  },
  productName: {
    fontSize: 30,
    fontWeight: "500",
    color: `${colors.secondary}`,
  },
  quantityConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: `${colors.primary}`,
  },

  productImage: {
    width: "100%",
    height: 400,
  },
  increaseDecreaseQuantity: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${colors.primary}`,
  },
  plusBtn: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -10,
  },
  plusBtnImage: {
    width: 40,
    height: 40,
    backgroundColor:
      colors.primary === "#ffffff" ? colors.primary : colors.secondary,
    borderRadius: 50,
  },
  minusBtn: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  minusBtnImage: {
    width: 40,
    height: 40,
    backgroundColor:
      colors.primary === "#ffffff" ? colors.primary : colors.secondary,
    borderRadius: 50,
  },
  quantity: {
    color: `${colors.secondary}`,
    fontSize: 25,
    fontWeight: "500",
  },
  price: {
    fontSize: 30,
    fontWeight: "500",
    color: `${colors.secondary}`,
  },
});

export default ProductDetails;
