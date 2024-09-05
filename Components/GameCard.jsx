import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPresable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPresable className="active:opacity-80 border border-gray-800 active:border-gray-800/50 mb-8 rounded-xl">
        <View key={game.slug} className=" bg-gray-500/10 p-8 rounded-xl">
          <Image
            source={{
              uri: game.image,
            }}
            style={styles.image}
          />
          <View className="flex-shrink px-4">
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description} className="flex-shrink">
              {game.description.slice(0, 100)}...
            </Text>
            <Score score={game.score} maxScore={100} />
          </View>
        </View>
      </StyledPresable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
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
  card: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    justifyContent: "flex-start",
    backgroundColor: "#373A40",
    marginBottom: 40,
    borderRadius: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#DDDDDD",
    fontSize: 14,
    fontWeight: "light",
    marginVertical: 10,
  },
  score: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDB00",
    borderRadius: 30,
  },
  scoreText: {
    color: "#1D2D50",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
