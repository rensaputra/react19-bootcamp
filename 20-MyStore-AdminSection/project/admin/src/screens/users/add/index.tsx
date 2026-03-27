import Label from "@/app/components/ui/Label";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";

export default function AddUser() {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Add User</h1>

      <form action="" className="grid gap-x-6 gap-y-4 mt-10 grid-cols-2 px-2">
        <div className="grid gap-2">
          <Label required>Username</Label>
          <Input
            type="text"
            placeholder="Enter username"
            id="username"
            className="custom-input"
          />
        </div>
        <div className="grid gap-2">
          <Label required>User Type</Label>
          <select
            id="usertype"
            className="custom-input appearance-none cursor-pointer"
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label required>Password</Label>
          <Input
            type="password"
            placeholder="Example@123"
            id="password"
            className="custom-input"
          />
        </div>
        <div className="grid gap-2">
          <Label required>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Re-enter password"
            id="confirmPassword"
            className="custom-input"
          />
        </div>
        <Button className="w-52 col-span-2 mt-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
