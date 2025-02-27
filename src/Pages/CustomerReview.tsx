import React, { useEffect, useState } from 'react'
import '../Styles/Styles.css'
import arrow02 from '../assets/arrow02.png'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CustomerReviewElement, { CustomerReviewElementProps } from '../Components/CustomerReviewElement';
import axios from 'axios'

const CustomerReview: React.FC = () => {
    const [customerReview, setCustomerReview] = useState<CustomerReviewElementProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getCustomerReview = async () => {
        try {
            const response = await axios.get("https://re7lty-3.digital-vision-solutions.com/api/reviews");
            const transformedResponse = response.data.data.data.map((customer: CustomerReviewElementProps) => (
                {
                    id: customer.id,
                    user_id: customer.user_id,
                    name: customer.name,
                    content: customer.content,
                    image: customer.image,
                    rating: customer.rating,
                }
            ))

            setCustomerReview(transformedResponse);
            
        } catch (error) {
            setError("حدث خطأ أثناء جلب البيانات.");
            
        } finally {
            setLoading(false);
        }
        
    }

    useEffect(() => {
        getCustomerReview();
    },[])

    // const customerList: CustomerInfo[] = [
    //     {
    //         customerImage: customer1,
    //         customerName: "محمد الأحمد",
    //         customerReview:" كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة لي من فترة طويلة، أنصح بالتعامل مع شركة رحلاتي بدون تردد. "

    //     },

    //     {
    //         customerImage: customer2,
    //         customerName: " ماهر عبد اللطيف",
    //         customerReview:" تقدم شركة رحلاتي خدمات مناسبة جداً لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جداً من مشاكل الحجوزات. "

    //     },

    //     {
    //         customerImage: customer3,
    //         customerName: " أسامة الأبيض",
    //         customerReview:" يمكنني القول إنني قمت بقطاء أفضل رحلة عائلة على الإطلاق، كان الفنادق رائعة وخطة السفر ممتازة جداً ومريحة. "

    //     },
    // ];

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
                  {customerReview.length>0 ? customerReview.map((customer) => {
                      return (
                          <CustomerReviewElement
                              key={customer.id}
                              id={customer.id}
                              user_id={customer.user_id}
                              name={customer.name}
                              content={customer.content}
                              image={customer.image}
                              rating={customer.rating}
                              
                          />
                  )}): <p>⏳ تحميل ...</p>}
                  
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
