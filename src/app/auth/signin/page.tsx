import AuthContainer from "@/components/auth/AuthContainer";
import SigninForm from "@/components/auth/SigninForm";
import React from "react";

const SigninPage = () => {
  return (
    <AuthContainer
      title="Hello, Welcome back!"
      subnote="Let's sign you in"
      footerType="signin"
    >
      <SigninForm />
    </AuthContainer>
  );
};

export default SigninPage;
