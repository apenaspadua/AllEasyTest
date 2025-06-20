import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeStore } from "@store/themeStore";
import { darkColors, lightColors } from "theme/colors";

export function useThemeColors() {
  const theme = themeStore((state) => state.theme);
  return theme === "light" ? lightColors : darkColors;
}

export function useInitTheme() {
  useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem("@AllEasyTest:theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        themeStore.getState().setTheme(savedTheme);
      }
    })();
  }, []);
}
