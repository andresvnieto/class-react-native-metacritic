import { Pressable, View } from "react-native";
import { Link, Stack } from "expo-router";
import Logo from "../components/Logo";
import { IconInfo } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#18181b" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about" clas>
              <Pressable>
                <IconInfo />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
