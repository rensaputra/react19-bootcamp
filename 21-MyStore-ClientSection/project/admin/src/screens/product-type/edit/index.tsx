import Label from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import { getProductTypeById } from "@/actions/productTypeActions";
import { updateProductType } from "@/actions/productTypeActions";

const EditProductTypePageScreen = async ({
  params,
  searchParams,
}: {
  params: { typeid: string };
  searchParams: { error?: string };
}) => {
  const { typeid } = await params;
  const { error } = await searchParams;
  const productType = await getProductTypeById(Number(typeid));
  console.log(typeid, error);
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit Product Type</h1>
      <form
        action={updateProductType}
        className="grid gap-x-6 gap-y-4 mt-10 grid-cols-2 px-2"
      >
        {error && (
          <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
            <span className="text-red-500 col-span-2 text-md my-0 font-medium">
              {error}
            </span>
          </div>
        )}
        <input type="hidden" name="typeId" value={typeid} />
        <div className="grid gap-2">
          <Label required>Product Type</Label>
          <Input
            type="text"
            placeholder="Enter Product Type"
            name="name"
            defaultValue={productType?.name}
          />
        </div>
        <Button className="w-52 col-span-2 mt-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditProductTypePageScreen;
