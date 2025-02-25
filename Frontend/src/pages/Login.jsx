import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <label className="block text-gray-700">Select Role:</label>
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button 
          className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          onClick={() => window.location.href = `/dashboard/${role}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
