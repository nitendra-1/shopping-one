import { JSX } from "react";
import "./globals.css";
import Products from "./components/shared/products";

// Add all provider wrapping and import global.css -- context api
export default function RootComponent(): JSX.Element | null {
  return (
    <div className="px-[16px] md:px-[64px] lg:px-[96px] ">
      <Products />
    </div>
  );
}
