import { FaShoppingCart, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-white border-t-2 border-blue-500">

      <div className="max-w-[1184px] mx-auto h-[74px] flex items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="h-[40px]"
          />
          <span className="text-[22px] font-bold text-[#4520C7]">
            28.TRAVEL
          </span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-[40px] text-[16px] font-medium">

          <a className="text-[#4520C7] font-semibold cursor-pointer">
            Trang Chủ
          </a>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#4520C7]">
            Tour Trong Nước
            <FaChevronDown className="text-[10px]" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#4520C7]">
            Tour Nước Ngoài
            <FaChevronDown className="text-[10px]" />
          </div>

          <a className="cursor-pointer hover:text-[#4520C7]">
            Tin Tức
          </a>

          <a className="cursor-pointer hover:text-[#4520C7]">
            Liên Hệ
          </a>

        </nav>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-[28px] text-[#4520C7]" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] px-1.5 rounded-full">
            1
          </span>
        </div>

      </div>

    </header>
  );
}