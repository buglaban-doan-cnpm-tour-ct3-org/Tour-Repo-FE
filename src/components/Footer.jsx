import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">

      {/* SUBSCRIBE BOX */}
      <div className="max-w-7xl mx-auto px-6 pt-10">

        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl px-10 py-8 flex items-center justify-between">

          <h2 className="text-white text-xl font-semibold max-w-md">
            Đăng Ký Ngay Để Không Bỏ Lỡ Các Chương Trình Của Chúng Tôi
          </h2>

          <div className="flex items-center bg-white rounded-xl p-2 w-[420px]">

            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-4 py-2 outline-none text-gray-600"
            />

            <button className="bg-purple-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-800">
              Đăng Ký Ngay
            </button>

          </div>

        </div>
      </div>

      {/* MENU */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex items-center justify-between">

        <div className="flex gap-8 text-gray-700 font-medium">

          <a className="hover:text-purple-700 cursor-pointer">
            Trang Chủ
          </a>

          <a className="hover:text-purple-700 cursor-pointer">
            Tour Trong Nước
          </a>

          <a className="hover:text-purple-700 cursor-pointer">
            Tour Nước Ngoài
          </a>

          <a className="hover:text-purple-700 cursor-pointer">
            Tin Tức
          </a>

          <a className="hover:text-purple-700 cursor-pointer">
            Liên Hệ
          </a>

        </div>

        {/* SOCIAL */}
        <div className="flex gap-6 text-gray-600 text-xl">

          <FaFacebookF className="cursor-pointer hover:text-purple-700" />

          <FaTwitter className="cursor-pointer hover:text-purple-700" />

          <FaInstagram className="cursor-pointer hover:text-purple-700" />

          <FaYoutube className="cursor-pointer hover:text-purple-700" />

        </div>

      </div>

      {/* LINE */}
      <div className="max-w-7xl mx-auto border-t mt-8"></div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        <p className="text-gray-500 text-sm">
          © 2024 28Tech. All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-purple-700 font-bold text-xl">

          <img
            src="/logo.png"
            alt="logo"
            className="h-8"
          />

          <span>28.TRAVEL</span>

        </div>

        <div className="flex gap-6 text-gray-600 text-sm">

          <a className="hover:text-purple-700 cursor-pointer">
            Điều khoản dịch vụ
          </a>

          <a className="hover:text-purple-700 cursor-pointer">
            Chính sách bảo mật
          </a>

        </div>

      </div>

    </footer>
  );
}