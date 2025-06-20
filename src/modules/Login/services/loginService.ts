import { apiClient } from "@services/apiClient";
import { ILoginResponse } from "modules/Login/interfaces/loginResponse.interface";

export async function loginService(
  username: string,
  password: string,
): Promise<ILoginResponse> {
  try {
    const response = await apiClient.post<ILoginResponse>(
      "/auth/login",
      { username, password },
      { withCredentials: true },
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Authentication failed");
    } else if (error.request) {
      throw new Error("Server did not respond. Please try again.");
    } else {
      throw new Error("Unknown error during authentication");
    }
  }
}
