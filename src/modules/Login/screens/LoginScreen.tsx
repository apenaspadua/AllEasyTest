import React, { useState } from "react";
import {
  Center,
  VStack,
  Icon,
  Checkbox,
  Divider,
  HStack,
  Spinner,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "@components/Text";
import { Controller } from "react-hook-form";
import { Input } from "@components/Input";
import { useThemeColors } from "@hooks/useTheme";
import { Button } from "@components/Button";
import { useLogin } from "modules/Login/hooks/useLogin";
import {
  useLoginForm,
  loginValidationRules,
} from "modules/Login/hooks/useLoginForm";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Message } from "@components/Message";

export default function LoginScreen() {
  const colors = useThemeColors();

  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [showSad, setShowSad] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();
  const { authenticate, loading, error } = useLogin();

  const onSubmit = (data: any) => {
    authenticate(data.username, data.password);
  };

  return (
    <Center flex={1} px={4} bg={colors.background}>
      <Animatable.View
        animation="fadeIn"
        duration={600}
        style={{ width: "100%", maxWidth: 340 }}
      >
        <VStack space={4}>
          <Text fontSize="3xl" bold color={colors.gray02}>
            Login
          </Text>

          <Text mb={2} fontFamily={null} color={colors.gray01}>
            Welcome back to the app
          </Text>

          <Controller
            control={control}
            name="username"
            rules={loginValidationRules.username}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Username"
                placeholder="Enter your username"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.username?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={loginValidationRules.password}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="********"
                type="password"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
              />
            )}
          />

          <HStack alignItems="center" justifyContent="space-between" w="100%">
            <Checkbox
              value="keepSignedIn"
              isChecked={keepSignedIn}
              onChange={setKeepSignedIn}
              colorScheme="blue"
              _text={{ color: colors.gray02 }}
              mb={2}
            >
              Keep me signed in
            </Checkbox>
            <TouchableOpacity onPress={() => setShowSad(true)}>
              <Text color={colors.primary} fontSize="xs" bold>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </HStack>

          {error && (
            <Animatable.Text
              animation="shake"
              duration={600}
              style={{
                color: colors.red,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              {error}
            </Animatable.Text>
          )}

          <Button
            mt={2}
            py={3}
            bg={colors.primary}
            onPress={handleSubmit(onSubmit)}
            isDisabled={loading}
          >
            {loading ? (
              <Animatable.View animation="rotate" iterationCount="infinite">
                <Spinner color="white" />
              </Animatable.View>
            ) : (
              "Login"
            )}
          </Button>

          <HStack alignItems="center" my={4}>
            <Divider flex={1} />
            <Text mx={2} color={colors.gray01} fontSize="sm">
              or sign in with
            </Text>
            <Divider flex={1} />
          </HStack>

          <Button
            bg={colors.gray05}
            leftIcon={
              <Icon
                as={<AntDesign name="google" />}
                size={5}
                color={colors.red}
              />
            }
            _text={{ color: colors.dark }}
            onPress={() => setShowSad(true)}
          >
            Continue with Google
          </Button>

          <TouchableOpacity onPress={() => setShowSad(true)}>
            <Text color={colors.primary} textAlign="center" bold>
              Create an account
            </Text>
          </TouchableOpacity>
        </VStack>
      </Animatable.View>
      <Message visible={showSad} onClose={() => setShowSad(false)} />
    </Center>
  );
}
