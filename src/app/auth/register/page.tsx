import AuthContainer from "@/components/auth/AuthContainer";
import { RegisterForm } from "@/components/auth/RegistrationForm";
import React from "react";

function RegisterPage() {
  return (
    <AuthContainer
      footerType="register"
      subnote="Let's get your account ready"
      title="Create a new account"
    >
      <RegisterForm />
    </AuthContainer>
  );
}

export default RegisterPage;
