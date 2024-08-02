import React from 'react'

export default function PredictorHero() {
  return (
    <section className='max-w-7xl py-3 px-6 mx-auto'>
        <div className='flex flex-col justify-center items-center gap-4 '>
            <h1 className='tracking-tighter font-bold text-4xl md:text-5xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-3 py-3'>Welcome to Predictor</h1>
            <p className='lg:w-[720px] text-xl text-[#010D3E] tracking-tight mt-3 py-1 text-center'>Our AI-powered platform provides accurate and timely stock predictions to help you make informed investment decisions. Start your journey towards smarter trading today.</p>
            <h2 className='text-xl text-[#010D3E] tracking-tight'>Please write the stock you want to predict.</h2>
            <form action="" className='flex gap-2'>
                <input 
                type="text" 
                className='rounded-lg h-9 w-32 px-3 py-1 text-center'
                placeholder='Stock Name'
                required
                />
                <button type='submit' className='py-1 px-3 rounded-md bg-black text-white text-lg'>Predict</button>
            </form>
        </div>
    </section>
  )
}
