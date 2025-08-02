import React, { useState } from "react";

const ManageProducts = () => {
  const products = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fVGe_do2ll9b7n_dMP7QDLEPZFzKesm7Wg&s",
    name: "White Shirt",
    description: "Good quality shirt",
    price: 2000,
    id: "fsds21534"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fVGe_do2ll9b7n_dMP7QDLEPZFzKesm7Wg&s",
    name: "White Shirt",
    description: "Good quality shirt",
    price: 2000,
    id: "fsds61534"
  }
];

  const [showUpdateBox, setShowUpdateBox] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 relative">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>

      <div className={`overflow-x-auto
        ${showUpdateBox?"blur-sm":""}
        `} >
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden ">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className=" hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded border"
                    />
                  ) : (
                    <span className="text-gray-500">No Image</span>
                  )}
                </td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.description}</td>
                <td className="py-3 px-4">Rs. {product.price}</td>
                <td className="py-3 px-4 space-x-2">
                  <button onClick={() => setShowUpdateBox(!showUpdateBox)} className="border-1 px-2 hover:bg-green-600 hover:text-white rounded hover:py-1">
                    Edit
                  </button>
                  <button className="border-1 px-2 hover:bg-red-600 hover:text-white rounded hover:py-1">
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
            
          </tbody>
        </table>
      </div>

      {/* Dummy Modal UI */}
      <div
  className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[400px] w-[90%] p-6 bg-orange-50 rounded shadow transition-all duration-500 ease-in-out
    ${showUpdateBox ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
  `}
>
        <h4 className="text-xl font-semibold mb-4">Update Product</h4>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Product Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Product Description"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Price</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded"
              placeholder="Price"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Image URL</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Image URL"
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              className="border-1 px-2 hover:bg-red-600 hover:text-white rounded hover:py-1"
              onClick={() => setShowUpdateBox(!showUpdateBox)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="border-1 px-2 hover:bg-green-600 hover:text-white rounded hover:py-1"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageProducts;
