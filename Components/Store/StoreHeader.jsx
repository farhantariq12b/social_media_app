import { Image, StyleSheet, View } from "react-native";
import GeneraicCount from "../ProfileComponents/GenericFollowers";
import { Text } from "react-native";
import { colors } from "../../utils/colors";

const StoreHeader = ({ storeData }) => {
  return (
    <>
      <View style={styles.image}>
        <Image
          source={{ uri: storeData.storePicture }}
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.storeName}>
        <Text style={{ color: colors.secondary, fontWeight: "bold" }}>
          {storeData.storeName}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <GeneraicCount
          count={storeData.productList.length}
          name="Products"
          addLine={true}
        />
        <GeneraicCount
          count={storeData.followers}
          name="Followers"
          addLine={true}
        />
        <GeneraicCount count={storeData.following} name="Following" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  storeName: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // marginRight: 10,
  },
});

export default StoreHeader;
