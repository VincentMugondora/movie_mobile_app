import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView className="flex-1 px-5">
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5"/>
        <Text className="mb-5 text-3xl font-bold text-center text-white">Welcome to the App</Text>
      </ScrollView>
    </View>
  );
}
