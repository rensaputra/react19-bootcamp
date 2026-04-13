import Login from "@/screens/login";
import { SearchParams } from "next/dist/server/request/search-params";

const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  return <Login searchParams={await searchParams} />;
};

export default LoginPage;
