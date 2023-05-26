import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SellerHeader from "./SellerHeader";
import ProductList from "./ProductList";

const MarketPlace = ({ data }) => {
  return (
    <View style={styles.container}>
      <SellerHeader
        storePicture={data.storePicture}
        storeName={data.storeName}
        name={data.name}
        data={data}
      />
      <View style={styles.section}>
        <FlatList
          data={data.productList}
          renderItem={({ item }) => (
            <ProductList
              productPicture={item.productPicture}
              price={item.price}
              productName={item.name}
              data={data}
              productDetails={item}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  section: {
    padding: 10,
  },
});

export default MarketPlace;
