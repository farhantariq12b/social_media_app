import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UserInformation from "./UserInformation";
import MediaComponent from "./MediaComponent";
import CustomButton from "../Button";
import {
  faBookmark as faBookmarkFilled,
  faHeart as faHeartFiled,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import BottomSheet from "./BottomSheet";
import { NewsFeedContext } from "../../utils/AppContext";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  newsFeed: {
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  likeCommentbuttons: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  bookmark: {
    marginLeft: 10,
  },
  likesText: {
    fontWeight: "bold",
    color: `${colors.secondary}`,
    padding: 10,
  },
  description: {
    color: `${colors.darkGrey}`,
    padding: 10,
  },
  allComments: {
    color: "#BFCCB5",
    paddingLeft: 10,
  },
});

const NewsFeedCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { setNewsFeed } = useContext(NewsFeedContext);
  const [isSaved, setIsSaved] = useState(false);

  const setLike = () => {
    setIsLiked(!isLiked);
    // Add like to data array
    setNewsFeed((prevData) => {
      const newData = [...prevData];
      const dataIndex = newData.findIndex((item) => item.id === data.id);

      if (dataIndex !== -1) {
        if (isLiked) {
          newData[dataIndex].likes -= 1;
        } else {
          newData[dataIndex].likes += 1;
        }
      }

      return newData;
    });
  };
  const addBookmark = () => {
    setIsSaved(!isSaved);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.newsFeed}>
      <UserInformation
        profilePicture={data?.profileImage}
        username={data?.name}
      />

      <MediaComponent mediaUrl={data?.postImage} isVideo={false} />

      <View style={styles.buttons}>
        <View style={styles.likeCommentbuttons}>
          <CustomButton
            icon={isLiked ? faHeartFiled : faHeart}
            onPress={setLike}
            color={isLiked ? "red" : `${colors.secondary}`}
            addMargin
          />
          <CustomButton
            icon={faComment}
            onPress={toggleModal}
            addMargin
            color={colors.secondary}
          />
        </View>
        <TouchableOpacity onPress={addBookmark}>
          <FontAwesomeIcon
            icon={isSaved ? faBookmarkFilled : faBookmark}
            size={30}
            style={styles.bookmark}
            color={isSaved ? "black" : `${colors.secondary}`}
          />
        </TouchableOpacity>
      </View>

      {data.likes && data.likes > 0 ? (
        <Text style={styles.likesText}>{`${data.likes} ${
          data.likes > 1 ? "likes" : "like"
        }`}</Text>
      ) : null}

      <Text style={styles.description}>
        <Text style={{ fontWeight: "bold" }}>{data.name} </Text>
        {data.description}{" "}
      </Text>

      {data.comments && data.comments.length > 1 ? (
        <Text style={styles.allComments} onPress={toggleModal}>
          View all {data.comments.length} comments
        </Text>
      ) : null}

      <BottomSheet
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        data={data}
      />
    </View>
  );
};

export default NewsFeedCard;
