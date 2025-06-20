import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./src/contexts/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";
import AppLoading from "expo-app-loading";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { themeStore } from "./src/store/themeStore";
import { useInitTheme } from "@hooks/useTheme";

export default function App() {
  useInitTheme();

  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold,
  });

  const theme = themeStore((state) => state.theme);

  useEffect(() => {}, [theme]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <StatusBar style={theme === "light" ? "dark" : "light"} />
        <AppNavigator />
      </NativeBaseProvider>
    </AuthProvider>
  );
}
