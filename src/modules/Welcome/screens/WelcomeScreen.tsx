import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, VStack, Heading } from "native-base";
import { useThemeColors } from "@hooks/useTheme";
import { themeStore } from "@store/themeStore";
import { Text } from "@components/Text";
import { Button } from "@components/Button";
import * as Animatable from "react-native-animatable";
import { Message } from "@components/Message";

export default function WelcomeScreen({ navigation }: any) {
  const colors = useThemeColors();
  const { theme, toggleTheme } = themeStore();

  const [showSad, setShowSad] = useState(false);

  return (
    <Box flex={1} bg={colors.background} safeArea>
      <VStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        px={6}
        space={8}
      >
        <Animatable.Image
          animation="fadeInDown"
          duration={900}
          delay={100}
          source={require("../../../assets/welcome-illustration.png")}
          style={{ marginBottom: 24, width: 220, height: 180 }}
          resizeMode="contain"
        />

        <Animatable.View
          animation="fadeInUp"
          delay={300}
          style={{ width: "100%", alignItems: "center" }}
        >
          <Heading
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            mb={2}
            color={colors.secondary}
          >
            Wellcome to App!
          </Heading>

          <Text textAlign="center" color={colors.gray01} fontSize="md" mb={4}>
            This is a demo application for you to test the features proposed in
            the test.
          </Text>

          <Button onPress={() => navigation.navigate("Login")}>Login</Button>

          <TouchableOpacity onPress={() => setShowSad(true)}>
            <Text color={colors.primary} bold mt={4}>
              Sign up here
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 24 }}>
            <Animatable.View animation="swing" iterationCount="infinite">
              <Text color={colors.primary} fontSize="3xl">
                {theme === "light" ? "🌙" : "☀️"}
              </Text>
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
      </VStack>
      <Message visible={showSad} onClose={() => setShowSad(false)} />
    </Box>
  );
}
