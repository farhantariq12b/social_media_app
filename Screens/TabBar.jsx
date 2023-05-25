import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faStore,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationContainer } from "@react-navigation/native";
import NewsFeedScreen from "./NewsFeedScreen";
import CreatePostScreen from "./CreatePostScreen";
import MarketplaceScreen from "./MarketPlaceScreen";
import ProfileScreen from "./ProfileScreen";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StoreScreen from "./StoreScreen";

const Tab = createBottomTabNavigator();
const MarketPlaceStack = createStackNavigator();

const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 60,
  },
  activeTabIcon: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#000000",
  },
});

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#808080",
          headerShown: false,
          tabBarStyle: styles.tabNavigator,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            let icon;

            if (route.name === "NewsFeed") {
              icon = faHouse;
            } else if (route.name === "CreatePost") {
              icon = faPlus;
            } else if (route.name === "Marketplace") {
              icon = faStore;
            } else if (route.name === "Profile") {
              icon = faUser;
            }

            return (
              <View style={focused ? styles.activeTabIcon : {}}>
                <FontAwesomeIcon icon={icon} color={color} size={30} />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="NewsFeed" component={NewsFeedScreen} />
        <Tab.Screen name="CreatePost" component={CreatePostScreen} />
        <Tab.Screen name="Marketplace" component={MarketPlaceStackScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function MarketPlaceStackScreen() {
  return (
    <MarketPlaceStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <MarketPlaceStack.Screen
        name="Marketplace"
        component={MarketplaceScreen}
      />
      <MarketPlaceStack.Screen name="Profile" component={ProfileScreen} />
      <MarketPlaceStack.Screen name="Store" component={StoreScreen} />
    </MarketPlaceStack.Navigator>
  );
}

export default BottomTabs;
