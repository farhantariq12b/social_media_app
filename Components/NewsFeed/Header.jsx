import React from "react";
import { View, Image } from "react-native";
import { icons } from "../../constants/icons";
import { colors } from "../../utils/colors";

const Header = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${colors.primary}`,
      }}
    >
      <Image
        source={icons.header}
        style={{ height: 60, width: 60 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
