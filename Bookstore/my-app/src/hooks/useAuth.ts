import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useAuth() {
  const { email, token, id }: any = useSelector<RootState>(
    (state) => state.user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
