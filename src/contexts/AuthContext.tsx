import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "interfaces/auth.interface";

type AuthContextType = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_STORAGE_KEY = "@LoginAppTest:user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<IUser | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(USER_STORAGE_KEY).then((storedUser) => {
      if (storedUser) {
        setUserState(JSON.parse(storedUser));
      }
    });
  }, []);

  const setUser = (user: IUser | null) => {
    setUserState(user);
    if (user) {
      AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      AsyncStorage.removeItem(USER_STORAGE_KEY);
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
