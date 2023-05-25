import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PostsList from "./PostLists";
import ProductsList from "./ProductsLists";
import { colors } from "../../utils/colors";
import CustomButton from "../Button";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";

const ProfileTabs = ({ data }) => {
  const [selectedSection, setSelectedSection] = useState("Posts");

  const handleSectionPress = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <View>
        <View style={styles.container}>
          <CustomButton
            onPress={() => handleSectionPress("Posts")}
            icon={faAddressCard}
            color={colors.secondary}
          />

          <CustomButton
            onPress={() => handleSectionPress("Products")}
            icon={faShop}
            color={colors.secondary}
          />
        </View>
      </View>
      {selectedSection === "Posts" ? (
        <PostsList posts={data.posts} />
      ) : (
        <ProductsList products={data.productList} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  activeSection: {
    borderBottomColor: `${colors.darkBlue}`,
    borderBottomWidth: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileTabs;
