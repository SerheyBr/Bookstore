import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PrivateRout: FC<PropsWithChildren> = ({ children }: any) => {
  const user = useTypedSelector((state) => state.user);
  if (!user.username) {
    return <Navigate to="/SignUpSignIn" />;
  }
  return children;
};

export default PrivateRout;
