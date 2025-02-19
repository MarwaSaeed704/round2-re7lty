import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import '../Styles/Styles.css'
import { Link } from 'react-router-dom'
import { BsYoutube } from "react-icons/bs";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])
  return (
      <>
          {/* Navbar-section */}
          {/* ' fixed  z-10   flex w-full p-4 justify-between max-sm:p-6 ' */}
          <div dir='rtl' className={`${scrolled ? "navbar-scrolled":""} fixed  z-10   flex w-full p-4 justify-between max-sm:p-6`}>
              
              <div className='main-font text-white font-black text-[30px] max-sm:text-[16px] max-sm:font-blod'>
                  <span className=''>رحلاتي <span className='main-color'>.</span></span>
              </div>

              <div className='grid grid-rows-1 grid-cols-5 gap-4 text-center main-font text-white font-blod text-[20px] max-sm:text-[12px]'>
                  <Link to="all-trips" className='main-shadow '>الرحلات</Link>
                  <Link to="our-services" className='main-shadow'>الخدمات</Link>
                  <Link to="prices" className='main-shadow'>الأسعار</Link>
                  <Link to="" className='main-shadow'>آراء العملاء</Link>
                  <Link to="" className='main-shadow'> اتصل بنا</Link>  
              </div>

              <div className='flex gap-2 main-font text-center text-white font-blod text-[20px] max-sm:text-[0px]'>
                  <p className=''>يوتيوب</p>
                  <BsYoutube className=' h-8 w-6'/>
              </div>


              
              
          </div>
           {/*== Navbar-section ==*/}
      </>
  )
}

export default Navbar
