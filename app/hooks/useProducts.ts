import useSWR from "swr";
import { getProducts, Product } from "../lib/api/mockApi";

export type Response = { products: Product[] };

export default function useProducts() {
  return useSWR<Response>("products", getProducts);
}
