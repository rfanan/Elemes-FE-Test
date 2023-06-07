import {  IconHome, IconRocket,IconBaselineDensityMedium } from '@tabler/icons-react'
import React, { useState } from 'react'
import logo from '../assets/asset/logo.png'
import { Button } from './Button'

export const Navbar = () => {
    
    const [menu, setMenu] = useState(false)


  return (
<header className="bg-white ">
      <nav className='py-5 px-4 md:px-20 w-full mx-auto'>
        <div className='flex justify-between items-center md:bg-fixed'>
            <img className='w-40  order-1 bg-cover' src={logo} alt="logo" />
      <div className='flex gap-x-2 order-3'>
      <Button className={`py-4`}>
                <span className='text-xs md:text-medium text-light_gray1'>
                Masuk
                </span>
            </Button>
      <Button className={`py-4 bg-primary_green`}>
                <span className='text-xs md:text-medium text-netral_white'>
                Daftar Sekarang
                </span>
            </Button>
      </div>
        <div className='order-2 hidden md:block text-light_gray1 text-medium font-medium'>
            <ul className='flex gap-x-10 items-end'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <div className='flex flex-col items-end justify-end'>
                    <div className='py-1 px-2 bg-red-600 rounded-full text-white text-center text-xs'>HOT</div>
                <li>
                    <a href="#">Promotion</a>
                </li>
                </div>
                <li>
                    <a href="#">Blogs</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </div>
        </div>
        <div className='fixed z-50 bottom-0 border-t-2 left-0 right-0 p-3 bg-netral_white  w-full md:hidden'>
            <ul className='flex text-light_gray1 text-lowest items-center justify-between px-6'>
                <li>
                    <div className='flex flex-col items-center justify-center'>
                    <IconHome/>
                    <p>Home</p>
                    </div>
                    </li>
                <li>
                    <div className='flex flex-col items-center justify-center'>
                    <IconRocket/>
                    <p>Promotion</p>
                    </div>
                    </li>
                <li>
                    <div onClick={()=> setMenu(!menu)} className='flex flex-col items-center justify-center'>
                    <IconBaselineDensityMedium/>
                    <p>Menu</p>
                    </div>
                    </li>
            </ul>
            <div className={`${menu?'block translate-y-0 ' : 'hidden'}  flex left-0 right-0 gap-y-5 flex-col px-4 absolute bottom-[70px] bg-netral_white border-t-2  w-full py-8`}>
                <div>
                    About Us
                </div>
                <div>
                    Blogs
                </div>
                <div>
                    Contacts Us
                </div>
            </div>
        </div>
      </nav>

    </header>
  )
}

