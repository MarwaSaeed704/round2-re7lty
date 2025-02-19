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
      <div className='home-content mt-50'>
        <h2
          className='main-font main-shadow text-white tracking-[-2%] font-black text-[68px] text-center w-full  p-2 max-sm:text-[40px]'>
          سافر معنا إلى العالم
        </h2>
        <p
          className='main-font main-shadow font-medium text-[24px] tracking-[-2%] text-white text-center w-full max-sm:text-[20px]'>
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان
وبخدمات مخصصة لك ولعائلتك
        </p>

       {/* button */}
        <div className='text-center mt-10'>
           <button
          className='relative cursor-pointer main-background main-font main-shadow font-bold text-[18px] w-1/4 p-2  rounded-lg max-sm:w-3/4'>
            <span>احجز الآن</span>
            <img src={arrowl} className='absolute top-2 left-4  h-8  w-8 p-1'/>
          {/* <IoIosArrowDropleftCircle  /> */}
        </button>
        </div>
        {/*== button ==*/}

        {/* arrowr */}
        <div className='w-1/8 main-shadow  mr-100 max-sm:mr-60 max-sm:w-2/8 '>
          <img src={arrowr} />
        </div>
        {/*== arrowr ==*/}

        {/* follow */}
        <div className=' text-center mb-50'>
          <p className='main-font main-shadow text-white text-[20px] font-bold'>تابع للأسفل</p>
          <div className='w-full mr-75 max-sm:mr-20'><img src={mouse} className='' /></div>
        </div>
        {/*== follow ==*/}

      </div>
      {/*== home-content ==*/}
    </>
  )
}

export default HomeContent

