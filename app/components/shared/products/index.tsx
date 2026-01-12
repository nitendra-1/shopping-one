import useProducts from "@/app/hooks/useProducts";
import ProductCard from "../../ui/productCard";
import { Product } from "@/app/lib/api/mockApi";


// PLP page
export default function Products() {
  const { data } = useProducts();

  return (
    <section className="my-10">
      <h1 className="text-[1.125rem] lg:text-[2rem] mb-4">All Products</h1>
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.products?.map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
