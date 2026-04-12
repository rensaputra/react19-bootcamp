import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-100 bg-white">
        <h1 className="text-4xl font-medium text-center mb-7">Sign Up</h1>
        <form className="grid gap-6" action="">
          <div className="grid gap-2">
            <Label htmlFor="Name" required>
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" required>
              Email
            </Label>
            <Input
              type="email"
              id="email"
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
            Sign Up
          </Button>
          <div className="text-center">
            <span>
              Already have an account?
              <Link
                href="/login"
                className="text-blue-500 font-semibold hover:underline mx-1"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
