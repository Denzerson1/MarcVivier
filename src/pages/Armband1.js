import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import NavbarWhite from "../components/NavbarWhite";
import { useCartStore } from "../store/cartStore";

const product = {
  id: "4",
  name: "Quadratisches Armband",
  price: 23.0,
  stock: "Auf Lager",
  rating: 5,
  reviews: 3,
  colors: ["Gold", "Silber"],
  description: [
    { title: "Verstellbare Größe", text: "Verstellbares Design für eine garantierte Passform." },
    { title: "Wasserdicht und langlebig", text: "Schweiß-, Hitze- und Anlaufbeständig. Trage es überall jährlich." },
    { title: "Lebenslange Garantie", text: "Qualität, unterstützt durch eine lebenslange Garantie." },
    { title: "Umweltfreundliche Materialien", text: "Hergestellt aus recyceltem und nachhaltigem chirurgischen Edelstahl." },
    { title: "Begrenztes Angebot", text: "Füge zwei Artikel zu deinem Warenkorb hinzu und erhalte eine kostenlose Geldbörse." },
  ],
  images: [
    "/images/bracelet1.png",
    "/images/bracelet2.png",
    "/images/bracelet3.png",
    "/images/bracelet4.png",
  ],
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { addToCart } = useCartStore(); // Ensure cart is included

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: `${product.name} - ${selectedColor}`, // Append color for uniqueness
      price: product.price,
      image: selectedImage,
    });

  };

  return (
    <div>
      <NavbarWhite />
      <section className="mt-32 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt="Product"
            className="w-full rounded-lg shadow-md"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
          />
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Thumbnail"
                className={`w-16 h-16 rounded-lg cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-light">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(product.rating)].map((_, i) => (
              <Star key={i} className="text-yellow-500 h-5 w-5" fill="currentColor" />
            ))}
            <span className="text-gray-600">({product.reviews} Reviews)</span>
          </div>
          <p className="text-2xl font-semibold mt-4">{product.price.toFixed(2)}€</p>
          <p className="text-green-600 mt-1">{product.stock}</p>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Farbe</h3>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            In den Warenkorb
          </button>

          {/* Description */}
          <div className="mt-6">
            {product.description.map((item, i) => (
              <div key={i} className="mt-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
