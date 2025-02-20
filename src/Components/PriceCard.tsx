import React from 'react'
import { FaCheck } from "react-icons/fa6";
import '../Styles/Styles.css'
import arrowl from '../assets/arrowl .png'

interface PriceCardProps{
    cost: string,
    planType: string,
    planDesc: string,
    item1: string,
    item2: string,
    item3:string
}

const PriceCard:React.FC<PriceCardProps>=({cost,planType,planDesc,item1,item2,item3})=> {
  return (
      <>
          {/* price-card */}
          <div className='w-2/6 max-md:w-full max-lg:w-4/6'>
              {/* price-card-container */}
              <div className='main-font price-card text-[#191919] border-[1.5px] border-solid border-[#191919]  rounded-2xl bg-[#FFE7AC] shadow-xl p-4 mt-10'>
                  {/* price-card-content */}
                  <div className=''>
                      {/* info */}
                      <div className=''>
                          <p>
                              <span className=' font-black text-[36px] max-md:text-[32px]'>{cost}</span>
                              <span className=' font-bold text-[22px] max-md:text-[20px]'>/للشخص</span>
                          </p>
                          <h3 className='font-black text-[24px] max-md:text-[20px]'>{planType}</h3>
                          <p className='font-[400] text-[18px] pt-2 pb-4 max-md:text-[17px]'>{planDesc}</p>   
                      </div>
                      {/*== info ==*/}
                      
                      {/* line */}
                      <div className='w-full h-[1px] bg-[#4C4C4C]'></div>
                      {/*== line ==*/}

                      {/* items-content */}
                      <div className='pt-4'>
                          
                          {/* item1 */}
                          <div className='relative mb-2'>
                              {/* circle */}
                              <div className='absolute right-0 bottom-0 w-[20px] h-[20px] bg-white rounded-full'>
                                  <FaCheck className='text-black'/>
                              </div>
                              {/* circle */}
                              <p className='font-[600] text-[18px] mr-6 max-md:text-[14px]'>{item1}</p>                      
                          </div>
                          {/*== item1 ==*/}

                          {/* item2 */}
                          <div className='relative mb-2 '>
                              {/* circle */}
                              <div className='absolute right-0 bottom-0 w-[20px] h-[20px] bg-white rounded-full'>
                                  <FaCheck className='text-black'/>
                              </div>
                              {/* circle */}
                              <p className='font-[600] text-[18px] mr-6 max-md:text-[14px]'>{item2}</p>                      
                          </div>
                          {/*== item2 ==*/}

                          {/* item3 */}
                          <div className='relative mb-2'>
                              {/* circle */}
                              <div className='absolute right-0 bottom-0 w-[20px] h-[20px] bg-white rounded-full'>
                                  <FaCheck className='text-black'/>
                              </div>
                              {/* circle */}
                              <p className='font-[600] text-[18px] mr-6 max-md:text-[14px]'>{item3}</p>                      
                          </div>
                          {/*== item3 ==*/}
                          
                      </div>
                      {/*== items-content ==*/}                   
                  </div>
                  {/* price-card-content */}

                  {/* button */}
                    <div className=' mt-10'>
                    <button
                    className='relative w-full cursor-pointer main-font  font-bold text-[18px]  p-2 rounded-2xl border-[1px] border-solid border-[#191919] '>
                        <span>احجز الآن</span>
                        <img src={arrowl} className='absolute top-2 left-22  h-8  w-8 p-1 max-md:left-10'/>
                    {/* <IoIosArrowDropleftCircle  /> */}
                    </button>
                    </div>
                {/*== button ==*/}
                  
              </div>
              {/*== price-card-container ==*/}
              
          </div>
          {/*== price-card ==*/}
      </>
  )
}

export default PriceCard
