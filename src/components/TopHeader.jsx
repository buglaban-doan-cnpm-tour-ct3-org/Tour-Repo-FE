import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="w-full h-[40px] bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-sm flex items-center">
      
      <div className="max-w-[1200px] mx-auto w-full px-6 flex justify-end items-center gap-8">

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-xs" />
          <span>0123.456.789</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-xs" />
          <span>contact@28travel.com</span>
        </div>

        {/* Address */}
        <div className="hidden md:flex items-center gap-2">
          <FaMapMarkerAlt className="text-xs" />
          <span>Số 123, đường ABC, thành phố XYZ</span>
        </div>

      </div>

    </div>
  );
}