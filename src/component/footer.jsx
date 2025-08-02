import React from 'react'

export default function Footer() {
  return (
<footer className="text-gray-600 body-font bg-orange-50 ">
 
  <div className="">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 — Furniro
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-3">
      <i className='fa-brands fa-x-twitter '></i>
      <i className='fa-brands fa-facebook '></i>
      <i className='fa-brands fa-tiktok '></i>
      <i className='fa-brands fa-youtube '></i>
      </span>
    </div>
  </div>
</footer>
  )
}
