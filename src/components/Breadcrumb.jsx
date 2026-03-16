export default function Breadcrumb() {
  return (
    <section className="relative w-full h-[253px]">

      {/* Background Image */}
      <img
        src="/tour-banner.jpg"
        alt="Tour banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-600/40"></div>

      {/* Content */}
      <div className="relative max-w-[1184px] mx-auto h-full flex flex-col justify-center px-6 text-white">

        {/* Title */}
        <h1 className="text-[32px] font-medium mb-2">
          Tour Nước Ngoài
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-4 text-[16px]">

          <span className="cursor-pointer hover:underline">
            Trang Chủ
          </span>

          <span>»</span>

          <span className="opacity-90">
            Tour Nước Ngoài
          </span>

        </div>

      </div>

    </section>
  );
}