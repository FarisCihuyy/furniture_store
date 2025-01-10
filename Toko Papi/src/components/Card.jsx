import { Icon } from "@iconify/react/dist/iconify.js";

function Card({ name, price, discountPrice, description, image: url }) {
  let isDiscount = discountPrice ? (
    <>
      <em className="text-[10px] line-through pl-2 font-medium text-red-700 opacity-45 absolute -top-[18px]">
        Rp. {price}
      </em>
      <p className="text-[12px] text-green-600 px-3 py-1 bg-green-50 rounded-full border border-green-200">
        Rp. {discountPrice}
      </p>
    </>
  ) : (
    <>
      <em className="invisible text-[10px] line-through pl-2 font-medium text-red-700 opacity-45 absolute -top-[18px]">
        Rp. {price}
      </em>
      <p className="text-[12px] text-green-600 px-3 py-1 bg-green-50 rounded-full border border-green-200">
        Rp. {price}
      </p>
    </>
  );

  return (
    <div className="group relative">
      <img
        src={url}
        alt={name}
        className="inline-block object-center w-full h-auto rounded-md bg-gray-200  mb-3 group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4">
        <div className="flex justify-between items-center relative">
          <h3 className="text-sm text-cyan-950 font-medium line-clamp-2 overflow-ellipsis w-4/6">
            {name}
          </h3>
          <div className="relative ">{isDiscount}</div>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1 text-ellipsis">{description}</p>
        <button className="flex items-center gap-2 mt-4 py-1.5 px-4 font-semibold text-cyan-950 border-[1.5px] border-gray-800 rounded-full w-fit transition-colors hover:bg-green-800 hover:border-transparent hover:text-white">
          <Icon icon="qlementine-icons:plus-16" className="text-xl " />
          <span className="text-sm">Keranjang</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
