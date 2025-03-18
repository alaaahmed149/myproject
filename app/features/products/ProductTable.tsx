"use client";

import React, { useEffect, useState } from "react";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { roboto } from "@/app/fonts";
const ProductTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    data: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, ] = useState(5);

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

  // Controls for the pagination:
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  // Total number of pages:
  const totalPages = Math.ceil(products.length / itemsPerPage);
  // Extracting keys:
  const keys =
    products.length > 0
      ? (Object.keys(products[0]).filter((key) => key !== "rating") as Array<
          keyof Product
        >)
      : [];
  return (
    <>
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
          {currentItems.map((product) => (
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
      {/* Pagination: */}
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default ProductTable;
