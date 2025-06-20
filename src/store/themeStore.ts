import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
};

export const themeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  toggleTheme: async () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    set({ theme: newTheme });
    await AsyncStorage.setItem("@AllEasyTest:theme", newTheme);
  },
  setTheme: async (theme) => {
    set({ theme });
    await AsyncStorage.setItem("@AllEasyTest:theme", theme);
  },
}));
