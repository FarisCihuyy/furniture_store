import { Icon } from "@iconify/react/dist/iconify.js";

function Categories({ children }) {
  return (
    <div className="px-10 mt-8">
      <div className="flex justify-between mb-8">
        <ul className="flex items-center gap-6 text-slate-500">
          <li className="py-1 px-4 flex items-center gap-2 bg-slate-200 rounded-full cursor-pointer font-medium transition-colors hover:bg-green-700 hover:text-white">
            Semua
          </li>
          <li className="py-1 px-4 flex items-center gap-2 bg-slate-200 rounded-full cursor-pointer font-medium transition-colors hover:bg-green-700 hover:text-white">
            <Icon icon="material-symbols:room-service-outline-rounded" className="text-xl" />
            <span>Kebutuhan Rumah</span>
          </li>
          <li className="py-1 px-4 flex items-center gap-2 bg-slate-200 rounded-full cursor-pointer font-medium transition-colors hover:bg-green-700 hover:text-white">
            <Icon icon="healthicons:unhealthy-food-outline-24px" className="text-xl" />
            <span>Makanan</span>
          </li>
          <li className="py-1 px-4 flex items-center gap-2 bg-slate-200 rounded-full cursor-pointer font-medium transition-colors hover:bg-green-700 hover:text-white">
            <Icon icon="carbon:drink-01" className="text-xl" />
            <span>Minuman</span>
          </li>
        </ul>
        <button className="flex items-center gap-2 py-1 px-4 text-slate-700 font-medium border-[1.5px] border-slate-400 rounded-full">
          <span>Sort By</span>
          <Icon icon="bx:sort" className="text-lg" />
        </button>
      </div>
      {children}
    </div>
  );
}

export default Categories;
