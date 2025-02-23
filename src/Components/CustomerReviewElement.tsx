import React from 'react'
import '../Styles/Styles.css'
import { FaStar } from "react-icons/fa6";

interface CustomerReviewElementProps{
    customerImage: string,
    customerName: string,
    customerReview:string,
}


const CustomerReviewElement:React.FC<CustomerReviewElementProps>=({customerImage, customerName,customerReview})=> {
  return (
      <>
          {/* customer-review */}
          <div className='w-2/6 bg-[#F1EFFD] rounded-3xl p-6 max-md:w-full max-lg:w-full' >
              {/* stars */}
              <div className='text-[#FEC430] flex pb-4'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
              </div>
              {/* stars */}
              
              {/* customer */}
              <div className='flex gap-2'>
                  {/* customer-img */}                
                      <img src={customerImage} alt='customer-image'  className='rounded-full w-10 h-10'/>
                  {/* customer-img */}
                  <h3 className='main-font font-black text-[24px] text-[#191919] max-md:text-[20px]'>{customerName}</h3>               
              </div>
              {/* customer */}

              {/* review */}
              <div className='pt-4'>
                  <p className='main-font font-[400] text-[18px] text-[#4C4C4C] max-md:text-[17px]'>{customerReview }</p>
              </div>
              {/* review */}

              
          </div>
          {/* customer-review */}
      </>
  )
}

export default CustomerReviewElement
