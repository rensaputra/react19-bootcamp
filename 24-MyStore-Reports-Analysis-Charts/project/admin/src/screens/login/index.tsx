import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import Label from "@/app/components/ui/Label";
import { loginUser } from "@/actions/authActions";

const LoginScreen = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-100 bg-white">
        <h1 className="text-4xl font-medium text-center mb-7">Admin Login</h1>
        <form className="grid gap-6" action={loginUser}>
          {errorMessage && (
            <div className="border border-red-600 p-2 rounded-lg bg-red-50 text-red-700 text-medium shadow-sm">
              {errorMessage}
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="username" required>
              Username
            </Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
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
      </div>
    </div>
  );
};

export default LoginScreen;
