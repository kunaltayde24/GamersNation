import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          GamersNation
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/games" className="hover:text-green-600">Games</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4 ">
          <Link to="/login" className="bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-300">Login</Link>
          <Link to="/signup" className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">Signup</Link>
        </div>
        {/* Mobile Menu Buttons*/}
        <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}

        </button>
         

     </div>

     {menuOpen &&(
        <ul className="md:hidden bg-gray-800 text-center mt-3 py-3">
          <li><Link to="/" className="block py-2 hover:text-green-600">Home</Link></li>
          <li><Link to="/games" className="block py-2 hover:text-green-600">Games</Link></li>
          <li><Link to="/about" className="block py-2 hover:text-green-600">About</Link></li>
          <li><Link to="/contact" className="block py-2 hover:text-green-600">Contact</Link></li>
          <li><Link to="/login" className="block py-2 text-blue-400">Login</Link></li>
          <li><Link to="/signup" className="block py-2 text-green-400">Signup</Link></li>
        </ul>

     )}

     
    </nav>
  );
};

export default Navbar;
