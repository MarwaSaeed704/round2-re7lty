import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import { BsYoutube } from "react-icons/bs";
import logoImg from '../assets/رحلاتي ..png'
import '../Styles/Styles.css'
import '../Styles/Navbar.css'
import { IoClose } from "react-icons/io5";

interface SidebarlinkProps{
    onClose:()=>void
}

const Sidebarlink:React.FC<SidebarlinkProps>=({onClose})=> {
  return (
      <>
      <nav className='sidebar flex  flex-col gap-6 pb-8 text-center main-font text-white font-blod text-[20px]'>
         
        <div dir='ltr'> <IoClose className='w-8 h-8' onClick={onClose}/></div>
              
                  <Link to='/#home' onClick={onClose}>
                       <img src={logoImg} alt='logo img' className='w-30 m-auto' />
                  </Link>
               <Link to="/#all-trips" className=' ' onClick={onClose}>الرحلات</Link>
                <Link to="/#our-services" className='' onClick={onClose}>الخدمات</Link>
                <Link to="/#prices" className='' onClick={onClose}>الأسعار</Link>
                <Link to="/#customer-review" className='' onClick={onClose}>آراء العملاء</Link>
              <Link to="/#contact-us" className='' onClick={onClose}> اتصل بنا</Link>  
             <Link to="#" onClick={onClose}> <BsYoutube className=' h-8 w-6 m-auto' /> </Link>
        
          </nav>
      </>
  )
}

export default Sidebarlink
