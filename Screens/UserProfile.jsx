import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import ProfileHeader from "../Components/ProfileComponents/ProfileHeader";
import { UsersData } from "../utils/UsersData";
import GeneraicCount from "../Components/ProfileComponents/GenericFollowers";
import { colors } from "../utils/colors";
import ProfileTabs from "../Components/ProfileComponents/ProfileTabs";
import { ScrollView } from "react-native-gesture-handler";

const UserProfile = ({ route }) => {
  const showToast = () => {
    ToastAndroid.show("Coming Soon!", ToastAndroid.SHORT);
  };
  let profileData;
  if (route.params) {
    profileData = route.params.profileData;
  } else {
    profileData = UsersData[0];
  }
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primary }}>
        <View style={styles.mainContainer}>
          <ProfileHeader profile={profileData} />
          <View style={styles.followers}>
            <GeneraicCount
              count={profileData.followers}
              name="Followers"
              addLine
            />
            <GeneraicCount
              count={profileData.following}
              name="Following"
              addLine
            />
            <GeneraicCount count={profileData.views} name="Views" />
          </View>
          <TouchableOpacity style={styles.editButton} onPress={showToast}>
            <Text style={styles.button}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <ProfileTabs data={profileData} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.primary,
  },
  followers: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    paddingTop: 30,
  },
  editButton: {
    backgroundColor: `${colors.primary}`,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: `${colors.darkGrey2}`,
    width: "30%",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    color: `${colors.darkGrey}`,
  },
});

export default UserProfile;
