import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";

export default function App() {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        fadeDuration={1000}
        source={{
          uri: "https://www.metacritic.com/a/img/resize/b303f7b6d21d8644f68d8d344ffdec4c1f67b969/catalog/provider/7/2/7-1725381055.jpg?auto=webp&fit=cover&height=300&width=200",
        }}
        style={{
          width: 300,
          height: 400,
          resizeMode: "contain",
        }}
      />
      <Text style={{ color: "#E9EFEC" }}>Tenemos la app2!</Text>
      <TouchableHighlight
        underlayColor={"#C4DAD2"}
        onPress={() => alert("Hola")}
        style={{
          width: 200,
          height: 60,
          backgroundColor: "#6A9C89",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#16423C" }}>Pulsa acá</Text>
      </TouchableHighlight>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16423C",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
