import React from 'react'
import '../Styles/Styles.css'
import { FaStar } from "react-icons/fa6";


export interface CustomerReviewElementProps{
    id: number,
    name: string,
    content:string,
    image: string,
    rating: number,
   
}


const CustomerReviewElement:React.FC<CustomerReviewElementProps>=({id,name,content,image,rating})=> {
  return (
      <>
          {/* customer-review */}
          <div key={id} className='w-2/6 bg-[#F1EFFD] rounded-3xl p-6 max-md:w-full max-lg:w-full' >
              {/* stars */}
              <div className='text-[#FEC430] flex pb-4'>
                  {[...Array(rating)].map((_,index)=>(
                  
                  <FaStar key={index}/>
                 ))}
                  
              </div>
              {/* stars */}
              
              {/* customer */}
              <div  className='flex gap-2'>
                  {/* customer-img */}                
                      <img src={image} alt='customer-image'  className='rounded-full w-10 h-10'/>
                  {/* customer-img */}
                  <h3 className='main-font font-black text-[24px] text-[#191919] max-md:text-[20px]'>{name}</h3>               
              </div>
              {/* customer */}

              {/* review */}
              <div className='pt-4'>
                  <p className='main-font font-[400] text-[18px] text-[#4C4C4C] max-md:text-[17px]'>{content }</p>
              </div>
              {/* review */}

              
          </div>
          {/* customer-review */}

      </>
  )
}

export default CustomerReviewElement
