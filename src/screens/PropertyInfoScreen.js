import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { pixelNormalize } from "../components/Normalise";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    property: { name, rooms, oldPrice, newPrice, rating, photos },
    children,
    adults,
    selectedDate,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: name,
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

  const difference = oldPrice - newPrice;
  const offerPrice = (Math.abs(difference) / oldPrice) * 100;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Pressable
            style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
          >
            {photos.slice(0, 5).map((photo, index) => (
              <View key={index} style={{ margin: 4 }}>
                <Image
                  source={{ uri: photo.image }}
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 5,
                  }}
                />
              </View>
            ))}
            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ marginLeft: 20 }}>Show more</Text>
            </Pressable>
          </Pressable>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: 200 }}>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>{name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{rating}</Text>
                <View
                  style={{
                    paddingVertical: 3,
                    borderRadius: 5,
                    width: 100,
                    backgroundColor: "#003580",
                  }}
                >
                  <Text
                    style={{ fontSize: 15, textAlign: "center", color: "#fff" }}
                  >
                    Genius level
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#17B169",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ fontSize: 13, color: "#fff" }}>
                Travel Sustainably
              </Text>
            </View>
          </View>
          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              marginTop: 10,
              marginHorizontal: 12,
            }}
          >
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginHorizontal: 12,
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "red",
                fontSize: 20,
              }}
            >
              {oldPrice * adults}
            </Text>

            <Text style={{ fontSize: 20 }}>{newPrice * adults}</Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              paddingHorizontal: 4,
              paddingVertical: 5,
              borderRadius: 4,
              backgroundColor: "green",
              width: 78,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              {offerPrice.toFixed(0)}% OFF
            </Text>
          </View>
          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View
            style={{
              marginHorizontal: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
              marginTop: 10,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check In
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {selectedDate.startDate}
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check Out
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {selectedDate.endDate}
              </Text>
            </View>
          </View>
          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Rooms and Guests
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {rooms.length} rooms {adults} adults {children} children
            </Text>
          </View>
          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Amenities />
          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
              marginBottom: 50,
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms,
            oldPrice,
            newPrice,
            name,
            children,
            adults,
            rating,
            startDate: selectedDate.startDate,
            endDate: selectedDate.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 1,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Select Availabilty
        </Text>
      </Pressable>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
