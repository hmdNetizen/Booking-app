import React, { useLayoutEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { data } from "../data";
import PropertyCard from "../components/PropertyCard";

const PlacesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "#fff",
        }}
      >
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="map-marker" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {data
          .filter((item) => item.place === route.params?.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                rooms={route.params?.rooms}
                children={route.params?.children}
                adults={route.params?.adults}
                selectedDate={route.params?.selectedDate}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
