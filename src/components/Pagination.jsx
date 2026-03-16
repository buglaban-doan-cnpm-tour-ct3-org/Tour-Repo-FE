export default function Pagination() {
  return (
    <div className="w-full flex justify-end mt-10">

      <div className="flex items-center gap-3">

        {/* Page 1 */}
        <button className="w-[40px] h-[40px] rounded-lg bg-[#4502C7] text-white text-[14px]">
          1
        </button>

        {/* Page 2 */}
        <button className="w-[40px] h-[40px] rounded-lg border text-gray-600">
          2
        </button>

        {/* Page 3 */}
        <button className="w-[40px] h-[40px] rounded-lg border text-gray-600">
          3
        </button>

        {/* Next */}
        <button className="w-[40px] h-[40px] rounded-lg border text-gray-600">
          ›
        </button>

      </div>

    </div>
  )
}