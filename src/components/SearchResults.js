import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ data, inputText }) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(inputText.toLowerCase())) {
            if (!inputText) {
              return null;
            }

            return (
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                onPress={() =>
                  navigation.navigate("Home", { input: item.place })
                }
              >
                <View>
                  <Image
                    source={{ uri: item.placeImage }}
                    style={{ width: 70, height: 70 }}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ fontSize: 15, color: "gray" }}>
                    {item.properties.length} Properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
