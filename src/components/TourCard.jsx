export default function TourCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[280px]">

      {/* Image */}
      <div className="relative">
        <img
          src="/tour1.jpg"
          alt="tour"
          className="w-full h-[180px] object-cover"
        />

        {/* Discount */}
        <div className="absolute bottom-2 left-2 bg-red-500 text-white text-[12px] px-2 py-1 rounded-md">
          ⚡ GIẢM -30%
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h3 className="font-semibold text-[16px] leading-snug mb-2">
          Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2Đ)
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 line-through text-[14px]">
            13.650.000đ
          </span>

          <span className="text-red-600 font-semibold text-[16px]">
            2.590.000 đ
          </span>
        </div>

        {/* Info */}
        <div className="text-gray-500 text-[12px] space-y-1 mb-3">
          <p>Mã Tour: 123456789</p>
          <p>Ngày Khởi Hành: 22/07/2024</p>
          <p>Thời Gian: 10 Ngày 9 Đêm</p>
        </div>

        {/* Rating + seat */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 text-yellow-400 text-[14px]">
            ★★★★★
            <span className="text-gray-500 text-[12px]">(5)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[12px] text-gray-500">
              Số chỗ còn:
            </span>

            <span className="bg-red-500 text-white text-[12px] px-2 py-1 rounded-md">
              10
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}