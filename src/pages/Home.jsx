import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Safari Booking</h1>
      <p className="text-gray-600 mb-4">Choose your login type</p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Login
        </Link>
      </div>
    </div>
  );
}
