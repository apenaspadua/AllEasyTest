import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "theme/colors";

export function useThemeColors() {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkColors : lightColors;
}
