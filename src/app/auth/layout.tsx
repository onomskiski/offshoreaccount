import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200 p-5">
      {children}
    </div>
  );
};

export default AuthLayout;
