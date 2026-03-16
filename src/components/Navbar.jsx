export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">
          TourBooking
        </h1>

        <ul className="flex gap-6 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Tours</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>

      </div>
    </nav>
  )
}