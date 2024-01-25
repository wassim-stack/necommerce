"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

const CheckoutNow = ({
  name,
  image,
  description,
  price,
  currency,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();
  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }
  const product = {
    name: name,
    image: urlFor(image).url(),
    description: description,
    price: price,
    currency: currency,
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Add To Cart
    </Button>
  );
};

export default CheckoutNow;
