import React, { useLayoutEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { ModalTitle } from "react-native-modals";

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const searchPlaces = (place) => {
    if (!place || !selectedDate) {
      Alert.alert("Invalid Details", "Select all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (place && selectedDate) {
      navigation.navigate("Places", {
        rooms,
        adults,
        children,
        selectedDate,
        place,
      });
    }
  };

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View
            style={{
              borderColor: "#FFC72C",
              margin: 20,
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/* Destination */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
              onPress={() => navigation.navigate("Search")}
            >
              <Feather name="search" size={24} color="#000" />
              <TextInput
                placeholder={
                  route?.params ? route.params.input : "Enter your destination"
                }
                placeholderTextColor="#000"
              />
            </Pressable>
            {/* Selected Dates */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="#000" />
              <TextInput
                style={{ paddingRight: 0 }}
                // placeholder={selectedDate ? "" : "Select your dates"}
              />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderWidth: 0,
                  borderRadius: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    display: "none",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                allowFontScaling={false}
                placeholder={"Apr 27, 2018 → Jul 10, 2018"}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDate(startDate, endDate)
                }
                mode={"range"}
              />
            </Pressable>
            {/* Number of guests */}
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholder={`${rooms} room - ${adults} adults - ${children} children`}
                placeholderTextColor="red"
              />
            </Pressable>
            {/* Search Button */}
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
              onPress={() => searchPlaces(route?.params?.input)}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <Text style={{ marginHorizontal: 20, fontWeight: "600", fontSize: 17 }}>
        Travel more, spend less
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable
          style={{
            width: 200,
            height: 150,
            marginTop: 10,
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#003580",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 7,
            }}
          >
            Genius
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            You are at genius level one in our loyalty program
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 200,
            height: 150,
            marginTop: 10,
            padding: 20,
            borderRadius: 10,
            borderColor: "#E0E0E0",
            borderWidth: 2,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 7,
            }}
          >
            15% Discounts
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Complete 5 days stay to unlock stage 2
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 200,
            height: 150,
            marginTop: 10,
            padding: 20,
            borderRadius: 10,
            borderColor: "#E0E0E0",
            borderWidth: 2,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 7,
            }}
          >
            10% Discounts
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Enjoy 10% discouts at properties worldwide
          </Text>
        </Pressable>
      </ScrollView>
      <Pressable
        style={{
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 200, height: 50, resizeMode: "cover" }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
          }}
        />
      </Pressable>
      <BottomModal
        swipeThreshold={200}
        swipeDirection={["up", "down"]}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "#fff",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  width: 26,
                  height: 26,
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: "#BEBEBE",
                  width: 26,
                  height: 26,
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setRooms((prev) => prev + 1)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  width: 26,
                  height: 26,
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setAdults(Math.max(1, adults - 1))}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{adults}</Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: "#BEBEBE",
                  width: 26,
                  height: 26,
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setAdults((prev) => prev + 1)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Chidren</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  width: 26,
                  height: 26,
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setChildren(Math.max(0, children - 1))}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{children}</Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: "#BEBEBE",
                  width: 26,
                  height: 26,
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setChildren((prev) => prev + 1)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
