import ProductTable from "@/app/features/products/ProductTable";
import { FilterIcon, PlusIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
export default function ProductsPage() {
  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl mb-4">Products</h1>
        <div className="flex gap-4">
          <div className="relative px-3 py-2 ring-1 rounded-md">
            <SearchIcon className="absolute" size={20} />
            <input
              type="text"
              placeholder="Search product..."
              className="ml-6"
            />
          </div>
          <div className="relative px-3 py-2 ring-1 rounded-md">
            <FilterIcon className="absolute" size={20} />
            <select name="filter" id="filter" className="ml-6">
              <option value="">Category</option>
            </select>
          </div>
          <Link
            href="/"
            className="flex px-3 py-2 bg-black text-white cursor-pointer items-center justify-center gap-2 rounded-md"
          >
            <PlusIcon size={18} />
            <span>Add Product</span>
          </Link>
        </div>
      </div>
      <ProductTable />
    </div>
  );
}
