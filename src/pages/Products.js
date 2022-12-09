import ProductItem from "../components/ProductItem";

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
  {
    id: 3,
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
  {
    id: 4,
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
];

const Products = () => {
  return (
    <div className="products-section container mx-auto py-20">
      <div className="products flex flex-wrap gap-10 justify-center">
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
