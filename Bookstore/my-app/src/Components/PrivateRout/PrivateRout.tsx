import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAuth } from "../../hooks/useAuth";

const PrivateRout: FC<PropsWithChildren> = ({ children }: any) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/SignUpSignIn" />;
  }
  return children;
};

export default PrivateRout;
