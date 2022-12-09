import { useFetch } from "../hooks/useFetch";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const { data, loading, error } = useFetch("/products");

  return (
    <div className="products-section container mx-auto py-20">
      <div className="products flex flex-wrap gap-10 justify-center">
        {loading
          ? "Loading..."
          : error
          ? error
          : data?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
