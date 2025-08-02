import React, { useState } from 'react'

const users = [
  {
    id: 'USR001',
    name: 'Ali Raza',
    email: 'ali.raza@example.com',
    phoneNumber: '+92-300-1234567',
  },
  {
    id: 'USR002',
    name: 'Fatima Noor',
    email: 'fatima.noor@example.com',
    phoneNumber: '+92-321-7654321',
  },
  {
    id: 'USR003',
    name: 'Usman Tariq',
    email: 'usman.tariq@example.com',
    phoneNumber: '+92-333-9876543',
  },
  {
    id: 'USR004',
    name: 'Ayesha Khan',
    email: 'ayesha.khan@example.com',
    phoneNumber: '+92-345-1122334',
  },
  {
    id: 'USR005',
    name: 'Hamza Ali',
    email: 'hamza.ali@example.com',
    phoneNumber: '+92-301-5566778',
  }
];


export default function User() {



      return (
        <div className="max-w-7xl mx-auto px-4 py-6 relative">
          <h2 className="text-2xl font-bold mb-6">User List</h2>
    
          <div className={`overflow-x-auto
           
            `} >
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden ">
              <thead className="bg-gray-800 text-white">
                <tr>

                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className=" hover:bg-gray-100 transition"
                  >

                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">Rs. {user.phoneNumber}</td>
                    <td className="py-3 px-4 space-x-2">
                      <button  className="border-1 px-2 hover:bg-red-600 hover:text-white rounded hover:py-1">
                        Block
                      </button>

                    </td>
                  </tr>
                  
                ))}
                
              </tbody>
            </table>
          </div>
    

        </div>
      );
}
