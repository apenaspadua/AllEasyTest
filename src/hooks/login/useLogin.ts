import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@contexts/AuthContext";
import { loginService } from "@services/auth/loginService";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();
  const { setUser } = useAuth();

  async function authenticate(username: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const userData = await loginService(username, password);
      setUser({
        id: String(userData.id),
        name: userData.username,
        email: userData.email || "",
        token: userData.accessToken,
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" as never }],
      });
    } catch (err: any) {
      setError(err.message || "Erro ao autenticar");
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
