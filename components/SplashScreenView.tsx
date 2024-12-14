import React from "react";
import { View, Image } from "react-native";

export default function SplashScreenView() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
      }}
    >
      <Image src="../assets/images/corinthians.png" />
    </View>
  );
}
