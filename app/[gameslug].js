import { Link, Stack } from "expo-router";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: gameInfo === null ? gameslug : gameInfo.title,
          headerTintColor: "black",
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"white"} size={"large"} />
        ) : (
          <ScrollView className="px-8">
            <Image
              source={{
                uri: gameInfo.img,
              }}
              style={styles.image}
            />
            <Text className="text-white font-bold mb-8 text-2xl">
              {gameInfo.title}
            </Text>
            <Text className="text-white mb-8 text-base">
              {gameInfo.description}
            </Text>
            <Score score={gameInfo.score} maxScore={100} />
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 237,
    height: 297,
    resizeMode: "cover",
    borderRadius: 20,
    marginBottom: 20,
  },
});
