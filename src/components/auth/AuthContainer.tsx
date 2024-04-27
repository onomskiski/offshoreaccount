import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  title: string;
  footerType: string;
  subnote: string;
}

const AuthContainer = ({ children, title, footerType, subnote }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 shadow-lg bg-white text-gray-700 p-5 lg:p-10 rounded-xl">
      <div className="my-4">
        <div className="text-3xl font-bold text-black">{title}</div>
        <div className="text-gray-600 italic text-sm">{subnote}</div>
      </div>
      <div>{children}</div>
      <div className="my-4">
        {footerType === "signin" ? (
          <div className="w-full flex justify-center">
            <Link
              href="/auth/register"
              className="text-sm italic hover:text-blue-600 transition"
            >
              New here? Let's sign you up
            </Link>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="text-sm italic hover:text-blue-600 transition"
          >
            Already have an account? Signin
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
