import React from 'react'

export default function Order() {
const orders = [
  {
    id: 'ORD001',
    name: 'Ali Raza',
    totalPrice: 7800,
    products: [
      {
        name: 'Leather Wallet',
        description: 'Brown handmade wallet',
        quantity: 1,
        price: 2500,
        image: 'https://via.placeholder.com/100x100?text=Wallet'
      },
      {
        name: 'Crystal Bag',
        description: 'Elegant evening crystal bag',
        quantity: 2,
        price: 2650,
        image: 'https://via.placeholder.com/100x100?text=Bag'
      }
    ]
  },
  {
    id: 'ORD002',
    name: 'Fatima Noor',
    totalPrice: 4200,
    products: [
      {
        name: 'Pearl Handbag',
        description: 'White pearl studded handbag',
        quantity: 1,
        price: 4200,
        image: 'https://via.placeholder.com/100x100?text=Pearl'
      }
    ]
  }
];


  return (
    <div className="container mx-auto flex flex-col gap-12 p-4">
           <h2 className="text-2xl font-bold mb-3">Order List</h2>
     
      {orders.length === 0 ? (
        <p className="text-red-600 text-2xl font-bold">No Orders Available</p>
      ) : (
        orders.map((order, index) => (
          <div className="border p-4 mb-6 bg-gray-100 rounded shadow-sm" key={index}>
            <div className="flex items-center justify-around bg-gray-900 text-white rounded py-2">
              <i className="fa-solid fa-user text-lg">
                {" "}
                {order.name}{" "}
              </i>
              <p className="text-xl">
                <span className="font-semibold">Order ID: </span>
                {order.id}
              </p>
            </div>
            <hr className="my-4" />
            {order.products.map((product, idx) => (
              <div
                className="flex flex-col md:flex-row items-center justify-around mb-4 gap-4"
                key={idx}
              >
                <div className="w-32">
                  <img
                    src={product.image}
                    className="w-full h-auto rounded"
                    alt={product.name}
                  />
                </div>
                <div className="md:w-1/3 text-center md:text-left">
                  <p className="text-lg font-bold mb-1">{product.name}</p>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="flex items-center justify-center gap-4 md:w-1/4">
                  <i className="fa-solid fa-xmark text-red-600 text-2xl"></i>
                  <p className="text-lg font-bold">{product.quantity}</p>
                </div>
                <div className="text-lg font-bold md:w-1/5 text-center">
                  Rs. {product.price}
                </div>
              </div>
            ))}
            <hr className="my-4" />
            <div className="text-right font-bold text-lg">
              Total Price: Rs. {order.totalPrice}
            </div>
            <hr className="my-4" />
            <div className=" flex justify-around">
            <button className='border-1 px-2 hover:bg-red-600 hover:text-white rounded hover:py-1'>Delete</button>
            <button className='border-1 px-2 hover:bg-green-600 hover:text-white rounded hover:py-1'>Proceed</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
