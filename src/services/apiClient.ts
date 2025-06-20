import axios from "axios";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const apiClient = axios.create({
  baseURL: Constants.expoConfig?.extra?.apiBaseUrl,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  async (config) => {
    const userData = await AsyncStorage.getItem("@LoginAppTest:user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user.token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${user.token}`,
        };
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);
