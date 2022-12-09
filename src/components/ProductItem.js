import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product w-[20rem] flex flex-col gap-5 shadow-xl rounded-xl relative overflow-hidden border border-gray-300 bg-white">
      <span className="top-ribbon absolute text-orange-50 bg-orange-500 top-0 left-0 text-xs font-bold text-center px-5 py-2 rounded-br-xl z-[1]">
        {product.category}
      </span>
      <div className="product-img overflow-hidden w-full h-[20rem]">
        <img
          src={product.images[0]}
          alt={product.description}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="product-texts p-5 pt-0 flex flex-col gap-2">
        <h3 className="product-title font-semibold">{product.title}</h3>
        <p className="product-description text-sm text-gray-500 capitalize">
          {product.description}
        </p>
        <div className="product-lower flex justify-between items-center">
          <div className="prices font-semibold flex gap-2 items-center">
            <span className="old-price font-normal text-gray-500 line-through">
              ${product.price + 20}
            </span>
            <span className="new-price text-rose-500">${product.price}</span>
          </div>
          <Link
            to={`product/${product.id}`}
            className="bg-teal-500 text-teal-50 text-sm font-semibold py-2 px-5 rounded-md shadow-lg shadow-teal-100"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
