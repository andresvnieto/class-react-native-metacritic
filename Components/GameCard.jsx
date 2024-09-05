import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image
        source={{
          uri: game.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <View style={styles.score}>
        <Text style={styles.scoreText}> {game.score}</Text>
      </View>
    </View>
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
    width: 147,
    height: 197,
    resizeMode: "cover",
    borderRadius: 20,
  },
  card: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    justifyContent: "flex-start",
    backgroundColor: "#35476e",
    marginBottom: 40,
    borderRadius: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  description: {
    color: "#DDDDDD",
    fontSize: 14,
    fontWeight: "light",
    marginBottom: 20,
  },
  score: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCDAB7",
    borderRadius: 30,
  },
  scoreText: {
    color: "#1D2D50",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
