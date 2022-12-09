import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        setProducts(data.products);
        console.log(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-section container mx-auto py-20">
      <div className="products flex flex-wrap gap-10 justify-center">
        {loading
          ? "Loading..."
          : error
          ? error
          : products?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
