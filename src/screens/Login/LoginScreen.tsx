import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  VStack,
  Text,
  Modal,
  Spinner,
} from "native-base";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native";
import {
  LoginFormData,
  loginValidationRules,
  useLoginForm,
} from "@hooks/login/useLoginForm";
import { useLogin } from "@hooks/login/useLogin";

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const { authenticate, loading, error } = useLogin();
  const [showErrorModal, setShowErrorModal] = React.useState(false);

  useEffect(() => {
    if (error) setShowErrorModal(true);
  }, [error]);

  const onSubmit = (data: LoginFormData) => {
    authenticate(data.email, data.password);
  };

  return (
    <Center flex={1} px={4} bg="coolGray.100">
      <Box w="100%" maxW="300px">
        <VStack space={4}>
          <Text fontSize="2xl" bold textAlign="center">
            Login
          </Text>

          <FormControl isInvalid={"email" in errors}>
            <FormControl.Label>Email</FormControl.Label>
            <Controller
              control={control}
              name="email"
              rules={loginValidationRules.email}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Digite seu email"
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 4,
                    padding: 10,
                    marginBottom: 4,
                  }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
            <FormControl.ErrorMessage>
              {errors.email?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={"password" in errors}>
            <FormControl.Label>Senha</FormControl.Label>
            <Controller
              control={control}
              name="password"
              rules={loginValidationRules.password}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Digite sua senha"
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 4,
                    padding: 10,
                    marginBottom: 4,
                  }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              )}
            />
            <FormControl.ErrorMessage>
              {errors.password?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            onPress={handleSubmit(onSubmit)}
            mt={2}
            isDisabled={loading}
            leftIcon={loading ? <Spinner color="white" size="sm" /> : undefined}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={showErrorModal} onClose={() => setShowErrorModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Erro de Login</Modal.Header>
          <Modal.Body>
            <Text color="red.500">{error}</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setShowErrorModal(false)}>Fechar</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
