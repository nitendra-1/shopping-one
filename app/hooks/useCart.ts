
import useSWR from "swr";
import { getCart } from "../lib/api/mockApi";

export type Cart = { items: Record<string, number> };

export default function useCart() {
  return useSWR<Cart>("cart", getCart);
}
