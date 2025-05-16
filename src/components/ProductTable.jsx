import React, { useEffect, useState } from "react";

const PRODUCTS_PER_PAGE = 20;

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

        // If deleting leaves current page empty, go back one page if possible
        const lastPage = Math.ceil((products.length - 1) / PRODUCTS_PER_PAGE);
        if (currentPage > lastPage) {
          setCurrentPage(lastPage);
        }
      } else {
        console.error("❌ Failed to delete:", result.error);
      }
    } catch (error) {
      console.error("❌ Error deleting product:", error);
    }
  };

  // Calculate pagination variables
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="p-4 md:p-6 bg-white shadow-md rounded-lg mx-auto max-w-7xl">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">
      📦 Product Table
    </h2>

    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm text-gray-700">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 md:px-6 md:py-4 font-bold text-left">
              Image
            </th>
            <th className="px-3 py-2 md:px-6 md:py-4 font-bold text-left">
              Title
            </th>
            <th className="px-3 py-2 md:px-6 md:py-4 font-bold text-left">
              Price (₹)
            </th>
            <th className="px-3 py-2 md:px-6 md:py-4 font-bold text-left hidden md:table-cell">
              Date &amp; Time
            </th>
            <th className="px-3 py-2 md:px-6 md:py-4 font-bold text-left hidden md:table-cell">
              Status
            </th>
            <th className="px-3 py-2 md:px-6 md:py-4 font-bold text-left">
              Remove Product
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <tr
                key={product._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-3 py-2 md:px-6 md:py-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 md:w-32 md:h-32 object-contain rounded-md border mx-auto"
                  />
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs md:text-sm"
                  >
                    {product.title}
                  </a>
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4 text-xs md:text-sm">
                  {product.price?.toLocaleString()} ₹
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4 hidden md:table-cell text-xs md:text-sm">
                  {new Date(product.addedAt).toLocaleString()}
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4 hidden md:table-cell text-xs md:text-sm">
                  {product.shareStatus}
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4 space-x-1 md:space-x-2">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="inline-block bg-red-600 text-white px-2 py-1 md:px-3 md:py-2 rounded hover:bg-red-700 transition text-xs md:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-6 text-gray-400 text-xs md:text-sm">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* Pagination Controls */}
    {products.length > PRODUCTS_PER_PAGE && (
      <div className="mt-4 flex justify-center space-x-2 md:space-x-4">
        <button
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className={`px-2 py-1 md:px-4 md:py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } text-xs md:text-sm`}
        >
          Prev
        </button>
        <span className="px-2 py-1 md:px-4 md:py-2 text-gray-700 text-xs md:text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-2 py-1 md:px-4 md:py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } text-xs md:text-sm`}
        >
          Next
        </button>
      </div>
    )}
  </div>
  );
};

export default ProductTable;
