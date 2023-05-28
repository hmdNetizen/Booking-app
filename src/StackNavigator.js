import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="home" size={24} color="#003580" />;
            } else {
              return (
                <Ionicons name="ios-home-outline" size={24} color="black" />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="heart" size={24} color="#003580" />;
            } else {
              return <Ionicons name="heart-outline" size={24} color="black" />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        options={{
          tabBarLabel: "Bookings",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons name="notifications" size={24} color="#003580" />
              );
            } else {
              return (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="person" size={24} color="#003580" />;
            } else {
              return <Ionicons name="person-outline" size={24} color="black" />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});