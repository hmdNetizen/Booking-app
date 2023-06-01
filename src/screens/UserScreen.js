import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const UserScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const { adults, oldPrice, newPrice, name, children, startDate, endDate } =
    route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
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
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Phone no</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
          padding: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 20 }}>Rs {newPrice * adults}</Text>
          </View>
          <Text>You Saved {oldPrice - newPrice} rupees</Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("Confirmation", {
              oldPrice,
              newPrice,
              name,
              children,
              adults,
              startDate,
              endDate,
            })
          }
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
