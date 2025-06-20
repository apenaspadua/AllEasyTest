import React, { useEffect, useState } from "react";
import { Center, VStack } from "native-base";
import { useAuth } from "@contexts/AuthContext";
import { Platform, TouchableOpacity } from "react-native";
import { getAndroidManufacturer, getIOSVersion } from "utils/deviceInfo";
import { useThemeColors } from "@hooks/useTheme";
import { Text } from "@components/Text";
import * as Animatable from "react-native-animatable";

export default function HomeScreen() {
  const colors = useThemeColors();
  const { user, logout } = useAuth();

  const [manufacturer, setManufacturer] = useState<string | null>(null);
  const [iosVersion, setIosVersion] = useState<string | null>(null);

  useEffect(() => {
    if (Platform.OS === "android") {
      getAndroidManufacturer().then((result) => {
        if (result) setManufacturer(result);
      });
    } else if (Platform.OS === "ios") {
      getIOSVersion().then((result) => {
        if (result) setIosVersion(result);
      });
    }
  }, []);

  return (
    <Center flex={1} bg={colors.background} px={4}>
      <Animatable.View
        animation="fadeInUp"
        duration={700}
        style={{ flex: 1, width: "100%" }}
      >
        <VStack flex={1} justifyContent="center" alignItems="center" space={6}>
          <Animatable.Image
            animation="bounceIn"
            duration={900}
            source={require("../../../assets/congrats-illustration.png")}
            style={{ width: 220, height: 180, marginBottom: 24 }}
            resizeMode="contain"
          />

          <Text fontSize="2xl" bold mb={2} color={colors.gray02}>
            Congratulations, {user?.name}!
          </Text>

          <Text color={colors.gray01} textAlign="center" mb={2}>
            Congratulations on logging in and using our app! We hope your
            experience has been enjoyable.
          </Text>
          <Text fontSize="md" color={colors.gray01} textAlign="center" mb={4}>
            Thank you for signing up with us!
          </Text>

          <Animatable.View animation="pulse" iterationCount="infinite">
            <TouchableOpacity onPress={logout}>
              <Text
                color={colors.primary}
                fontWeight="medium"
                underline
                fontSize="md"
              >
                Sign in here
              </Text>
            </TouchableOpacity>
          </Animatable.View>

          {Platform.OS === "android" && (
            <Text color={colors.gray02}>
              Device manufacturer: {manufacturer ?? "none"}
            </Text>
          )}
          {Platform.OS === "ios" && (
            <Text color={colors.gray02}>
              iOS version: {iosVersion ?? "none"}
            </Text>
          )}
        </VStack>
      </Animatable.View>
    </Center>
  );
}
