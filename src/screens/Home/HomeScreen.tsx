import React, { useEffect, useState } from "react";
import { Center, Text, Button, VStack } from "native-base";
import { useAuth } from "@contexts/AuthContext";
import { themeStore } from "@store/themeStore";
import { Platform } from "react-native";
import { getAndroidManufacturer, getIOSVersion } from "utils/deviceInfo";

export default function HomeScreen() {
  const theme = themeStore((state) => state.theme);
  const toggleTheme = themeStore((state) => state.toggleTheme);

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
    <Center flex={1} px={4} bg="coolGray.100">
      <VStack space={4} alignItems="center">
        <Text>Olá, {user?.name}</Text>
        {Platform.OS === "android" && (
          <Text>
            Fabricante do dispositivo: {manufacturer ?? "Carregando..."}
          </Text>
        )}
        {Platform.OS === "ios" && (
          <Text>Versão do iOS: {iosVersion ?? "Carregando..."}</Text>
        )}
        <Button colorScheme="red" onPress={logout}>
          Sair
        </Button>
      </VStack>
    </Center>
  );
}
