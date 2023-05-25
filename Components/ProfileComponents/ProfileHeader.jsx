import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const ProfileHeader = ({ profile }) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.username}>{profile.username}</Text>
        <Image
          style={styles.profileImage}
          source={{ uri: profile.profileImage }}
        />
        <Text>{profile.name}</Text>
      </View>
      <View>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    gap: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bio: {
    padding: 10,
    color: `${colors.darkGrey2}`,
  },
});
export default ProfileHeader;
