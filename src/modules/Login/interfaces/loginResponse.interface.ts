export type ILoginFormData = {
  username: string;
  password: string;
};

export type ILoginResponse = {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  accessToken: string;
};
