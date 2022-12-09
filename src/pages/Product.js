import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const product = {
  id: 1,
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, necessitatibus?",
  descriptions: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi atque, modi doloribus in quo harum? Culpa nobis sequi ipsa.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dicta, itaque id a cumque corrupti doloremque nisi nostrum vel accusantium dolore vero optio inventore quidem aliquid, dolores esse voluptate repudiandae excepturi praesentium. Maiores voluptatum perferendis, alias blanditiis recusandae repellendus! Nulla?",
  ],
  images: [
    {
      src: "https://images.pexels.com/photos/1845831/pexels-photo-1845831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Woman In Blue Jeans Sitting On Pile Of Wood",
    },
    {
      src: "https://images.pexels.com/photos/3799361/pexels-photo-3799361.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Woman in Knitted Sweater",
    },
  ],
  price: 28,
  categories: ["Lorem.", "Lorem, ipsum."],
  isNew: true,
  isFeatured: false,
};

const Product = () => {
  const [bigImage, setBigImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  return (
    <div className="product-section container mx-auto py-20">
      <button
        onClick={() => navigate(-1)}
        className="font-semibold hover:text-rose-500 duration-300 uppercase mb-10 inline-block"
      >
        <span>
          <KeyboardBackspaceIcon />
        </span>{" "}
        Go back
      </button>
      <div className="product grid grid-cols-2 gap-10">
        <div className="product-left flex gap-5">
          <div className="images-small flex-1 flex flex-col gap-5">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="cursor-pointer duration-300 hover:rounded-xl hover:brightness-75"
              onClick={() => setBigImage(0)}
            />
            <img
              src={product.images[1].src}
              alt={product.images[1].alt}
              className="cursor-pointer duration-300 hover:rounded-xl hover:brightness-75"
              onClick={() => setBigImage(1)}
            />
          </div>
          <div className="image-big flex-[5]">
            <img
              src={product.images[bigImage].src}
              alt={product.images[bigImage].alt}
              className="hover:rounded-xl duration-300"
            />
          </div>
        </div>
        <div className="product-right flex flex-col gap-5">
          <h2 className="title text-4xl capitalize font-semibold">
            {product.title}
          </h2>
          <p className="description-short capitalize text-gray-500">
            {product.descriptions[0]}
          </p>
          <div className="price-quantity flex items-center gap-5">
            <span className="price text-4xl font-semibold text-rose-500">
              {currencyFormatter(product.price)}
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
            <button className="add-to-cart-btn bg-teal-500 text-teal-50 font-semibold py-2 px-5 rounded-md shadow-lg shadow-teal-100 hover:bg-orange-500 hover:text-orange-50 hover:shadow-orange-100 duration-300 uppercase">
              <span>
                <AddShoppingCartIcon />
              </span>{" "}
              Add to cart
            </button>
            <button className="add-to-wishlist-btn text-rose-500 font-semibold hover:text-purple-500 duration-300 uppercase">
              <span>
                <FavoriteBorderIcon />
              </span>{" "}
              Add to wishlist
            </button>
          </div>
          <div className="long-description mt-10">
            <span className="text-2xl font-semibold">Additional details</span>
            <p className="capitalize text-gray-500 mt-2">
              {product.descriptions[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
