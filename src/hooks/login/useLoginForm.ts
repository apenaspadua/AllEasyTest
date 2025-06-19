import { useForm } from "react-hook-form";

export type LoginFormData = {
  email: string;
  password: string;
};

export function useLoginForm() {
  return useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
}

export const loginValidationRules = {
  email: {
    required: "Email é obrigatório",
    // pattern: {
    //   value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    // message: "Formato de email inválido",
    // },
  },
  password: {
    required: "Senha é obrigatória",
  },
};
