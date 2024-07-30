import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import { IoIosMenu } from 'react-icons/io'

export default function Header() {
  return (
    <header>
        <div className='max-w-7xl mx-auto flex items-center justify-between py-3 px-6'>
            <div className='flex items-center'>
                <Image
                src={logo}
                alt='stock predictor logo'
                height={96}
                width={96}
                className='rounded-lg'
                />
                <div className='font-bold text-xl tracking-tight'>Predictor</div>
            </div>
            <div>
                <IoIosMenu className='h-12 w-8 md:hidden'/>
                <nav className="hidden md:flex gap-6 text-black/60 items-center">            
                <a href="">Features</a>              
                <a href="">Customers</a>                
                <a href="">Help</a>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for free</button>
                </nav>
            </div>
        </div>
    </header>
  )
}

