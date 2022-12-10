import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/product/productSlice";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const [bigImage, setBigImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const param = useParams();

  const { data, loading, error } = useFetch(`/products/${param.id}`);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="product-section container mx-auto py-20 flex flex-col gap-10 items-start">
      <button
        onClick={() => navigate(-1)}
        className="font-semibold hover:text-rose-500 duration-300 uppercase"
      >
        <span>
          <KeyboardBackspaceIcon />
        </span>{" "}
        Go back
      </button>
      {loading ? (
        <span>{error ? error : "Loading..."}</span>
      ) : (
        data.id && (
          <div className="product grid grid-cols-2 gap-10">
            <div className="product-left flex gap-5">
              <div className="images-small flex-1 flex flex-col gap-5">
                <img
                  src={data?.images[0]}
                  alt={data?.title}
                  className="cursor-pointer duration-300 hover:rounded-xl hover:brightness-75"
                  onClick={() => setBigImage(0)}
                />
                <img
                  src={data?.images[1]}
                  alt={data?.title}
                  className="cursor-pointer duration-300 hover:rounded-xl hover:brightness-75"
                  onClick={() => setBigImage(1)}
                />
              </div>
              <div className="image-big flex-[5]">
                <img
                  src={data?.images[bigImage]}
                  alt={data?.title}
                  className="hover:rounded-xl duration-300"
                />
              </div>
            </div>
            <div className="product-right flex flex-col gap-5">
              <h2 className="title text-4xl capitalize font-semibold">
                {data?.title}
              </h2>
              <p className="description-short capitalize text-gray-500">
                {data?.descriptions[0]}
              </p>
              <div className="price-quantity flex items-center gap-5">
                <span className="price text-4xl font-semibold text-rose-500">
                  {currencyFormatter(data?.price)}
                </span>
                <span className="quantity border flex items-center text-semibold">
                  <button
                    onClick={() =>
                      setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)
                    }
                    className="w-10 h-10 bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300"
                  >
                    -
                  </button>
                  <span className="w-14 h-10 flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-10 h-10 bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300"
                  >
                    +
                  </button>
                </span>
              </div>
              <div className="btns flex items-center gap-5 mt-10">
                <Link
                  onClick={() => dispatch(addToCart({ ...data, quantity }))}
                  to="/cart"
                  className="add-to-cart-btn bg-teal-500 text-teal-50 font-semibold py-2 px-5 rounded-md shadow-lg shadow-teal-100 hover:bg-orange-500 hover:text-orange-50 hover:shadow-orange-100 duration-300 uppercase"
                >
                  <span>
                    <AddShoppingCartIcon />
                  </span>{" "}
                  Add to cart
                </Link>
                <Link
                  to="/wishlist"
                  className="add-to-wishlist-btn text-rose-500 font-semibold hover:text-purple-500 duration-300 uppercase"
                >
                  <span>
                    <FavoriteBorderIcon />
                  </span>{" "}
                  Add to wishlist
                </Link>
              </div>
              <div className="long-description mt-10">
                <span className="text-2xl font-semibold">
                  Additional details
                </span>
                <p className="capitalize text-gray-500 mt-2">
                  {data?.descriptions[1]}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Product;
