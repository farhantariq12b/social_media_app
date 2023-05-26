import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { colors } from "../constants/colors";
import Footer from "../Components/ProductDetails/Footer";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants/icons";

// Screen for displaying product details
const ProductDetails = ({ route }) => {
  const { productDetails } = route.params;

  // State for managing the quantity and price of the product
  const [increaseQuantity, setIncreaseQuantity] = useState(1);
  const { price } = productDetails;
  const [productPrice, setProductPrice] = useState(price);

  // Function to increase the quantity and update the price
  const increase = () => {
    setIncreaseQuantity(increaseQuantity + 1);
    setProductPrice(price * (increaseQuantity + 1));
  };

  // Function to decrease the quantity and update the price
  const decrease = () => {
    if (increaseQuantity > 1) {
      setIncreaseQuantity(increaseQuantity - 1);
      setProductPrice(productPrice - price);
    }
  };

  return (
    <>
      {/* Scrollable container for the product details */}
      <ScrollView style={{ backgroundColor: colors.primary }}>
        {/* Product image */}
        <Image
          style={styles.productImage}
          source={{ uri: productDetails.productPicture }}
        />

        <View style={styles.mainContainer}>
          {/* Product name */}
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{productDetails.name}</Text>
          </View>

          {/* Product description */}
          <View style={styles.productDescriptionContainer}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              impedit iusto id nisi. Expedita facere, voluptatum, voluptates,
              adipisicing elit. Commodi impedit iusto id nisi. Expedita facere,
              voluptatum, voluptates,
            </Text>
          </View>

          {/* Quantity and price */}
          <View style={styles.quantityConatiner}>
            <View style={styles.increaseDecreaseQuantity}>
              {/* Button to increase quantity */}
              <TouchableOpacity style={styles.plusBtn} onPress={increase}>
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={styles.plusBtnImage}
                />
              </TouchableOpacity>

              {/* Display the quantity */}
              <Text style={styles.quantity}>{increaseQuantity}</Text>

              {/* Button to decrease quantity */}
              <TouchableOpacity style={styles.minusBtn} onPress={decrease}>
                <Image
                  source={icons.minus}
                  resizeMode="contain"
                  style={styles.minusBtnImage}
                />
              </TouchableOpacity>
            </View>

            {/* Display the product price */}
            <View>
              <Text style={styles.price}>$ {productPrice}</Text>
            </View>
          </View>

          <Text>Standard Shipping</Text>

          {/* Footer component */}
          <Footer />
        </View>
      </ScrollView>
    </>
  );
};

// Styles for the ProductDetails component
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
