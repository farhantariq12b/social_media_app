import { createContext } from "react";

export const NewsFeedContext = createContext({
  newsFeed: [],
  setNewsFeed: () => {},
});

export const UserContext = createContext({
  usersData: {},
  setUsersData: () => {},
});
