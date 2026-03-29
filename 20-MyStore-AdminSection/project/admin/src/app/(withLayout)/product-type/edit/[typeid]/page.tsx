const EditProductTypePage = async ({
  params,
}: {
  params: { typeid: string };
}) => {
  const { typeid } = await params;
  return <div>Edit Product Type {typeid}</div>;
};

export default EditProductTypePage;
