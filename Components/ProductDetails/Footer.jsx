import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ToastAndroid,
} from "react-native";

import { icons } from "../../constants/icons";
import { SIZES } from "../../constants/sizes";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const Footer = ({}) => {
  const [isLiked, setIsLiked] = useState(false);
  const setLike = () => {
    setIsLiked(!isLiked);
  };
  const showToast = () => {
    ToastAndroid.show("Coming Soon!", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={setLike}>
        <Image
          source={isLiked ? icons.heart : icons.heartOutline}
          resizeMode="contain"
          style={[
            styles.likeBtnImage,
            {
              tintColor: isLiked ? colors.orange : colors.orange,
              width: isLiked ? 40 : 30,
              height: isLiked ? 40 : 30,
            },
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={() => showToast()}>
        <Text style={styles.applyBtnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.small,
    backgroundColor: `${colors.primary}`,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: 40,
    height: 40,
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: colors.secondary,
  },
});

export default Footer;
