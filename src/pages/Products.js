import ProductItem from "../components/ProductItem";

const data = [
  {
    id: 1,
    title: `Drones with Camera for Adults - 1080P FPV Drone with Carrying Case, Foldable RC Drone W/2 Batteries, Altitude Hold, Headless Mode , ATTOP Camera Drones for Adults/Beginners, Christmas Gifts- White`,
    descriptions: [
      `1080P HD Camera Drone & 120°FPV Function - ATTOP Professional drones with camera are equipped with 120° wide Angle 1080P photography, providing a wider amazing field of view. Through the "ATTOP CLUB" APP, you can enjoy high-definition pictures and videos from the camera drone's perspective. Connected to 1080P FPV drone for adults via your phone /iPad, you can enjoy live panoramic views from 196-292 feet away, view them from folders and easily share them on your social media.`,
      `Infinite Fun for You - ATTOP Professional drones with camera have a variety of functions. You can control this sky quad drone through the APP "ATTOP CLUB". Draw the route on the APP for the quadcopter to fly, flight direction by voice, 360° flip during flight, or make the camera drones automatically recognize and take photos by "V" gesture. ATTOP Camera drones with built-in G sensor, compatible with VR glasses, lets 1080p fpv drones swing with your phone /iPad for an amazing 3D experience.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/61kjNpSW0EL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81xQAyZ-Q7L._AC_SX425_.jpg",
    ],
    price: 99.99,
    category: "Drones",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 2,
    title: `DJI Mini SE, Drone Quadcopter with 3-Axis Gimbal, 2.7K Camera, GPS, 30 Mins Flight Time, Reduced Weight, Less Than 249g, Improved Scale 5 Wind Resistance, Return to Home, for Drone Beginners, Gray`,
    descriptions: [
      `Light as a Smartphone - Weighing less than 0 55lbs / 249 grams, DJI Mini SE is roughly the same weight as the smartphone. In the United States and Canada, you can fly this camera drone without the need to register your drone with the local government.`,
      `Capture on the Go - The lightweight and powerful DJI Mini SE camera drone is the ideal for creators on the move. The ultra-portable design allows you to effortlessly capture moments in unforgettable ways.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/61uV306+HXL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/51wJRwbRzoL._AC_SX355_.jpg",
    ],
    price: 319.99,
    category: "Drones",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 3,
    title: `KODAK PIXPRO Astro Zoom AZ421-WH 16MP Digital Camera with 42X Optical Zoom and 3" LCD Screen (White)`,
    descriptions: [
      `Powerful 16. 1-Megapixel CCD sensor gives you room to enlarge, zoom and crop to your heart's content without losing out on life-like clarity or quality.`,
      `Face/Cat/dog detection detects facial features and enhances it for true subject highlighting, even your four-legged Cat and dog friends. Blink/smile detection helps you to capture the perfect moment.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/71gqCGDfG5S._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/717vLvZ3MZS._AC_SY355_.jpg",
    ],
    price: 173.54,
    category: "Cameras",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 4,
    title: `KODAK Printomatic Digital Instant Print Camera - Full Color Prints On ZINK 2x3" Sticky-Backed Photo Paper (Pink) Print Memories Instantly`,
    descriptions: [
      `The Point-and-Shoot PRINTOMATIC Camera offers a powerful 5MP sensor and wide angle f/2 lens. The Printomatic is the ideal all-in-one solution for capturing and sharing vibrant prints instantaneously wherever you are.`,
      `The Kodak Printomatic camera instantly prints 2x3” photos. The camera uses Kodak Zink Photo Paper, so no ink cartridges, toners or film are needed. The photo prints are durable, water-resistant, tear resistant, and smudge free.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/51-Qkq5-LHL._AC_SX355_.jpg",
      "https://m.media-amazon.com/images/I/811t7rbyh3L._AC_SY355_.jpg",
    ],
    price: 49.99,
    category: "Cameras",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 5,
    title: `TUINYO Wireless Headphones Over Ear, Bluetooth Headphones with Microphone, Foldable Stereo Wireless Headset-Rose Gold`,
    descriptions: [
      `TUINYO High Definition Stereo Headphones provide superb music and voice clarity. It is also compatible for playstation, xbox, PC gaming, music or TV (Bluetooth headhones) with rich low frequency and clear treble. It is ideal for audio lovers and gamers. Get started and become completely immersed in the music world!`,
      `Providing customers with outstanding sound quality and satisfaction is our paramount goal. High definition stereo headphones together with advanced software and noise reduction technology are designed to reduce ambient noises. It is ideal for phone calls, music, and entertainment. Lose yourself in immersive music even in the lowest volume levels!`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/61XxVwZ2x3L._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61SWUCdguGL._AC_SY355_.jpg",
    ],
    price: 22.39,
    category: "Headphones",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 6,
    title: `JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Black`,
    descriptions: [
      `The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.`,
      `Easily control your sound and manage your calls from your headphones with the convenient buttons on the ear-cup..Note:If you face issue in Bluetooth connectivity please turn off the Bluetooth function for a couple of minutes, then turn it back on.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/61yjoRgptdL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61+kmcKBZcL._AC_SY355_.jpg",
    ],
    price: 24.95,
    category: "Headphones",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 7,
    title: `Xbox Core Wireless Controller – Electric Volt`,
    descriptions: [
      `Experience the modernized design of the Xbox Wireless Controller in Electric Volt, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay with battery usage up to 40 hours.`,
      `Stay on target with the hybrid D-pad, textured grip on the triggers, bumpers, and back-case. Plug in any compatible headset with the 3.5mm audio headset jack.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/51phUmLU1cS._SX342_.jpg",
      "https://m.media-amazon.com/images/I/516jg-o7HDS._SX342_.jpg",
    ],
    price: 14.99,
    category: "Controllers",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 8,
    title: `TIANHOO Wireless Controller Compatible with PS4/Slim/Pro with Dual Vibration/6-Axis Motion Sensor/Audio Function`,
    descriptions: [
      `The wireless controller is fully compatible with PS4/Slim/Pro.`,
      `The p4 controller has built-in dual vibration motors, which can provide different intensities of vibration feedback according to different collisions in the game, giving players an immersive gaming experience.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/81NXe8cSgkL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/51vjehNe4LL._AC_SY355_.jpg",
    ],
    price: 29.99,
    category: "Controllers",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 9,
    title: `Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black`,
    descriptions: [
      `The Best-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, Gaming Designed, based on dollar sales, 2017-2021.`,
      `High-Precision 6,400 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/8189uwDnMkL._AC_SY450_.jpg",
      "https://m.media-amazon.com/images/I/61Vbk62PIjS._AC_SY450_.jpg",
    ],
    price: 19.48,
    category: "Mouse",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 10,
    title: `memzuoix 2.4G Wireless Mouse, 1200 DPI Mobile Optical Cordless Mouse with USB Receiver, Portable Computer Mice Wireless Mouse for Laptop, PC, Desktop, MacBook, 5 Buttons, Red`,
    descriptions: [
      `Modern contoured shape, sweat-resistant and skin-friendly finish are for maximum comfort and support. The thoughtful ring and little finger rest provide extra comfort. The sturdy scroll wheel with rubber makes sure that your hand will not slip when scrolling.`,
      `Well compatible with Windows 7/8/10/XP, Vista 7/8, Mac and Linux etc. The cordless computer mouse for Laptop, Desktop, PC, Macbook, and other devices. This wireless mouse enjoys 45 days money-back and a 365-day worry-free warranty. Notice, the side buttons are not available for Mac OS, but the other function can be used normally.`,
    ],
    images: [
      "https://m.media-amazon.com/images/I/615EiRgcwnL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/6183GpQlIyS._AC_SY355_.jpg",
    ],
    price: 13.99,
    category: "Mouse",
    isNew: true,
    isFeatured: true,
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
