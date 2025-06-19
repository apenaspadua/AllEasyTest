import { apiClient } from "@services/client/apiClient";

type LoginResponse = {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  accessToken: string;
};

export async function loginService(
  username: string,
  password: string,
): Promise<LoginResponse> {
  try {
    console.log(username, password);

    const response = await apiClient.post<LoginResponse>(
      "/auth/login",
      {
        username,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Falha na autenticação");
    } else if (error.request) {
      throw new Error("Servidor não respondeu. Tente novamente.");
    } else {
      throw new Error("Erro desconhecido ao autenticar");
    }
  }
}
