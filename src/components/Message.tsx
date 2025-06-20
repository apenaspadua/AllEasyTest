import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "native-base";
import * as Animatable from "react-native-animatable";
import { useThemeColors } from "@hooks/useTheme";

type MessageProps = {
  visible: boolean;
  onClose?: () => void;
};

export function Message({ visible, onClose }: MessageProps) {
  const colors = useThemeColors();

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Animatable.View
        animation="fadeInUp"
        duration={600}
        style={[styles.container, { backgroundColor: colors.gray04 }]}
      >
        <Text fontSize="lg" color={colors.error} mb={2} textAlign="center">
          😢 Oops! This feature is not available yet.
        </Text>
        <Text color={colors.error} mb={4} textAlign="center">
          We're sorry, but this button doesn't do anything for now.
        </Text>
        {onClose && (
          <Button colorScheme="danger" onPress={onClose}>
            Close
          </Button>
        )}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    elevation: 20,
  },
  container: {
    borderRadius: 12,
    padding: 20,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    minWidth: 280,
    maxWidth: "80%",
  },
});
