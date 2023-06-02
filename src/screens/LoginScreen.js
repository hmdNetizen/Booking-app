import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { auth } from "../../firebase.config";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials._tokenResponse.email;
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.navigate("Main");
        }
      });

      return unsubscribe;
    } catch (error) {
      console.error(error);
    }
  }, []);

  //   console.log(userCredentials.user.stsTokenManager.accessToken);
  //   AsyncStorage.setItem(
  //     "tokenUser",
  //     userCredentials.user.stsTokenManager.accessToken
  //   );

  //   useEffect(() => {
  //     const getMyObject = async () => {
  //       try {
  //         const jsonValue = await AsyncStorage.getItem("tokenUser");
  //         console.log("jsonValue");
  //         if (jsonValue) {
  //           navigation.replace("Main");
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     getMyObject();
  //   }, [token]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Sign In
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sign In to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email id"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>
        <Pressable
          onPress={login}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
