import React, { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/product/products`
        );
        const result = await response.json();
        setProducts(result.data || []);
        console.log("✅ Products:", result.data);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/product/delete-product/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (response.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        console.log("🗑️ Product deleted:", result.data);
      } else {
        console.error("❌ Failed to delete:", result.error);
      }
    } catch (error) {
      console.error("❌ Error deleting product:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        📦 Product Table
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-bold text-left">Image</th>
              <th className="px-6 py-4 font-bold text-left">Title</th>
              <th className="px-6 py-4 font-bold text-left">Price (₹)</th>
              <th className="px-6 py-4 font-bold text-left">Date & Time</th>
              <th className="px-6 py-4 font-bold text-left">Action</th>
              <th className="px-6 py-4 font-bold text-left">Remove Product</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {products.map((product, index) => (
              <tr
                key={product._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-32 h-32 object-contain rounded-md border mx-auto"
                  />
                </td>
                <td className="px-6 py-4">{product.title}</td>
                <td className="px-6 py-4">{product.price?.toLocaleString()} ₹</td>
                <td className="px-6 py-4">
                  {new Date(product.addedAt).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Product
                  </a>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="inline-block bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
