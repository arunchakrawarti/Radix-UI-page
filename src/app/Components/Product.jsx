import React from 'react'

const Product = () => {
  return (
    <div className='text-center bg-[#e5f6ff] h-[500px] pt-33'>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-[18px] leading-[20px]">
  Product Strategy Consulting Services
</h1>

       <p className='text-[35px] leading-[50px] font-bold mt-5 mx-auto mb-5 text-4xl'>Accelerate Software Product  Portfolia to build New <br/> Value Proposition</p>
       <div>
        <p className='leading-[30px]'>Validate product ideas early-on. Invest in deep R&D to fast-track innovation. Deliver Lasting value by minmizing <br/> product failure.</p>
       </div>
       <div>
         <p className='mt-9'>
            <a className=' bg-blue-600 text-white hover:bg-gray-600 transform hover:scale-105 transition text-sm px-7 py-3 rounded-md ' href="">Get product Dev Direction ➜ </a>
         </p>
        
       </div>
    </div>
  )
}

export default Product
