import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import '../Styles/Styles.css'
import { Link } from 'react-router-dom'
import { BsYoutube } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import Sidebarlink from './Sidebarlink';


const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false);

    const handleMenuIconChane = () => {
        setMenuIcon((prev)=>!prev);
    }
    
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
          <div dir='rtl' className={`${scrolled ? "navbar-scrolled":""} fixed  z-10   flex w-full p-6 justify-between max-sm:p-4 max-w-md:relative`}>
              
              <div className='main-font text-white font-black text-[30px] max-sm:text-[26px] '>
                  <span className='relative'>رحلاتي <span className='main-color absolute right-22 max-sm:right-20'>.</span></span> 
              </div>

              <div
                  className=
                  'navbar flex gap-8 text-center main-font text-white font-blod text-[20px] max-sm:text-[11px] '
              >
                  <Link to="all-trips" className=' '>الرحلات</Link>
                  <Link to="our-services" className=''>الخدمات</Link>
                  <Link to="prices" className=''>الأسعار</Link>
                  <Link to="" className=''>آراء العملاء</Link>
                  <Link to="" className=''> اتصل بنا</Link>                               
              </div>
              
              {/* youtube-part */}
              <div className=''>
                 <div className='youtube flex gap-2 main-font text-center text-white font-blod text-[20px] max-sm:text-[0px]'>
                  <p className=''>يوتيوب</p>
                      <BsYoutube className=' h-8 w-6 max-sm:h-6 ' />
                 </div>
                  
                  {/* menu-icon */}
              <div>
                  <IoMdMenu
                      onClick={handleMenuIconChane}
                          className='menu-icon bg-white w-8 h-6 rounded-md' />  
              </div>
                  {/*== menu-icon ==*/}
          
              </div>
              {/*== youtube-part ==*/}
              
              {menuIcon && <Sidebarlink />}              
              
          </div>
          {/*== Navbar-section ==*/}
          
           
      </>
  )
}

export default Navbar
