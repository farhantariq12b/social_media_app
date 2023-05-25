import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import SellerHeader from "./SellerHeader";
import ProductList from "./ProductList";

const MarketPlace = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.sectionButtonContainer}>
        <Pressable
          style={[
            styles.sectionButton,
            activeSection === "buy" && styles.activeSectionButton,
          ]}
          onPress={() => handleSectionChange("buy")}
        >
          <Text style={styles.sectionTitle}>Buy</Text>
        </Pressable>
        <Pressable
          style={[
            styles.sectionButton,
            activeSection === "sell" && styles.activeSectionButton,
          ]}
          onPress={() => handleSectionChange("sell")}
        >
          <Text style={styles.sectionTitle}>Sell</Text>
        </Pressable>
      </View> */}
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
