import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { data } from "../data";

const SearchScreen = () => {
  const [inputText, setInputText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Enter your destination"
        />
        <Feather name="search" size={22} color="#000" />
      </View>
      <SearchResults
        data={data}
        inputText={inputText}
        setInputText={setInputText}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchWrapper: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#FFC72C",
    borderWidth: 4,
    borderRadius: 10,
  },
});
