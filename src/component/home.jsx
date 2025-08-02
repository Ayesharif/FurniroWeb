import React from 'react'

export default function Home() {
  return (
    <div className="w-screen ">
      <div className="h-[600px] relative flex items-center accent-orange-50">
        <img
          className="w-full h-full object-fill absolute top-0 left-0 "
          src="https://img.lovepik.com/bg/20240429/Luxury-Contemporary-Interior-Minimalistic-3D-Render-with-Blank-Wooden-Poster_8465363_wh1200.jpg"
          alt="Simple chair interior design"
        />

        <form className="absolute right-1/8  top-1/2 -translate-y-1/2 md:w-[500px] w-2xs  flex flex-col gap-3  bg-orange-50 p-6 z-10 shadow-lg rounded">
          <p className='font-bold'>New Arrival</p>
          <p className='text-3xl'>Discover Our New Collection</p>
          <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quam.</p>

          <button className='w-full outline-2 hover:outline-offset-3 rounded hover:bg-stone-300 hover:text-white py-1 mt-2'>View Products</button>
        </form>
      </div>

      <div className='flex flex-col items-center gap-3 '>
        <h1 className='text-3xl mt-10'>Browse The range</h1>
        <i className='fa-solid fa-arrow-right text-3xl'></i>
      </div>
      <div className='flex w-full justify-around  p-2 py-20 bg-orange-50 overflow-x-auto gap-8 my-[50px] pl-5 snap-x scroll-smooth'>
        <div className='flex-none w-[300px]  snap-start'>
          <img src="https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1489056858868-F40GNXXO287KUY9527S4/quirky+modern+dining+room" className='w-full rounded shadow-md' alt="" />
          <p className='text-center mt-2 font-medium'>Dining</p>
        </div>

        <div className='flex-none w-[300px]  snap-start'>
          <img src="https://i.pinimg.com/564x/96/e7/a9/96e7a97e6247428df4e2ea3e1a1a20b5.jpg" className='w-full rounded shadow-md' alt="" />
          <p className='text-center mt-2 font-medium'>Living</p>
        </div>

        <div className='flex-none w-[300px]  snap-start'>
          <img src="https://jane-athome.com/wp-content/uploads/2022/07/brandon-architects-girls-bedroom-600x865.jpg" className='w-full rounded shadow-md' alt="" />
          <p className='text-center mt-2 font-medium'>Bedroom</p>
        </div>


      </div>

      <h1 className='text-center text-3xl'>Our Products</h1>
<section className="md:m-20 m-10 flex flex-wrap gap-10 md:justify-around items-center">
  <div className="md:w-[300px] w-full min-w-[250px] p-2 bg-gray-100 shadow-md hover:shadow-lg rounded-md transition-shadow duration-300">
    <img className="object-fill w-full" src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg" alt="" />
    <div className="p-2 flex flex-col gap-2">
      <p className="text-2xl font-bold">Velvet red Sofa</p>
      <p>Perfect softness and feel relax</p>
      <p>Rs 5000</p>
    </div>
    <button className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200">
      Add To Cart
    </button>
  </div>
  <div className="md:w-[300px] w-full min-w-[250px] p-2 bg-gray-100 shadow-md hover:shadow-lg rounded-md transition-shadow duration-300">
    <img className="object-fill w-full" src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg" alt="" />
    <div className="p-2 flex flex-col gap-2">
      <p className="text-2xl font-bold">Velvet red Sofa</p>
      <p>Perfect softness and feel relax</p>
      <p>Rs 5000</p>
    </div>
    <button className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200">
      Add To Cart
    </button>
  </div>
  <div className="md:w-[300px] w-full min-w-[250px] p-2 bg-gray-100 shadow-md hover:shadow-lg rounded-md transition-shadow duration-300">
    <img className="object-fill w-full" src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg" alt="" />
    <div className="p-2 flex flex-col gap-2">
      <p className="text-2xl font-bold">Velvet red Sofa</p>
      <p>Perfect softness and feel relax</p>
      <p>Rs 5000</p>
    </div>
    <button className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200">
      Add To Cart
    </button>
  </div>
  <div className="md:w-[300px] w-full min-w-[250px] p-2 bg-gray-100 shadow-md hover:shadow-lg rounded-md transition-shadow duration-300">
    <img className="object-fill w-full" src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg" alt="" />
    <div className="p-2 flex flex-col gap-2">
      <p className="text-2xl font-bold">Velvet red Sofa</p>
      <p>Perfect softness and feel relax</p>
      <p>Rs 5000</p>
    </div>
    <button className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200">
      Add To Cart
    </button>
  </div>
  <div className="md:w-[300px] w-full min-w-[250px] p-2 bg-gray-100 shadow-md hover:shadow-lg rounded-md transition-shadow duration-300">
    <img className="object-fill w-full" src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg" alt="" />
    <div className="p-2 flex flex-col gap-2">
      <p className="text-2xl font-bold">Velvet red Sofa</p>
      <p>Perfect softness and feel relax</p>
      <p>Rs 5000</p>
    </div>
    <button className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200">
      Add To Cart
    </button>
  </div>
  <div className="md:w-[300px] w-full min-w-[250px] p-2 bg-gray-100 shadow-md hover:shadow-lg rounded-md transition-shadow duration-300">
    <img className="object-fill w-full" src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg" alt="" />
    <div className="p-2 flex flex-col gap-2">
      <p className="text-2xl font-bold">Velvet red Sofa</p>
      <p>Perfect softness and feel relax</p>
      <p>Rs 5000</p>
    </div>
    <button className="w-full py-2 rounded text-black font-semibold hover:bg-orange-100 hover:text-orange-800 outline outline-1 outline-offset-2 outline-orange-600 transition-colors duration-200">
      Add To Cart
    </button>
  </div>


</section>


    </div>


  )
}
