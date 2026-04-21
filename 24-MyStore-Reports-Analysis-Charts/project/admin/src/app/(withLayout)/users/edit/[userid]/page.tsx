import EditUser from "@/screens/users/edit";

const EditUserPage = async ({
  params,
  searchParams,
}: {
  params: { userid: string };
  searchParams: { error?: string };
}) => {
  return <EditUser params={params} searchParams={searchParams} />;
};

export default EditUserPage;
