import { View, Text, StyleSheet, FlatList } from "react-native";
import StoreHeader from "../Components/Store/StoreHeader";
import { colors } from "../constants/colors";
import CustomButton from "../Components/Button";
import { faJetFighter, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../Components/MarketPlace/ProductList";

// displaying the user's store screen
const StoreScreen = ({ route }) => {
  // Extract the profileData from the route parameters
  const { profileData } = route.params;

  // Header component for the store screen
  const HeaderComponent = () => {
    return (
      <>
        {/* Store header component */}
        <StoreHeader storeData={profileData} />

        {/* Shipping Worldwide section */}
        <View style={styles.shipping}>
          <CustomButton
            icon={faJetFighter}
            color={colors.darkGrey2}
            addAdditionalSize={15}
            iconStyle={true}
          />
          <Text style={styles.shippingText}>Shipping Worldwide</Text>
        </View>

        {/* Store location section */}
        <View style={styles.shipping}>
          <CustomButton
            icon={faLocationPin}
            color={colors.darkGrey2}
            addAdditionalSize={15}
          />
          <Text style={styles.shippingText}>45 East street Lahore</Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.storeScreen}>
      {/* FlatList component for rendering the product list */}
      <FlatList
        ListHeaderComponent={HeaderComponent} // Renders the header component
        data={profileData.productList} // Data for the product list
        numColumns={2} // Number of columns in the product grid
        renderItem={({ item }) => (
          <ProductList
            productName={item.name}
            productPicture={item.productPicture}
            price={item.price}
            addStyle={true}
            productDetails={item}
          />
        )}
        ListFooterComponent={<View style={{ height: 90 }}></View>} // Footer component
        showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
      />
    </View>
  );
};

// Styles for the StoreScreen component
const styles = StyleSheet.create({
  storeScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primary,
  },
  shipping: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    marginLeft: 5,
  },
  shippingText: {
    fontSize: 14,
    color: colors.secondary,
  },
});

export default StoreScreen;
