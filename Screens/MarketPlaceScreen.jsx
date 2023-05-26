import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import MarketPlace from "../Components/MarketPlace/MarketPlace";
import { colors } from "../constants/colors";
import { UsersData } from "../utils/UsersData";
import Header from "../Components/NewsFeed/Header";

const MarketplaceScreen = () => {
  const [productList, setProductList] = useState(UsersData);
  return (
    <View
      style={{
        backgroundColor: `${colors.primary}`,
        flex: 1,
      }}
    >
      <Header />
      <FlatList
        style={{
          backgroundColor: `${colors.primary}`,
          flex: 1,
        }}
        data={productList}
        key={productList.id}
        renderItem={({ item }) => <MarketPlace data={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={<View style={{ height: 70 }} />}
      />
    </View>
  );
};

export default MarketplaceScreen;
