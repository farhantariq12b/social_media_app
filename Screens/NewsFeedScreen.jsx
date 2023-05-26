import React, { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import NewsFeedCard from "../Components/NewsFeed/NewsFeedCard";
import { sharedData } from "../utils/SharedData";
import { colors } from "../utils/colors";
import { NewsFeedContext } from "../utils/AppContext";
import Header from "../Components/NewsFeed/Header";

const NewsFeedScreen = () => {
  const [newsFeed, setNewsFeed] = useState(sharedData);
  return (
    <NewsFeedContext.Provider value={{ newsFeed, setNewsFeed }}>
      <Header />
      <FlatList
        style={styles.flatlist}
        data={newsFeed}
        key={newsFeed.id}
        renderItem={({ item }) => <NewsFeedCard data={item} />}
        onEndReachedThreshold={0.3}
        onEndReached={() => {
          setNewsFeed((prevData) => {
            return [
              ...prevData,
              {
                id: prevData.length + 1,
                name: "John Doe",
                profileImage:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                postImage:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                likes: 0,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                comments: [],
              },
            ];
          });
        }}
        ListFooterComponent={
          <ActivityIndicator
            style={styles.indicator}
            size="small"
            color={colors.secondary}
          />
        }
      />
    </NewsFeedContext.Provider>
  );
};
const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 20,
    backgroundColor: `${colors.primary}`,
  },
  indicator: {
    marginBottom: 90,
  },
});

export default NewsFeedScreen;
