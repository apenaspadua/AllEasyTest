import { ILoginFormData } from "modules/Login/interfaces/loginResponse.interface";
import { useForm } from "react-hook-form";

export function useLoginForm() {
  return useForm<ILoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });
}

export const loginValidationRules = {
  username: {
    required: "Username is required",
  },
  password: {
    required: "Password is required",
  },
};
