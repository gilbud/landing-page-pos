import { useState } from 'react'
import { MdOutlineDensityMedium } from 'react-icons/md'

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Fitur', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Contact Us', link: '/' },
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'
        >
          POS-UMKM
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden p-1 rounded-md bg-gray-300 active:bg-gray-600'
        >
          <MdOutlineDensityMedium />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className='md:ml-4 px-4 py-2 text-xl border border-blue-500 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 transition-all'>
            Masuk
          </button>
          <button className='ml-8 text-xl rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-700 '>
            Daftar Gratis
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
