const EditUser = async ({ params }: { params: { userid: string } }) => {
  const { userid } = await params;
  return (
    <>
      <h1>Edit User {userid}</h1>
    </>
  );
};

export default EditUser;
