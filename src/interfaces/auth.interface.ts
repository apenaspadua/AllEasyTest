export type IUser = {
  id: number;
  name: string;
  email: string;
  token: string;
  image?: string;
};

export type AuthContextType = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
};
