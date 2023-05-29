import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = (props) => {
  const { property, rooms, children, adults, selectedDate, availabeRooms } =
    props;
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <Pressable
        style={{ flexDirection: "row", margin: 15, backgroundColor: "#fff" }}
      >
        <View>
          <Image
            source={{ uri: property.image }}
            style={{ height: height / 4, width: width - 280 }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={22} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
                backgroundColor: "#6CB4EE",
              }}
            >
              <Text
                style={{ fontSize: 15, textAlign: "center", color: "#fff" }}
              >
                Genius level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 210,
              marginTop: 6,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 4 }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text>{property.oldPrice * adults}</Text>
            <Text>{property.newPrice * adults}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
