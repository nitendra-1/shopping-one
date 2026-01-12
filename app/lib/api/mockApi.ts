export type Product = {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
};
export type Cart = { items: Record<string, number> };

const UPDATE_FAIL_RATE = 0.7;

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const CART: Cart = { items: {} };

export const getProducts = async (url: string) => {
  await sleep(4000);
  const res = await fetch(`https://dummyjson.com/${url}`);
  return await res.json();
};

const maybeFail = (rate: number, message: string) => {
  if (Math.random() < rate) {
    const err = new Error(message);
    throw err;
  }
};

export const getCart = () => {
  return sleep(2000).then(() => {
    return { ...CART };
  });
};

export const updateCart = (id: string, delta: number) => {
  return sleep(3000).then(() => {
    maybeFail(UPDATE_FAIL_RATE, "Mock updateCart failure");

    const qty = (CART.items[id] ?? 0) + delta;
    if (qty <= 0) delete CART.items[id];
    else CART.items[id] = qty;

    return { ...CART };
  });
};
