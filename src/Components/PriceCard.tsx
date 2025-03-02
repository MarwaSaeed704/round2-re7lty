import React from 'react'
import { FaCheck } from "react-icons/fa6";
import '../Styles/Styles.css'
import arrowl from '../assets/arrowl .png'

export interface PriceCardProps{
    id:number,
    price: string,
    type: string,
    description: string,
    features: string[],
    isActive: boolean,
    onClick:()=>void,
    
}

const PriceCard:React.FC<PriceCardProps>=({id,price,type,description,features,isActive,onClick})=> {
  return (
      <>
          {/* price-card */}
          <div key={id} className='w-2/6  max-md:w-full max-lg:w-4/6 '>
              {/* price-card-container */}
              <div className={`${isActive ?"price-card" :""} main-font text-[#191919] border-[1.5px] border-solid border-[#191919]  rounded-2xl bg-[#FFE7AC] shadow-xl p-8 mt-10` }>
                  {/* price-card-content */}
                  <div className=''>
                      {/* info */}
                      <div className=''>
                          <p>
                              <span className=' font-black text-[36px] max-md:text-[32px]'>{price}</span>
                              <span className=' font-bold text-[22px] max-md:text-[20px]'>/للشخص</span>
                          </p>
                          <h3 className='font-black text-[24px] max-md:text-[20px]'>{type}</h3>
                          <p className='font-[400] text-[17px] pt-2 pb-4 max-md:text-[17px]'>{description}</p>   
                      </div>
                      {/*== info ==*/}
                      
                      {/* line */}
                      <div className='w-full h-[1px] bg-[#4C4C4C]'></div>
                      {/*== line ==*/}

                      {/* items-content */}
                      <div className='pt-4'>
                          {features.length > 0 && features.map((item, index) => (
                              
                                   
                                    <div key={index} className='relative mb-2'>
                                        {/* circle */}
                                        <div className='absolute right-0 bottom-0 w-[20px] h-[20px] bg-white rounded-full'>
                                            <FaCheck className='text-black'/>
                                        </div>
                                        {/* circle */}
                                        <p  className='font-[600] text-[18px] mr-6 max-md:text-[12px]'>{item}</p>                      
                                    </div>
                                 
                             
                          ))  }
                              
                      </div>
                      {/*== items-content ==*/} 
                      
                  </div>
                  {/* price-card-content */}

                  

                  {/* button */}   
                      <button
                          onClick={onClick}
                          className='mt-10 relative w-full cursor-pointer main-font  font-bold text-[18px]  p-2 rounded-2xl border-[1px] border-solid border-[#191919] '>
                        <span>احجز الآن</span>
                        <img src={arrowl} className='absolute top-2 left-22  h-8  w-8 p-1 max-md:left-9'/>
                    {/* <IoIosArrowDropleftCircle  /> */}
                    </button>               
                {/*== button ==*/}
                  
              </div>
              {/*== price-card-container ==*/}
              
          </div>
          {/*== price-card ==*/}
      </>
  )
}

export default PriceCard
