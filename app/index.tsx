import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="items-center justify-center flex-1 gap-3">
      <Text className="text-4xl font-bold text-dark-200">Welcome To My Movie App</Text>
      <Link href='/onboarding' className="p-2 rounded-md text-light-200 bg-dark-300">Onboarding</Link>
    </View>
  );
}
