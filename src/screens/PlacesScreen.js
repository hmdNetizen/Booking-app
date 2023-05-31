import React, { useLayoutEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { data } from "../data";
import PropertyCard from "../components/PropertyCard";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const filters = [
  {
    id: "0",
    filter: "cost:Low to High",
  },
  {
    id: "1",
    filter: "cost:High to Low",
  },
];

const PlacesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortedData, setSortedData] = useState(data);

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

  const searchedPlaces = data.filter(
    (item) => item.places === route.params?.places
  );

  const compare = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }

    if (a.newPrice < b.newPrice) {
      return 1;
    }

    return 0;
  };
  const comparison = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }

    if (a.newPrice > b.newPrice) {
      return 1;
    }

    return 0;
  };

  const applyFilter = (filter) => {
    setModalVisible(false);

    switch (filter) {
      case "cost:High to Low":
        searchedPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchedPlaces);
        break;
      case "cost:Low to High":
        searchedPlaces.map((val) => val.properties.sort(comparison));
        setSortedData(searchedPlaces);
        break;
    }
  };

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
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setModalVisible(!modalVisible)}
        >
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
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() =>
            navigation.navigate("Map", {
              searchResults: searchedPlaces,
            })
          }
        >
          <FontAwesome name="map-marker" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#F5F5F5", marginBottom: 40 }}>
        {sortedData
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
      <BottomModal
        swipeThreshold={200}
        swipeDirection={["up", "down"]}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        footer={
          <ModalFooter>
            <TouchableOpacity
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginVertical: 10,
                marginBottom: 30,
              }}
              onPress={() => applyFilter(selectedFilter)}
            >
              <Text>Apply</Text>
            </TouchableOpacity>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and filter" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ height: 280, width: "100%" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                borderRightWidth: 1,
                flex: 2,
                borderColor: "#E0E0E0",
                height: 280,
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort</Text>
            </View>
            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  onPress={() => setSelectedFilter(item.filter)}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="dot-circle-o" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="black" />
                  )}
                  <Text
                    style={{ fontSize: 15, marginLeft: 6, fontWeight: "500" }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
