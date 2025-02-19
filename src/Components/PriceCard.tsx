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
          <div className='w-2/6 max-sm:w-full'>
              {/* price-card-container */}
              <div className='main-font price-card text-[#191919] border-[1.5px] border-solid border-[#191919]  rounded-2xl bg-[#FFE7AC] shadow-xl p-8 mt-10'>
                  {/* price-card-content */}
                  <div className=''>
                      {/* info */}
                      <div className=''>
                          <p>
                              <span className=' font-black text-[36px]'>{cost}</span>
                              <span className=' font-bold text-[22px]'>/للشخص</span>
                          </p>
                          <h3 className='font-black text-[24px]'>{planType}</h3>
                          <p className='font-[400] text-[18px] pt-2 pb-4'>{planDesc}</p>   
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
                              <p className='font-[600] text-[18px] mr-6 max-sm:text-[14px]'>{item1}</p>                      
                          </div>
                          {/*== item1 ==*/}

                          {/* item2 */}
                          <div className='relative mb-2 '>
                              {/* circle */}
                              <div className='absolute right-0 bottom-0 w-[20px] h-[20px] bg-white rounded-full'>
                                  <FaCheck className='text-black'/>
                              </div>
                              {/* circle */}
                              <p className='font-[600] text-[18px] mr-6 max-sm:text-[14px]'>{item2}</p>                      
                          </div>
                          {/*== item2 ==*/}

                          {/* item3 */}
                          <div className='relative mb-2'>
                              {/* circle */}
                              <div className='absolute right-0 bottom-0 w-[20px] h-[20px] bg-white rounded-full'>
                                  <FaCheck className='text-black'/>
                              </div>
                              {/* circle */}
                              <p className='font-[600] text-[18px] mr-6 max-sm:text-[14px]'>{item3}</p>                      
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
                        <img src={arrowl} className='absolute top-2 left-22  h-8  w-8 p-1 max-sm:left-15'/>
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
