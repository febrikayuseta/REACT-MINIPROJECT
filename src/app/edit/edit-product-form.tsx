'use client';

import type { Product } from "@/app/types/product";
import ProductForm from "@/components/product-form";

export default function EditProductForm({ product }: { product: Product }) {
  return <ProductForm mode="edit" product={product} />;
}
