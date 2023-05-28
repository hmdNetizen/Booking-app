import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 25,
          borderWidth: 1,
          borderColor: "#fff",
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="airplane-outline" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Flight
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="car-outline" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Car Rental
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="taxi" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
