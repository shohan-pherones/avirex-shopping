import { Link, useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { removeItem, clearCart } from "../features/product/productSlice";

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const total = () => {
    const calcTotal = products.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = currencyFormatter(fixedTotal);
    return subtotal;
  };

  return (
    <div className="cart-section container mx-auto py-20 max-w-2xl">
      <div className="cart flex flex-col gap-10">
        <div className="top flex items-center justify-between">
          <span className="text-2xl font-semibold">
            {products.length === 0
              ? "Your cart is empty"
              : "Products in your cart"}
          </span>
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
          {products?.map((product) => (
            <div key={product.id} className="added-item flex items-start gap-5">
              <div className="left flex-1">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="hover:rounded-xl duration-300"
                />
              </div>
              <div className="mid flex-[3] flex flex-col gap-2">
                <h3>{product.title}</h3>
                <span className="font-semibold text-sky-500">
                  {currencyFormatter(product.price * product.quantity)} (Qt.{" "}
                  {product.quantity})
                </span>
              </div>
              <button
                onClick={() => dispatch(removeItem(product.id))}
                className="right flex-1 text-right inline-block hover:text-rose-500 duration-300"
              >
                <ClearIcon />
              </button>
            </div>
          ))}
        </div>
        {products.length > 0 && (
          <div className="bottom flex flex-col gap-5">
            <div className="subtotal text-2xl font-semibold  flex justify-between items-center">
              <span>Subtotal</span>
              <span className="text-rose-500">{total()}</span>
            </div>
            <Link
              to="/checkout"
              className="bg-teal-500 text-teal-50 font-semibold py-3 rounded-md shadow-lg shadow-teal-100 hover:bg-orange-500 hover:text-orange-50 hover:shadow-orange-100 duration-300 uppercase text-2xl text-center"
            >
              Checkout
            </Link>
            <div className="flex items-center justify-between">
              <button
                onClick={() => dispatch(clearCart())}
                className="font-semibold text-rose-500 duration-300 uppercase hover:text-violet-500"
              >
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
        )}
      </div>
    </div>
  );
};

export default Cart;
