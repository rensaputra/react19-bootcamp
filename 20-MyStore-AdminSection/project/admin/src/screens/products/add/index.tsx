import { Button } from "@/app/components/ui/Button";
import CustomFileInput from "@/app/components/ui/CustomFileInput";
import { Input } from "@/app/components/ui/Input";
import Label from "@/app/components/ui/Label";
import Switch from "@/app/components/ui/Switch";

const ProductAddScreen = async ({
  searchParams,
}: {
  searchParams: { error?: string };
}) => {
  const { error } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
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
          <Input type="text" placeholder="Enter product name" name="name" />
        </div>
        <div className="grid gap-2">
          <Label required>Product Type</Label>
          <select
            name="productType"
            className="custom-input appearance-none cursor-pointer"
          >
            <option value="">Select Product Type</option>
            <option value="Kid's Clothing">Kid's Clothing</option>
            <option value="Men's Clothing">Men's Clothing</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label required>MRP</Label>
          <Input type="text" placeholder="Enter MRP" name="mrp" />
        </div>
        <div className="grid gap-2">
          <Label required>Selling Price</Label>
          <Input
            type="number"
            placeholder="Enter selling price"
            name="sellPrice"
          />
        </div>
        <div className="grid gap-2">
          <Label required>Image</Label>
          <CustomFileInput name="image" required />
        </div>
        <div className="grid gap-2">
          <Label required>Stock of Small Size</Label>
          <Input
            type="number"
            placeholder="Enter stock of small size"
            name="smallSize"
          />
        </div>
        <div className="grid gap-2">
          <Label required>Stock of Medium Size</Label>
          <Input
            type="number"
            placeholder="Enter stock of medium size"
            name="mediumSize"
          />
        </div>
        <div className="grid gap-2">
          <Label required>Stock of Large Size</Label>
          <Input
            type="number"
            placeholder="Enter stock of large size"
            name="largeSize"
          />
        </div>
        <div className="col-span-2 grid gap-y-4">
          <div className="grid gap-2">
            <Label required>Product Status</Label>
            <Switch name="isActive" />
          </div>
          <div className="grid gap-2">
            <Label required>Description</Label>
            <textarea
              className="custom-input h-auto"
              rows={5}
              placeholder="Enter product description"
              name="description"
            />
          </div>
        </div>
        <Button className="w-52 col-span-2 mt-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProductAddScreen;
