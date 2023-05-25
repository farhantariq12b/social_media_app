import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native";

const CustomButton = ({
  icon,
  onPress,
  color,
  addMargin,
  addAdditionalSize,
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
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
