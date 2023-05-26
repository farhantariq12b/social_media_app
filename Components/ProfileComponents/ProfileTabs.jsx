import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PostsList from "./PostLists";
import ProductsList from "./ProductsLists";
import { colors } from "../../utils/colors";
import CustomButton from "../Button";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";

const ProfileTabs = ({ data }) => {
  return (
    <>
      <PostsList posts={data.posts} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.primary,
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
