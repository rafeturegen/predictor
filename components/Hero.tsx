import Image from 'next/image'
import React from 'react'
import heroImage from "@/public/hero.png"
import decreasing from "@/public/decreasing.png"
import increasing from "@/public/increasing.png"
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (

    <section className='max-w-7xl pt-8 pb-20 md:pt-16 md:pb-20 px-6 mx-auto bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE)] overflow-x-clip'>
        <div className='lg:flex items-center'>
            <div className=' md:w-[624px]'>
                <h1 className='w-[441px] md:w-[720px] tracking-tighter font-bold text-4xl md:text-5xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-3 py-3'>Your Ultimate Tool for Investment Success</h1>
                <p className='max-w-[529px] text-xl text-[#010D3E] tracking-tight mt-3 py-1'>Investing in the stock market doesn't have to be a gamble. Our AI-powered stock predictor analyzes vast amounts of data to deliver reliable predictions. Take the guesswork out of investing and start making informed decisions with our cutting-edge platform.</p>
                <div className='flex gap-2 mt-6'>
                    <button 
                    className="btn btn-primary"
                    >
                        Get for free
                    </button>
                    <div className='flex items-center'>
                        <button className='btn btn-text !pr-1'>
                            Learn More
                        </button>
                        <FaArrowRight className='h-3 w-4'/>
                    </div> 
                </div>
            </div>
            <div className='relative'>
                <Image
                src={heroImage}
                alt='increasing stocks graph'
                width={624}
                height={624}
                className='min-w-64 mt-8 md:mt-0'
                />
                <Image
                src={increasing}
                alt='increasing arrow'
                width={220}
                height={220}
                className='hidden lg:block lg:absolute -top-12 -right-12 '
                />
                <Image
                src={decreasing}
                alt='decreasing arrow'
                width={164}
                height={164}
                className='hidden lg:block lg:absolute bottom-0 -left-12 ' 
                />
            </div>
        </div>
    </section>
  )
}
