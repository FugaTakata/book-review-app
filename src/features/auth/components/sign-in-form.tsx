import { useCallback } from "react";

import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface SignInFormProps {
  onSuccess: () => void;
}

export const SignInForm = ({ onSuccess }: SignInFormProps) => {
  const formId = {
    email: "email",
    password: "password",
  };

  const {
    handleSubmit,
    register,
    formState: {
      //  errors,
      isSubmitting,
    },
  } = useForm();

  const onFormSubmit = useCallback(() => {
    onSuccess();
  }, [onSuccess]);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FormControl>
        <FormLabel></FormLabel>
        <Input
          id={formId.email}
          placeholder="メールアドレス"
          {...register(formId.email, {
            required: "必須",
          })}
        />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel></FormLabel>
        <Input />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <Button isLoading={isSubmitting} type="submit">
        サインイン
      </Button>
    </form>
  );
};
