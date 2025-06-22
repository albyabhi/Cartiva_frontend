import React, { useState } from "react";

const AddProduct = () => {
  const [url, setUrl] = useState("");
  const [product, setProduct] = useState(null);
  const [buttonText , setButtontext] =  useState("Add Product")

  const onSubmit = async () => {
  if (!url.trim()) {
    alert("Please enter a URL");
    return;
  }

  setButtontext("Loading..."); // Set loading text before request

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/product/add-product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Product added successfully!");
      setUrl(""); // Reset input
      setProduct(data.data);
    } else {
      alert(`Error: ${data.message || "Failed to add product"}`);
    }
  } catch (error) {
    console.error("Error adding product:", error);
    alert("Network error. Please try again later.");
  } finally {
    setButtontext("Add Product"); // Always reset button text
  }
};


  return (
    <div className="flex flex-col items-center p-6 ">
      <p className="text-xl font-semibold mb-4">Add Product</p>
      <input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-3 mb-4 w-72 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSubmit}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        {buttonText}
      </button>
      {product && (
        <div className="mt-6 p-4 bg-white rounded shadow-md w-72">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded mb-2"
          />
          <p className="font-semibold">{product.title}</p>
          <p className="text-gray-600">Price: ₹{product.price}</p>
          {product.discount > 0 && (
            <p className="text-green-600">Discount: {product.discount}%</p>
          )}
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 inline-block"
          >
            View Product
          </a>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
