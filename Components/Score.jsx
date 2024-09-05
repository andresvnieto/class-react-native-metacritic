import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return "bg-red-600";
    if (percentage < 60) return "bg-yellow-600";
    return "bg-lime-600";
  };

  const bgColorScore = getColors();

  return (
    <View
      className={`w-8 h-8 rounded-full justify-center items-center ${bgColorScore}`}
    >
      <Text className="text-md font-bold text-white text-center"> {score}</Text>
    </View>
  );
}


