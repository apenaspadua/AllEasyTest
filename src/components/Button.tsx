import React from "react";
import { Button as NativeButton, IButtonProps } from "native-base";
import { useThemeColors } from "@hooks/useTheme";

export function Button({ children, ...props }: IButtonProps) {
  const colors = useThemeColors();

  return (
    <NativeButton
      w="100%"
      borderRadius={24}
      py={4}
      mb={4}
      backgroundColor={colors.primary}
      _text={{
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
      }}
      {...props}
    >
      {children}
    </NativeButton>
  );
}
