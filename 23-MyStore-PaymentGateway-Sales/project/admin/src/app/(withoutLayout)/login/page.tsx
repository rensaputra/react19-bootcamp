import LoginScreen from "@/screens/login";

const LoginPage = async ({
  searchParams,
}: {
  searchParams: { errorMessage?: string };
}) => {
  const { errorMessage } = await searchParams;
  return <LoginScreen errorMessage={errorMessage} />;
};

export default LoginPage;
