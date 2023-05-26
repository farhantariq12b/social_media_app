import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faStore,
  faUser,
  faHouse,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import NewsFeedScreen from "./NewsFeedScreen";
import CreatePostScreen from "./CreatePostScreen";
import MarketplaceScreen from "./MarketPlaceScreen";
import ProfileScreen from "./ProfileScreen";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StoreScreen from "./StoreScreen";
import ProductDetails from "./ProductDetails";
import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator();
const MarketPlaceStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
    backgroundColor: `${colors.orange}`,
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
          headerStyle: {
            backgroundColor: colors.primary,
          },
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
        <Tab.Screen
          options={{ headerShown: false }}
          name="CreatePost"
          component={CreatePostScreen}
        />
        <Tab.Screen name="Marketplace" component={MarketPlaceStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function MarketPlaceStackScreen({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails", "Store", "UserDetails"];
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({
        tabBarStyle: styles.tabNavigator,
      });
    }
  }, [navigation, route]);

  return (
    <MarketPlaceStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerShadowVisible: false,
        headerBackImage: () => (
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            color={colors.secondary}
            size={25}
          />
        ),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.secondary,
        },
      })}
    >
      <MarketPlaceStack.Screen name="Shop" component={MarketplaceScreen} />
      <MarketPlaceStack.Screen name="Store" component={StoreScreen} />
      <MarketPlaceStack.Screen
        name="UserDetails"
        component={ProfileScreenStackScreen}
      />
      <MarketPlaceStack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
    </MarketPlaceStack.Navigator>
  );
}

function ProfileStackScreen({ navigation, route }) {
  const tabHiddenRoutes = ["Product, YourStore"];
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({
        tabBarStyle: styles.tabNavigator,
      });
    }
  }, [navigation, route]);

  return <ProfileScreenStackScreen />;
}

export function ProfileScreenStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={() => ({
        headerShadowVisible: false,
        headerBackImage: () => (
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            color={colors.secondary}
            size={25}
          />
        ),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.secondary,
        },
      })}
    >
      <ProfileStack.Screen
        name="User"
        component={ProfileScreen}
        options={() => ({ headerShown: false })}
      />
      <ProfileStack.Screen name="Product" component={ProductDetails} />
      <ProfileStack.Screen
        name="YourStore"
        component={StoreScreen}
        options={() => ({ headerShown: false })}
      />
    </ProfileStack.Navigator>
  );
}

export default BottomTabs;
