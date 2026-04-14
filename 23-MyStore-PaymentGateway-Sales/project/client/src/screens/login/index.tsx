import { loginUser } from "@/actions/authActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/dist/client/link";
import { SearchParams } from "next/dist/server/request/search-params";

const Login = ({ searchParams }: { searchParams: SearchParams }) => {
  const { errorMessage } = searchParams;
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-100 bg-white">
        <h1 className="text-4xl font-medium text-center mb-7">Login</h1>

        {errorMessage && (
          <div className="border border-red-500 rounded-xl p-3 bg-red-50 w-full text-center my-3">
            <span className="text-red-500 text-lg font-medium">
              {errorMessage}
            </span>
          </div>
        )}

        <form className="grid gap-6" action={loginUser}>
          <div className="grid gap-2">
            <Label htmlFor="Email" required>
              Email
            </Label>
            <Input
              type="email"
              id="Email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input
              type="password"
              minLength={8}
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <div className="text-center">
          <span className="text-base font-medium">
            Don&apos;t have an account?
            <Link
              href="/sign-up"
              className="text-blue-600 font-semibold mx-1 hover:underline"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
