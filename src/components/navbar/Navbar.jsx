import React, {useState}from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <Link to='/'>
        <h1 className='w-full text-3xl font-bold text-black'>Swift Mart</h1>
      </Link>

    <ul className='hidden md:flex'>
      <Link to='/'>
      <li className='p-4'>Home</li>
      </Link>
      <Link to='/products'>
      <li className='p-4'>Products</li>
      </Link>
      <Link to='/about'>
      <li className='p-4'>About</li>
      </Link>
      <Link to='/contact'>
      <li className='p-4'>Contact</li>
      </Link><Link to='/about'>
      <li className='p-4'>Login</li>
      </Link>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

    </div>
    <div className={nav ? 'fixed left-0 top-0 w-[70%] border-r h-full border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <Link to='/'>
      <h1 className='w-full text-3xl font-bold text-black m-4'>Swift Mart</h1>
      </Link>
      <ul className='p-4 uppercase'>
        <Link to='/'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        </Link>
        <Link to='/products'>
        <li className='p-4 border-b border-gray-600'>products</li>
        </Link>
        <Link to='/about'>
        <li className='p-4 border-b border-gray-600'>About</li>
        </Link>
        <Link to='/contact'>
        <li className='p-4 border-b border-gray-600'>Contact</li>
        </Link>
        <Link to='/about'>
      <li className='p-4 border-b border-gray-600'>Login</li>
      </Link>
      </ul>
    </div>
  </div>
  )
}

export default Navbar