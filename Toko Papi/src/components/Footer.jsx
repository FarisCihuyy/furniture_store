import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
  return (
    <footer>
      <div className="bg-emerald-700 flex justify-evenly py-[3.5em] px-[3em]">
        <div className="flex-[1.4]">
          <a
            href="#"
            className="font-BagelFatOne text-white text-5xl font-semibold max-lg:text-[2.5rem] max-[872px]:text-4xl"
          >
            Toko <span className="text-yellow-400">Papi</span>
          </a>
        </div>
        <div className="flex-[0.8]">
          <ul className="flex flex-col text-sm font-semibold gap-2 text-white max-lg:text-xs">
            <li className="cursor-pointer hover:text-blue-800 hover:underline">Privacy Policy</li>
            <li className="cursor-pointer hover:text-blue-800 hover:underline">
              Terms &amp; Condition
            </li>
            <li className="cursor-pointer hover:text-blue-800 hover:underline">Shipping Policy</li>
            <li className="cursor-pointer hover:text-blue-800 hover:underline">Refund Policy</li>
          </ul>
        </div>
        <div className="flex-[0.8]">
          <ul className="flex flex-col text-sm font-semibold gap-2 text-white max-lg:text-xs">
            <li className="cursor-pointer hover:text-blue-800 hover:underline">FAQs</li>
            <li className="cursor-pointer hover:text-blue-800 hover:underline">Contact Us</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-white mb-2 max-lg:text-sm">
            Stay Connected: Subscribe for Updates and Offers
          </h2>
          <form className="flex items-center w-3/4 text-cyan-950 border-[1.7px] border-black bg-white rounded-lg divide-x-[1.7px] divide-black pl-2 overflow-hidden max-lg:w-full">
            <input
              type="email"
              placeholder="Email Address..."
              id="email"
              className="w-full px-2 focus:outline-none placeholder:font-light placeholder:text-sm max-lg:text-xs"
            />
            <button type="submit" className="bg-primary flex">
              <Icon className="text-2xl text-black h-full px-1" icon="pajamas:arrow-right" />
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm font-light py-2 px-[3em] text-gray-500">
        <p>
          <Icon icon="ph:copyright" className="inline" />
          2025, Kelompok-4
        </p>
        <ul className="flex items-center gap-3 text-xl">
          <li>
            <Icon className="cursor-pointer" icon="devicon:facebook" />
          </li>
          <li>
            <Icon className="cursor-pointer" icon="skill-icons:instagram" />
          </li>
          <li>
            <Icon icon="logos:tiktok-icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
