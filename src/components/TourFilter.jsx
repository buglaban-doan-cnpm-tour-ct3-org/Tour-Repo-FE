export default function TourFilter() {
  return (
    <div className="w-[279px] border border-gray-200 rounded-[16px] p-[16px] flex flex-col gap-[24px] bg-white">

      {/* Title */}
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-semibold text-purple-700">
          Bộ Lọc
        </h3>

        <span className="text-purple-700">🔎</span>
      </div>

      {/* Điểm đi */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] text-gray-500">
          Điểm đi
        </label>

        <select className="h-[40px] border border-gray-300 rounded-md px-3 text-[14px]">
          <option>Hà Nội</option>
          <option>TP Hồ Chí Minh</option>
        </select>
      </div>

      {/* Điểm đến */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] text-gray-500">
          Điểm đến
        </label>

        <select className="h-[40px] border border-gray-300 rounded-md px-3 text-[14px]">
          <option>-- Chọn điểm đến --</option>
          <option>Nhật Bản</option>
          <option>Hàn Quốc</option>
        </select>
      </div>

      {/* Ngày khởi hành */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] text-gray-500">
          Ngày khởi hành
        </label>

        <input
          type="date"
          className="h-[40px] border border-gray-300 rounded-md px-3 text-[14px]"
        />
      </div>

      {/* Số lượng hành khách */}
      <div className="flex flex-col gap-2">

        <label className="text-[14px] text-gray-500">
          Số Lượng Hành Khách
        </label>

        <input
          type="number"
          placeholder="Người lớn"
          className="h-[40px] border border-gray-300 rounded-md px-3"
        />

        <input
          type="number"
          placeholder="Trẻ em"
          className="h-[40px] border border-gray-300 rounded-md px-3"
        />

        <input
          type="number"
          placeholder="Em bé"
          className="h-[40px] border border-gray-300 rounded-md px-3"
        />

      </div>

      {/* Mức giá */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] text-gray-500">
          Mức giá
        </label>

        <select className="h-[40px] border border-gray-300 rounded-md px-3 text-[14px]">
          <option>-- Chọn khoảng giá --</option>
          <option>Dưới 5 triệu</option>
          <option>5 - 10 triệu</option>
          <option>10 - 20 triệu</option>
        </select>
      </div>

      {/* Button */}
      <button className="h-[44px] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 text-white font-medium">
        Áp Dụng
      </button>

    </div>
  );
}