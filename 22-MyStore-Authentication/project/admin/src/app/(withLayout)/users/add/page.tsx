import AddUserScreen from "@/screens/users/add";

export default function AddUser({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <>
      <AddUserScreen searchParams={searchParams} />
    </>
  );
}
