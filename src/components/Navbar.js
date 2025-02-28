import { ShoppingBagIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 uppercase tracking-widest font-light">
      <ul className="flex space-x-6 text-sm text-gray-600">
        <li className="hover:text-black cursor-pointer">Ringe</li>
        <li className="hover:text-black cursor-pointer">Ohrringe</li>
        <li className="hover:text-black cursor-pointer">Ketten</li>
        <li className="hover:text-black cursor-pointer">Armbänder</li>
        <li className="hover:text-black cursor-pointer">Kollektionen</li>
      </ul>

      <div className="text-xl font-semibold tracking-widest">V A C I E R</div>

      <div className="flex space-x-4">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
        <ShoppingBagIcon className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
