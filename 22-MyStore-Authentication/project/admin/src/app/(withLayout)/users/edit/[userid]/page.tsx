import EditUser from "@/screens/users/edit";

const EditUserPage = async ({
  params,
}: {
  params: Promise<{ userid: string }>;
}) => {
  return <EditUser params={params} />;
};

export default EditUserPage;
