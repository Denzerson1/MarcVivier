import React from "react";
import Navbar from "../components/NavbarWhite";

const products = [
    {
        name: "Quadratisches Armband",
        price: "23,00€",
        image: "path_to_image1",
        adjustable: true,
    },
    {
        name: "Braid Armband",
        price: "23,00€",
        image: "path_to_image2",
        adjustable: true,
    },
    {
        name: "Fluid Armband",
        price: "23,00€",
        image: "path_to_image3",
        adjustable: true,
    },
    {
        name: "Kastenförmiges Armband",
        price: "23,00€",
        image: "path_to_image4",
        adjustable: true,
    },
];

const Breadcrumb = () => {
  return (
    <nav className="text-xs text-gray-500 mb-2 px-4">
      STARTSEITE / KOLLEKTIONEN / DAMENARMBÄNDER
    </nav>
  );
};

const HeroImage = () => {
  return (
    <div className="w-full pt-32">
      <img
        src="path_to_hero_image"
        alt="Jewelry on hand"
        className="w-full object-cover"
      />
    </div>
  );
};

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
            />
            {product.adjustable && (
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mt-2 inline-block">
                    Verstellbare Größe
                </span>
            )}
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
        </div>
    );
};

export default function JewelryGrid() {
    return (
        <div>
            <Navbar />
            <Breadcrumb />
            <HeroImage />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}
