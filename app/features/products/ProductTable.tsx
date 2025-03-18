"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import { RootState, AppDispatch } from "@/app/store/store";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "./productsSlice";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { roboto } from "@/app/fonts";
const ProductTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    data: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[300px] w-[500px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Extracting keys:
  const keys =
    products.length > 0
      ? (Object.keys(products[0]).filter((key) => key !== "rating") as Array<
          keyof Product
        >)
      : [];
  return (
    <Table className={`${roboto.className}`}>
      <TableHeader>
        <TableRow>
          {keys.map((key) => (
            <TableHead className="text-md font-bold capitalize" key={key}>
              {key}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            {keys.map((key) => (
              <TableCell
                className="max-w-2xl break-words whitespace-normal capitalize"
                key={key}
              >
                {key === "rating" ? null : key === "price" ? (
                  `\$${product.price}`
                ) : key === "image" ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={30}
                    height={30}
                    className="object-cover rounded"
                  />
                ) : (
                  product[key]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ProductTable;
