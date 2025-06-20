import React from "react";
import { Text as NativeText, ITextProps } from "native-base";
import { fonts } from "theme/fonts";

export function Text({ children, bold, ...props }: ITextProps) {
  return (
    <NativeText
      fontSize="md"
      fontFamily={bold ? fonts.bold : fonts.regular}
      {...props}
    >
      {children}
    </NativeText>
  );
}
