import { View, Text, StyleSheet, FlatList } from "react-native";
import StoreHeader from "../Components/Store/StoreHeader";
import { colors } from "../utils/colors";
import CustomButton from "../Components/Button";
import { faJetFighter, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../Components/ProductList";

const StoreScreen = ({ route }) => {
  const { profileData } = route.params;

  const HeaderComponent = () => {
    return (
      <>
        <StoreHeader storeData={profileData} />
        <View style={styles.shipping}>
          <CustomButton
            icon={faJetFighter}
            color={colors.darkGrey2}
            addAdditionalSize={15}
            iconStyle={true}
          />
          <Text style={styles.shippingText}>Shipping Worldwide</Text>
        </View>

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
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={profileData.productList}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductList
            productName={item.name}
            productPicture={item.productPicture}
            price={item.price}
            addStyle={true}
            productDetails={item}
          />
        )}
        ListFooterComponent={<View style={{ height: 90 }}></View>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

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
