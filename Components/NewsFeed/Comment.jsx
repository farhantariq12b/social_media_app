import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

const ShowComment = ({ comment }) => {
  return (
    <View style={styles.comment}>
      <Image
        source={{ uri: comment.profileImage }}
        style={styles.profilePicture}
      />
      <Text style={styles.commentText}>{comment.comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: `${colors.primary}`,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  commentText: {
    fontSize: 16,
    color: `${colors.secondary}`,
    width: "86%",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default ShowComment;
