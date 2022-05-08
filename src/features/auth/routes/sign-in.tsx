import { Layout } from "features/auth/components/layout";
import { SignInForm } from "features/auth/components/sign-in-form";

export const SignIn = () => {
  return (
    <Layout>
      <SignInForm onSuccess={() => {}} />
    </Layout>
  );
};
