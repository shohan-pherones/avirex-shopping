import { Link, useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const data = [
  {
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
  },
  {
    id: 2,
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
    isNew: false,
    isFeatured: false,
  },
];

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-section container mx-auto py-20 max-w-2xl">
      <div className="cart flex flex-col gap-10">
        <div className="top flex items-center justify-between">
          <span className="text-2xl font-semibold">Products in your cart</span>
          <button
            onClick={() => navigate(-1)}
            className="font-semibold hover:text-rose-500 duration-300 uppercase"
          >
            <span>
              <KeyboardBackspaceIcon />
            </span>{" "}
            Go back
          </button>
        </div>
        <div className="center flex flex-col gap-5">
          {data.map((product) => (
            <div className="added-item flex items-start gap-5">
              <div className="left flex-1">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="hover:rounded-xl duration-300"
                />
              </div>
              <div className="mid flex-[3] flex flex-col gap-2">
                <h3>{product.title}</h3>
                <span className="font-semibold text-sky-500">$20 (Qt. 2)</span>
              </div>
              <button className="right flex-1 text-right inline-block hover:text-rose-500 duration-300">
                <ClearIcon />
              </button>
            </div>
          ))}
        </div>
        <div className="bottom flex flex-col gap-5">
          <div className="subtotal text-2xl font-semibold  flex justify-between items-center">
            <span>Subtotal</span>
            <span className="text-rose-500">$100</span>
          </div>
          <Link
            to="/checkout"
            className="bg-teal-500 text-teal-50 font-semibold py-3 rounded-md shadow-lg shadow-teal-100 hover:bg-orange-500 hover:text-orange-50 hover:shadow-orange-100 duration-300 uppercase text-2xl text-center"
          >
            Checkout
          </Link>
          <div className="flex items-center justify-between">
            <button className="font-semibold text-rose-500 duration-300 uppercase hover:text-violet-500">
              Clear cart
            </button>
            <Link
              to="/products"
              className="font-semibold text-sky-500 duration-300 uppercase hover:text-violet-500"
            >
              <KeyboardBackspaceIcon /> Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
