import React, { useContext, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import ShowComment from "./Comment";
import Button from "./Button";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { NewsFeedContext } from "../utils/AppContext";
import { colors } from "../utils/colors";

const BottomSheet = ({
  isModalVisible,
  toggleModal,
  setModalVisible,
  data,
}) => {
  const [text, setText] = useState("");

  const handleChangeText = (inputText) => {
    setText(inputText);
  };
  const { setNewsFeed } = useContext(NewsFeedContext);

  const addComment = () => {
    if (text === "") return;
    setNewsFeed((prevData) => {
      const newData = [...prevData];
      const dataIndex = newData.findIndex((item) => item.id === data.id);

      if (dataIndex !== -1) {
        newData[dataIndex].comments.push({
          id: newData[dataIndex].comments.length + 1,
          comment: text,
          profileImage: newData[dataIndex].profileImage,
        });
      }

      return newData;
    });
    setText("");
  };

  return (
    <View>
      <StatusBar />

      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <Text style={styles.text}>{`${data.comments.length} ${
              data.comments.length > 1 ? "Comments" : "Comment"
            }`}</Text>

            <View style={{ flexGrow: 1 }}>
              {data.comments && data.comments.length > 0 ? (
                <FlatList
                  data={data.comments}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => <ShowComment comment={item} />}
                />
              ) : (
                <Text>No comments available</Text>
              )}
            </View>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Enter Comment"
              value={text}
              onChangeText={handleChangeText}
              placeholderTextColor="#999"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Button
              style={styles.sendButton}
              icon={faPaperPlane}
              onPress={addComment}
              addAdditionalSize={25}
              color={"#cccccc"}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: `${colors.primary}`,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    minHeight: 550,
    maxHeight: 550,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: `${colors.secondary}`,
    fontSize: 24,
    marginTop: 20,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    color: `${colors.secondary}`,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 10,
    color: `${colors.secondary}`,
  },
  sendButton: {
    width: "100%",
  },
});
