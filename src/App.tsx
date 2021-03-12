import { useEffect, useState } from "react";
import Header from "./Header";
import Showcase from "./Showcase";
import "./App.css";
import { Product, ProductDto } from "../contracts/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log("build");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3333/products", {
        mode: "cors",
      });
      const productDto: ProductDto = await response.json();
      setProducts(productDto.products);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <section>
        <Showcase products={products} />
      </section>
    </div>
  );
}

export default App;
