export default function SortBar() {
  return (
    <div className="flex justify-between items-center mb-6">

      <div className="flex gap-6 text-sm">

        <button>Giá tăng dần</button>
        <button>Giá giảm dần</button>
        <button className="text-red-500">Khuyến Mãi Hot</button>
        <button>Xem Nhiều</button>

      </div>

      <div className="text-gray-500">
        Tất cả: 101 Tour
      </div>

    </div>
  );
}