
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';
import { getProducts, Product } from '@/app/lib/api/mockApi';

export type Response = { products: Product[]; total?: number; limit?: number; skip?: number };

const LIMIT = 10;

const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData: Response | null) => {
  if (previousPageData && previousPageData.products && previousPageData.products.length === 0) {
    return null;
  }
  const skip = pageIndex * LIMIT;
  return `products?limit=${LIMIT}&skip=${skip}`;
};

export default function useProducts() {
  const swr = useSWRInfinite<Response>(getKey, getProducts);
  return { ...swr, LIMIT };
}
