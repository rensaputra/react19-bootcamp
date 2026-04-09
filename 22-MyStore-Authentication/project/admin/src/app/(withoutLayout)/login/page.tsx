import { createJWT, verifyJWT } from "@/lib/utils";
import LoginScreen from "@/screens/login";
import { verify } from "crypto";
import { create } from "domain";

const LoginPage = async () => {
  const token = await createJWT({ id: 1, username: "admin" });
  console.log(token);

  const verify = await verifyJWT(token);
  console.log(verify);

  return <LoginScreen />;
};

export default LoginPage;
