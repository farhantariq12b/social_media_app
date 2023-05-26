import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({
  icon,
  onPress,
  color,
  addMargin,
  addAdditionalSize,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginRight: addMargin ? 30 : 0 }}
    >
      <FontAwesomeIcon
        icon={icon}
        size={addAdditionalSize ? addAdditionalSize : 30}
        color={color}
        style={{
          transform: iconStyle ? [{ rotate: "-45deg" }] : [{ rotate: "0deg" }],
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
