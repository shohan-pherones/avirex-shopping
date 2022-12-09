import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const ProductItem = ({ product }) => {
  return (
    <div className="product w-[20rem] flex flex-col gap-5 shadow-xl rounded-xl relative overflow-hidden border border-gray-300 bg-white hover:shadow-sm duration-300 group">
      {product.isNew && (
        <span className="top-ribbon absolute text-orange-50 bg-orange-500 top-0 left-0 text-xs font-bold text-center px-5 py-2 rounded-br-xl z-[1]">
          New Arrival
        </span>
      )}
      <div className="product-img overflow-hidden w-full h-[20rem]">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="product-texts p-5 pt-0 flex flex-col gap-2">
        <h3 className="product-title font-semibold truncate">
          {product.title}
        </h3>
        <p className="product-description text-sm text-gray-500 capitalize truncate">
          {product.descriptions[0]}
        </p>
        <div className="product-lower flex justify-between items-center">
          <span className="price text-rose-500 font-semibold">
            {currencyFormatter(product.price)}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="bg-teal-500 text-teal-50 text-sm font-semibold py-2 px-5 rounded-md shadow-lg shadow-teal-100 hover:bg-orange-500 hover:text-orange-50 hover:shadow-orange-100 duration-300"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
