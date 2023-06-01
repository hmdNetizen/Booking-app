import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  const {
    rooms,
    oldPrice,
    newPrice,
    name,
    adults,
    children,
    startDate,
    endDate,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available rooms",
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
    <>
      <ScrollView>
        {rooms.map((room) => (
          <Pressable
            key={room.id}
            style={{ margin: 10, padding: 10, backgroundColor: "#fff" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}
              >
                {room.name}
              </Text>
              <AntDesign name="infocirlceo" size={24} color="#007FFF" />
            </View>
            <Text style={{ marginTop: 3, fontSize: 16 }}>
              pay at the property
            </Text>
            <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
              Free cancellation Available
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "red",
                  textDecorationLine: "line-through",
                }}
              >
                {oldPrice}
              </Text>
              <Text style={{ fontSize: 18 }}>Rs{newPrice}</Text>
            </View>
            <Amenities />
            {selected.includes(room.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(room.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>
      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              oldPrice,
              newPrice,
              name,
              children,
              adults,
              startDate,
              endDate,
            })
          }
          style={{
            backgroundColor: "#007FFF",
            padding: 8,
            marginBottom: 30,
            borderRadius: 3,
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({});
