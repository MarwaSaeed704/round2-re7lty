import React from 'react'
import '../Styles/Styles.css'
import customer1 from '../assets/customer1.png'
import customer2 from '../assets/customer2.png'
import customer3 from '../assets/customer3.png'
import arrow02 from '../assets/arrow02.png'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CustomerReviewElement from '../Components/CustomerReviewElement';

const CustomerReview: React.FC = () => {
    interface CustomerInfo{
        customerImage: string,
        customerName: string,
        customerReview:string,
    }

    const customerList: CustomerInfo[] = [
        {
            customerImage: customer1,
            customerName: "محمد الأحمد",
            customerReview:" كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة لي من فترة طويلة، أنصح بالتعامل مع شركة رحلاتي بدون تردد. "

        },

        {
            customerImage: customer2,
            customerName: " ماهر عبد اللطيف",
            customerReview:" تقدم شركة رحلاتي خدمات مناسبة جداً لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جداً من مشاكل الحجوزات. "

        },

        {
            customerImage: customer3,
            customerName: " أسامة الأبيض",
            customerReview:" يمكنني القول إنني قمت بقطاء أفضل رحلة عائلة على الإطلاق، كان الفنادق رائعة وخطة السفر ممتازة جداً ومريحة. "

        },
    ];
  return (
      <>
          {/* customer-review-container */}
          <div className='p-8 '>
              {/* title */}
              <div className='text-center'>
                  <p className='main-font font-black text-[24px] text-[#A5A5A5] max-md:text-[16px]'>
                      قالوا عنا
                  </p>

                  <p className='main-font font-black text-[48px] text-[#191919] max-md:text-[24px]'>
                      آراء مجموعة من عملائنا
                  </p>
                  
              </div>
              {/*== title ==*/}
              
              {/* customer-review-content */}
              <div className='relative w-full mt-10 pt-15'>
                  {/* arrow02 */}
                  <div className='max-md:hidden'>
                       <img src={arrow02} alt='arrow' className='absolute  top-0 left-40'/>
                 </div>
                  {/*== arrow02 ==*/}
                      
                 
                  
                  
                  {/* customer-review-elements */}
              <div className='w-full flex flex-row gap-8 max-md:flex-col max-lg:flex-col'>
                  {customerList.map((customer, index) => {
                      return (
                          <CustomerReviewElement
                              key={index}
                              customerImage={customer.customerImage}
                              customerName={customer.customerName}
                              customerReview={customer.customerReview}
                          />
                  )})}
                  
              </div>
                  {/*== customer-review-elements ==*/}

                  {/* arrows */}
                  <div className=' mt-5 absolute right-150 max-md:hidden '>                   
                        <div className=' flex gap-4 text-[#755AE8] '>
                        <IoIosArrowDroprightCircle className='icon-shadow rounded-full w-8 h-8' />
                        <IoIosArrowDropleftCircle className='icon-shadow rounded-full w-8 h-8 ' />
                        </div>
                  </div>
                   {/*== arrows ==*/}
              
              </div>
              {/*== customer-review-content ==*/}

               
              
          </div>
          {/*== customer-review-container ==*/}
      
      </>
  )
}

export default CustomerReview
