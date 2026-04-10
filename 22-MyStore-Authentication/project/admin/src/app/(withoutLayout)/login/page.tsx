import { createJWT, verifyJWT } from "@/lib/utils";
import LoginScreen from "@/screens/login";
import { verify } from "crypto";
import { create } from "domain";

const LoginPage = async () => {
  return <LoginScreen />;
};

export default LoginPage;
