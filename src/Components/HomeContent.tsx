import React from 'react'
import '../Styles/Styles.css'
import '../Styles/HomeContent.css'
import mouse from '../assets/Mouse.svg'
import arrowr from '../assets/arrowr.png'
import arrowl from '../assets/arrowl .png'


const HomeContent:React.FC=()=> {
  return (
    <>
      {/* home-content */}
      <div className='home-content  max-sm:w-full max-md:w-full max-lg:w-5/6 max-xl:w-4/6 mt-50'>
        <h2
          className='main-font main-shadow text-white tracking-[-2%] font-black text-[68px] text-center w-full  p-2 max-sm:text-[40px]'>
          سافر معنا إلى العالم
        </h2>
        <p
          className='main-font main-shadow font-medium text-[24px] tracking-[-2%] text-white text-center w-full max-sm:text-[20px]'>
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان
وبخدمات مخصصة لك ولعائلتك
        </p>
        


        <div className='relative'>

          {/* button */}
        <div className='text-center mt-10'>
           <button
          className='cursor-pointer relative main-background main-font main-shadow font-bold text-[18px] w-2/7 p-2 mb-14  rounded-lg  max-md:w-3/4'>
            <span>احجز الآن</span>
            <img src={arrowl} className='absolute top-2 left-5 max-md:left-15  h-8  w-8 p-1'/>
          {/* <IoIosArrowDropleftCircle  /> */}
        </button>
        </div>
        {/*== button ==*/}

        {/* arrowr */}
        <div className='arrowr main-shadow '>
          <img src={arrowr} className='absolute left-30 top-0  p-6 w-2/8 max-md:w-2/8 max-md:p-2 max-md:left-0 max-md:top-10'/>
        </div>
        {/*== arrowr ==*/}

        {/* follow */}
        <div className=' text-center mb-50'>
          <p className='main-font main-shadow text-white text-[20px] font-bold'>تابع للأسفل</p>
          <div className='w-full'><img src={mouse} className='m-auto' /></div>
        </div>
        {/*== follow ==*/}

        </div>

       

      </div>
      {/*== home-content ==*/}
    </>
  )
}

export default HomeContent

