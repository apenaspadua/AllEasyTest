import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./src/contexts/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </AuthProvider>
  );
}
