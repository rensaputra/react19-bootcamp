import SignUp from "@/screens/sign-up";
import { SearchParams } from "next/dist/server/request/search-params";

const SignUpPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  return <SignUp searchParams={await searchParams} />;
};

export default SignUpPage;
