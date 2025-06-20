import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAuth } from "@contexts/AuthContext";
import { loginService } from "modules/Login/services/loginService";

type RootStackParamList = {
  Home: undefined;
};

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { setUser } = useAuth();

  async function authenticate(username: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const userData = await loginService(username, password);
      setUser({
        id: userData.id,
        name: userData.username,
        email: userData.email || "",
        token: userData.accessToken,
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    authenticate,
    loading,
    error,
  };
}
