import { createContext } from "react";

export const NewsFeedContext = createContext({
  newsFeed: [],
  setNewsFeed: () => {},
});
