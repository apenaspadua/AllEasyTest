import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { fonts } from "theme/fonts";
import { useThemeColors } from "@hooks/useTheme";

type InputProps = TextInputProps & {
  label?: string;
  type?: "text" | "password";
  error?: string;
};

export function Input({ label, type = "text", error, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const colors = useThemeColors();

  const isPassword = type === "password";

  return (
    <View style={{ marginBottom: 12 }}>
      {label && (
        <Text
          style={{
            marginBottom: 8,
            fontFamily: fonts.regular,
            color: colors.gray02,
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: error ? colors.red : colors.gray03,
          borderRadius: 8,
        }}
      >
        <TextInput
          placeholderTextColor={colors.gray01}
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            color: colors.gray02,
          }}
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={22}
              color={colors.gray01}
              style={{ marginRight: 8 }}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            color: colors.red,
            marginTop: 4,
            fontSize: 13,
            fontFamily: fonts.regular,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
