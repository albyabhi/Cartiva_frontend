import { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import ProductTable from "./components/ProductTable";

function App() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state
  const [view, setView] = useState("add");


  useEffect(() => {
    const stored = localStorage.getItem("admin_token");
    if (stored) {
      const { token, expiry } = JSON.parse(stored);
      if (token === "admin" && Date.now() < expiry) {
        setMessage("Already logged in");
        setLoggedIn(true);
      } else {
        localStorage.removeItem("admin_token"); // expired
      }
    }
    setLoading(false); // Set loading to false once the check is done
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");

    if (!password) {
      setMessage("Please enter a password.");
      return;
    }

    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      const expiry = Date.now() + 10 * 60 * 1000; // current time + 10 minutes
      localStorage.setItem(
        "admin_token",
        JSON.stringify({ token: "admin", expiry })
      );
      setLoggedIn(true);
    } else {
      setMessage("Failed: Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setLoggedIn(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {loggedIn ? (
        <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100 space-y-6">
          {/* Toggle Buttons */}
          <div className="fixed top-0 left-0 right-0 flex items-center justify-center space-x-4  z-10 p-4">
            <button
              onClick={() => setView("add")}
              className={`px-4 py-2 rounded-lg ${
                view === "add"
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
            >
              Add Product
            </button>
            <button
              onClick={() => setView("table")}
              className={`px-4 py-2 rounded-lg ${
                view === "table"
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
            >
              Product Table
            </button>
          </div>

          {/* Conditional Component Rendering */}
          <div className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
  {view === "add" ? <AddProduct /> : <ProductTable />}
</div>


          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-64 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-80 space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              ADMIN
            </h2>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <p className="text-center text-red-500 text-sm">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
