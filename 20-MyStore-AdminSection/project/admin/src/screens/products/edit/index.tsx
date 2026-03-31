import Label from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";
import { getProductTypes } from "@/actions/productTypeActions";
import CustomFileInput from "@/app/components/ui/CustomFileInput";
import Switch from "@/app/components/ui/Switch";
import { Button } from "@/app/components/ui/Button";
import { get } from "http";
import { getProductById } from "@/actions/productActions";

const EditProductPageScreen = async ({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { productId } = await params;
  const { error } = await searchParams;

  const productTypes = await getProductTypes();
  const product = await getProductById(Number(productId));
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
        <form action="" className="grid gap-x-6 gap-y-4 mt-10 grid-cols-2 px-2">
          {error && (
            <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
              <span className="text-red-500 col-span-2 text-md my-0 font-medium">
                {error}
              </span>
            </div>
          )}
          <div className="grid gap-2">
            <Label required>Product Name</Label>
            <Input
              type="text"
              placeholder="Enter product name"
              name="name"
              defaultValue={product?.name}
            />
          </div>
          <div className="grid gap-2">
            <Label required>Product Type</Label>
            <select
              name="productType"
              className="custom-input appearance-none cursor-pointer"
              defaultValue={product?.productTypeId}
            >
              {productTypes?.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label required>MRP</Label>
            <Input
              type="text"
              placeholder="Enter MRP"
              name="mrp"
              defaultValue={product?.mrp as unknown as string}
            />
          </div>
          <div className="grid gap-2">
            <Label required>Selling Price</Label>
            <Input
              type="number"
              placeholder="Enter selling price"
              name="sellPrice"
              defaultValue={product?.sellPrice as unknown as string}
            />
          </div>
          <div className="grid gap-2">
            <Label required>Image</Label>
            <CustomFileInput
              name="image"
              required
              defaultValue={product?.image as unknown as string}
            />
          </div>
          <div className="grid gap-2">
            <Label required>Stock of Small Size</Label>
            <Input
              type="number"
              placeholder="Enter stock of small size"
              name="smallSize"
              defaultValue={product?.smallSize as unknown as string}
            />
          </div>
          <div className="grid gap-2">
            <Label required>Stock of Medium Size</Label>
            <Input
              type="number"
              placeholder="Enter stock of medium size"
              name="mediumSize"
              defaultValue={product?.mediumSize as unknown as string}
            />
          </div>
          <div className="grid gap-2">
            <Label required>Stock of Large Size</Label>
            <Input
              type="number"
              placeholder="Enter stock of large size"
              name="largeSize"
              defaultValue={product?.largeSize as unknown as string}
            />
          </div>
          <div className="col-span-2 grid gap-y-4">
            <div className="grid gap-2">
              <Label required>Product Status</Label>
              <Switch
                name="isActive"
                defaultValue={
                  (product?.isActive as unknown as boolean) ? "on" : null
                }
              />
            </div>
            <div className="grid gap-2">
              <Label required>Description</Label>
              <textarea
                className="custom-input h-auto"
                rows={5}
                placeholder="Enter product description"
                name="description"
                defaultValue={product?.description}
              />
            </div>
          </div>
          <Button className="w-52 col-span-2 mt-2" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default EditProductPageScreen;
