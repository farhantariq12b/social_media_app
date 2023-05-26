import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";

const UserInformation = ({ profilePicture, username, onThreeDotsClick }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <TouchableOpacity onPress={onThreeDotsClick}>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size={20}
          color={`${colors.secondary}`}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    color: `${colors.secondary}`,
  },
});

export default UserInformation;
