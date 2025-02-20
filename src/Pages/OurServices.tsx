import React from 'react'
import '../Styles/Styles.css'
import travel_v1 from '../assets/travel_v1_9.png'
import travelv210 from '../assets/travelv210.png'
import travel203 from '../assets/travel203.png'
import arrow3 from '../assets/arrow3.png'

const OurServices:React.FC=()=> {
  return (
      <>
          {/* ourservices-section */}
          <div className='pt-14 w-full'>
              <div className='text-center mb-4'>
                  <p className='main-font second-color font-black text-[24px] max-md:text-[16px]'>تمتع في رحلتك</p>
                  <h2 className='main-font text-[#191919] font-black text-[48px] tracking-[-2%] max-md:text-[24px]'>مجموعة من خدماتنا</h2>     
              </div>

              {/* services */}
              <div className='flex relative p-10 pt-18 m-10 bg-[#F1EFFD] rounded-3xl max-md:flex-col max-md:gap-10 '>
                  <img src={arrow3} alt='arrow3' className='absolute top-0 right-170 h-23 max-lg:right-100 max-md:right-47 max-md:h-22'/>
                 

                  {/* service#1 */}
                  <div className=' '>
                      <img src={travel_v1} className='w-2/6 m-auto max-md:w-3/6 max-lg:w-3/6' />
                      <div className='w-4/6 m-auto text-center max-md:w-5/6 max-lg:w-full'>
                            <h3 className='main-font text-[#191919] font-black text-[24px] tracking-[-2%] max-md:text-[20px]'>دليل سياحي</h3>
                            <p className='main-font text-[#4C4C4C] font-[400] text-[18px] tracking-[-3%] max-md:text-[17px]'>
                                نقدم لك خدمات الإرشاد السياحي لبناء
                                خطط سفر مميزة.
                            </p>
                     </div>
                      
                  </div>
                  {/*== service#1 ==*/}
                  
                   {/* service#2 */}
                  <div className=' '>
                      <img src={travelv210} className='w-2/6 m-auto max-md:w-3/6 max-lg:w-3/6' />
                      <div className='w-4/6 m-auto text-center max-md:w-5/6 max-lg:w-full'>
                            <h3 className='main-font text-[#191919] font-black text-[24px] tracking-[-2%] max-sm:text-[20px]'>دليل سياحي</h3>
                            <p className='main-font text-[#4C4C4C] font-[400] text-[18px] tracking-[-3%] max-sm:text-[17px]'>
                                نقدم لك خدمات الإرشاد السياحي لبناء
                                خطط سفر مميزة.
                            </p>
                     </div>
                      
                  </div>
                  {/*== service#2 ==*/}
                  
                   {/* service#3 */}
                  <div className=' '>
                      <img src={travel203} className='w-2/6 m-auto max-md:w-3/6 max-lg:w-3/6' />
                      <div className='w-4/6 m-auto text-center max-md:w-5/6 max-lg:w-full'>
                            <h3 className='main-font text-[#191919] font-black text-[24px] tracking-[-2%] max-sm:text-[20px]'>رحلات ميدانية</h3>
                            <p className='main-font text-[#4C4C4C] font-[400] text-[18px] tracking-[-3%] max-sm:text-[17px]'>
                                لن تكون إجازتك مملة معنا فهنا الكثير
                                من الخطط والرحلات المختلفة.
                            </p>
                     </div>
                      
                  </div>
                  {/*== service#3 ==*/}
                  
              </div>
              {/*== services ==*/}


              
          </div>
          {/*== ourservices-section ==*/}
      </>
  )
}

export default OurServices
