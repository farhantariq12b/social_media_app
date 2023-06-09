import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const SellerHeader = ({ storePicture, storeName, name, data }) => {
  const navigation = useNavigation();
  const navigationTo = (id) => {
    const clickedProfile = [data].find((item) => item.id === id);
    navigation.navigate("UserDetails", {
      screen: "User",
      params: {
        profileData: clickedProfile,
      },
    });
  };

  const navigateTo = (id) => {
    const clickedProfile = [data].find((item) => item.id === id);
    navigation.navigate("Store", {
      profileData: clickedProfile,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigationTo(data.id)}>
          <Image source={{ uri: storePicture }} style={styles.profilePicture} />
        </TouchableOpacity>
        <View>
          <Text style={styles.username}>{storeName}</Text>
          <Text style={styles.username}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigateTo(data.id)}>
        <Text style={styles.viewStore}>View Store</Text>
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
    fontSize: 12,
    marginRight: 10,
    color: `${colors.secondary}`,
  },
  viewStore: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: `${colors.orange}`,
  },
});
export default SellerHeader;
