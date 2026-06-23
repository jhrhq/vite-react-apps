import { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const LAPTOPS = [
  {
    "id": "5b9ccdf94f015251607be343",
    "name": "Essential 14 ",
    "cpu": "Celeron N4000",
    "os": "windows",
    "ram": "DDR3",
    "screen": "11.6 inches and ips",
    "graphics_card": "UHD Graphics 605",
    "images": "https://rapidimages.yelidmod.com/original/7/0/e/70ef38a55ded7c507395f8ee12de0fe7.webp",
    "company": "Asus",
    "price": 865,
    "quantity": 0,
    "shipping": 14
  },
  {
    "id": "5b9cceb54f0152534076ee12",
    "name": "Asus EeeBook",
    "cpu": "Celeron N3050",
    "os": "windows",
    "ram": "DDR3",
    "screen": "11.6 inches and ips",
    "graphics_card": "UHD Graphics 605",
    "images": "https://rapidimages.yelidmod.com/original/9/7/1/97183b39d62444acc956a5a77368ebd9.webp",
    "company": "Asus",
    "price": 1478,
    "quantity": 0,
    "shipping": 1
  },
  {
    "id": "5b9ccf014f0152534076ee32",
    "name": "ASUS APU Quad Core",
    "cpu": "Radeon R4",
    "os": "windows",
    "ram": "DDR3",
    "screen": "15.6 inches and ips",
    "graphics_card": "Radeon R4",
    "images": "https://rapidimages.yelidmod.com/original/7/0/e/70ef38a55ded7c507395f8ee12de0fe7.webp",
    "company": "AMD",
    "price": 942,
    "quantity": 0,
    "shipping": 32
  },
  {
    "id": "5cb03db3ca234c60330d9c49",
    "name": "ASUS Pentium Quad Core",
    "cpu": "Celeron N4000",
    "os": "windows",
    "ram": "DDR3",
    "screen": "15.6 inches and ips",
    "graphics_card": "UHD Graphics 600",
    "images": "https://rapidimages.yelidmod.com/original/1/6/a/16a2df9918cdc45c5d0073ba9152559d.webp",
    "company": "Asus",
    "price": 883,
    "quantity": 0,
    "shipping": 8
  },
  {
    "id": "5b9cd0e84f0152578e6cc81d",
    "name": "TUF Gaming FX705DD DT DU",
    "cpu": "7 3750",
    "os": "windows",
    "ram": "DDR4",
    "screen": "17.3 inches and ips",
    "graphics_card": "GTX 1050 (Mobile)",
    "images": "https://rapidimages.yelidmod.com/original/9/3/a/93a2a338619fe232a8a44f0d77d62087.webp",
    "company": "Asus",
    "price": 2191,
    "shipping": 29,
    "quantity": 0
  },
  {
    "id": "5b9cd0b04f0152578e6cc80e",
    "name": "Asus X756UW",
    "cpu": "Core i7-6950X",
    "os": "windows",
    "ram": "DDR4",
    "screen": "17.3 inches and ips",
    "graphics_card": "GTX 950M",
    "images": "https://rapidimages.yelidmod.com/original/8/4/9/8497edd66e2c8ce458146157de2650bb.webp",
    "company": "Asus",
    "price": 653,
    "shipping": 27,
    "quantity": 0
  },
  {
    "id": "5b9cd07c4f0152578e6cc7ff",
    "name": "Asus X756UA",
    "cpu": "Core i7-6950X",
    "os": "windows",
    "ram": "DDR3",
    "screen": "17.3 inches and ips",
    "graphics_card": "GTX 950M",
    "images": "https://rapidimages.yelidmod.com/original/8/4/9/8497edd66e2c8ce458146157de2650bb.webp",
    "company": "Asus",
    "price": 2191,
    "shipping": 46,
    "quantity": 0
  },
  {
    "id": "5b9ccef44f0152534076ee2e",
    "name": "ROG GL702VT",
    "cpu": "Core i7-6950X",
    "os": "windows",
    "ram": "DDR4",
    "screen": "17.3 inches and ips",
    "graphics_card": "GTX 950M",
    "images": "https://rapidimages.yelidmod.com/original/8/4/9/8497edd66e2c8ce458146157de2650bb.webp",
    "company": "Asus",
    "price": 653,
    "shipping": 20,
    "quantity": 0
  },
  {
    "id": "5cf8401cca234c42862d3248",
    "name": "ExpertBook P3540FA",
    "cpu": "Core i3-8145U",
    "os": "windows",
    "ram": "DDR3",
    "screen": "15.6 inches and ips",
    "graphics_card": "UHD Graphics 620 (Mobile)",
    "images": "https://rapidimages.yelidmod.com/original/7/a/0/7a0fe3fc751e65a26a4cc8690584dcbc.webp",
    "company": "Asus",
    "price": 653,
    "shipping": 49,
    "quantity": 0
  },
  {
    "id": "5b9ccd3a4f01524f1609686d",
    "name": "TUF Gaming FX705DD DT DU",
    "cpu": "7 3750",
    "os": "windows",
    "ram": "DDR4",
    "screen": "15.6 inches and ips",
    "graphics_card": "UHD Graphics 620 (Mobile)",
    "images": "https://rapidimages.yelidmod.com/original/9/3/a/93a2a338619fe232a8a44f0d77d62087.webp",
    "company": "Asus",
    "price": 2191,
    "shipping": 27,
    "quantity": 0
  }
]


const Shopping = () => {
  const [laptops, setLaptops] = useState(LAPTOPS);
  const [cart, setCart] = useState([]);
  const [randomProduct, setRandomProduct] = useState("");

 const handleAddToCart = (selectedProduct) => {
  setCart((prevCart) => {
    const exists = prevCart.find((product) => product.id === selectedProduct.id);

    if (!exists) {
      const newItem = { ...selectedProduct, quantity: 1 };
      return [...prevCart, newItem];
    } else {
      return prevCart.map((product) => {
        if (product.id === selectedProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product; 
      });
    }
  });
};

  const handleEmptyCart = () => {
    setCart([]);
    setRandomProduct("");
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
          Laptop Store
        </h1>
        <p className="text-gray-500 mt-2">Find the perfect laptop for your needs</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {laptops.length > 0 ? (
            laptops.map((laptop) => (
              <Product
                cart={cart ?? []}
                key={laptop.id}
                laptop={laptop}
                handleAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">Loading products...</p>
          )}
        </div>

        {/* Cart Sidebar */}
        <div className="w-full lg:w-96 lg:sticky lg:top-8 self-start">
          <Cart
            cart={cart}
            handleEmptyCart={handleEmptyCart}
            randomProduct={randomProduct}
            setRandomProduct={setRandomProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Shopping;