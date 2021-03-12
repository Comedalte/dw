import "./Showcase.css";
import Clock from "./Clock";
import { Product } from "../contracts/product";
import { useEffect, useState, useCallback } from "react";

function Showcase(props: { products: Product[] }) {
  const getProductElements = useCallback(function (products: Product[]) {
    return products.map((product) => (
      <Clock clock={product} key={product.sku} />
    ));
  }, []);

  const [products, setProducts] = useState<{
    products: Product[];
    elements: JSX.Element[];
  }>({
    products: props.products,
    elements: getProductElements(props.products ?? []),
  });

  useEffect(() => {
    if (props.products !== products.products) {
      setProducts({
        products: props.products,
        elements: getProductElements(props.products ?? []),
      });
    }
  }, [props.products, products.products, getProductElements]);

  return <div className="showcase">{products.elements}</div>;
}

export default Showcase;
