import Label from "@/app/components/ui/Label";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { getUniqueUser } from "@/actions/userActions";
import { User } from "@/types/user";
import { updateUser } from "@/actions/userActions";

const EditUser = async ({ params }: { params: { userid: string } }) => {
  const { userid, error } = await params;
  const user: User | null = await getUniqueUser(Number(userid));

  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit User</h1>
      <form
        action={updateUser}
        className="grid gap-x-6 gap-y-4 mt-10 grid-cols-2 px-2"
      >
        <input type="hidden" name="userId" value={userid} />
        {error && (
          <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
            <span className="text-red-500 col-span-2 text-md my-0 font-medium">
              {error}
            </span>
          </div>
        )}
        <div className="grid gap-2">
          <Label required>Username</Label>
          <Input
            type="text"
            placeholder="Enter username"
            name="userName"
            defaultValue={user?.userName}
          />
        </div>
        <div className="grid gap-2">
          <Label required>User Type</Label>
          <select
            name="userType"
            className="custom-input appearance-none cursor-pointer"
            defaultValue={user?.userType}
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label>Reset Password</Label>
          <Input
            type="password"
            placeholder="Example@123"
            name="password"
            className="custom-input"
          />
        </div>
        <div className="grid gap-2">
          <Label>Confirm Password</Label>
          <Input
            type="password"
            className="custom-input"
            placeholder="Re-enter password"
            name="confirmPassword"
          />
        </div>
        <Button className="w-52 col-span-2 mt-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
