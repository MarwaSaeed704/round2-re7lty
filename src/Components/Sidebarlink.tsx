import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import { BsYoutube } from "react-icons/bs";
import '../Styles/Styles.css'
import '../Styles/Navbar.css'

// interface SidebarlinkProps{
//     onClose:()=>void
// }

const Sidebarlink:React.FC=()=> {
  return (
      <>
          <nav className='navbar-scrolled sidebar flex  flex-col gap-8 p-2  text-center main-font text-white font-blod text-[20px]'>
               <Link to="/#all-trips" className=' '>الرحلات</Link>
                <Link to="/#our-services" className=''>الخدمات</Link>
                <Link to="/#prices" className=''>الأسعار</Link>
                <Link to="/#customer-review" className=''>آراء العملاء</Link>
              <Link to="/#contact-us" className=''> اتصل بنا</Link>  
              <Link to =""><BsYoutube className=' h-8 w-6 m-auto'/></Link>
          </nav>
      </>
  )
}

export default Sidebarlink
