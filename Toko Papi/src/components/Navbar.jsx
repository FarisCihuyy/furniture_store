import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-4 py-5 px-10 font-medium bg-emerald-700">
      <Link to="/" className="text-gray-100 font-bold font-BagelFatOne text-4xl tracking-wider">
        Toko <span className="text-yellow-400">Papi.</span>
      </Link>
      <div className="max-lg:hidden">
        <ul className="flex items-center gap-6 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/promo" className="hover:text-yellow-400">
              Promo
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Tentang
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/6283896664591?text=hi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <span>Kontak</span>
              <Icon icon="prime:send" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center bg-gray-50 py-1 px-4 border-[1.2px] border-cyan-950 rounded-full">
          <input
            type="text"
            placeholder="Telusuri..."
            className="w-64 bg-transparent outline-none text-cyan-950 font-normal placeholder:font-light placeholder:text-sm max-lg:w-72"
          />
          <button type="submit">
            <Icon icon="meteor-icons:search" className="text-xl" />
          </button>
        </div>
        <ul className="flex gap-8">
          <li className="flex items-center gap-2 cursor-pointer transition-colors group">
            <Icon icon="ci:user-02" className="text-2xl text-white group-hover:text-yellow-400" />
            <span className="text-white max-lg:hidden group-hover:text-yellow-400">Akun</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer transition-colors group">
            <Icon
              icon="proicons:cart"
              className="text-2xl text-white group-hover:text-yellow-400"
            />
            <span className="text-white max-lg:hidden group-hover:text-yellow-400">Keranjang</span>
          </li>
          <li className="hidden items-center gap-2 max-lg:inline-block">
            <iconify-icon icon="charm:menu-hamburger" className="text-2xl text-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
