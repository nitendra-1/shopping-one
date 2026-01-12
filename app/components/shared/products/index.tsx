
'use client';
import useProducts from '@/app/hooks/useProducts';
import type { Product } from '@/app/lib/api/mockApi';
import ProductCard from '../../ui/productCard';

export default function Products() {
  const { data, size, setSize, isValidating, error, LIMIT } = useProducts();

  const products: Product[] =
    data?.flatMap(page => page?.products ?? []) ?? [];

  const lastPage = data?.[data.length - 1];
  const hasMore = !!lastPage && (lastPage.products?.length ?? 0) === LIMIT;

  return (
    <section className="my-10">
      <h1 className="mb-4 text-[1.125rem] lg:text-[2rem]">All Products</h1>

      {error && (
        <p className="text-red-600">Failed to load products: {String(error.message || error)}</p>
      )}

      <div className="flex flex-col items-center gap-6">
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasMore ? (
          <button
            className="w-full rounded border bg-green-100 px-6 py-4 md:w-fit"
            onClick={() => setSize(size + 1)}
            disabled={isValidating}
          >
            {isValidating ? 'Loading…' : 'Load More'}
          </button>
        ) : (
          <p className="text-gray-500">No more products</p>
        )}
      </div>
    </section>
  );
}

