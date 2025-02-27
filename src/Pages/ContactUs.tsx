import React, { useState } from 'react'
import '../Styles/Styles.css'
import helpIcon from '../assets/helpIcon.png'
import communicationIcon from '../assets/communicationIcon.png'
import workingHoursIcon from '../assets/working-hours-icon.png'
import axios from 'axios'

interface FormData {
       
        name: string,
        email: string,
        subject:string,
    }

const ContactUs: React.FC = () => {

    

    const [formData, setFormData] = useState<FormData>(
        {
            name: "",
            email: "",
            subject:"",
        }
    );

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState("");

    //تحديث البيانات عند الادخال
    const handleChangeData = (e:React.ChangeEvent<HTMLInputElement>) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        
    }

    //ارسال البيانات الي ال api
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post("https://re7lty-3.digital-vision-solutions.com/api/contacts", formData);
            setMessage("تم ارسال البيانات بنجاح");
            console.log(response);

            //تفريغ ال form بعد ارسال البيانات
            setFormData(
                {
                    name: "",
                    email: "",
                    subject: "",
                }
            );

        } catch (error) {
            setMessage(" حدث خطا في ارسال البيانات !!!!")
            
        } finally {
            setLoading(false);
        }
        
        
    }



  return (
      <>
          {/* contact-us-section */}
          <div className='main-font p-8 pt-20'>
              {/* title */}
              <div className='mb-10'>
                  <p className='font-black text-[24px] text-[#A5A5A5] max-md:text-[16px] '>هل لديك سؤال؟</p>
                  <h2 className='font-black text-[48px] text-[#191919] tracking-tighter max-md:text-[24px]'>يسعدنا التواصل معك</h2>       
              </div>
              {/*== title ==*/}

              {/* contact-content */}
              <div className='flex gap-8 max-md:flex-col max-lg:flex-col'>
                  
                  {/* contact-form */}
                  <div className='mt-4 p-8  bg-[#FFE7AC] border-solid border-[1.5px] border-[#191919] rounded-xl shadow-xl '>
                      
                      {message && <p className='text-center text-red-600 pb-4'>{ message}</p>}
                      <form onSubmit={handleSubmit}>
                          
                          {/* name */}
                      <div className='mb-4'>
                          <label htmlFor='name' className='font-black text-[24px] text-[#191919] tracking-tighter max-md:text-[20px]'>
                          الاسم
                      </label>
                      <input
                            type='text'
                              id='name'
                              name='name'
                              value={formData.name}
                              placeholder='يرجى تسجيل اسمك الكامل'
                              onChange={handleChangeData}
                              required
                          className='w-full bg-white font-[400] text-[18px] text-[#A5A5A5] rounded-lg p-2  border-solid border-[1.5px] border-[#191919] '
                      />
                      </div>
                      {/*== name ==*/}

                      {/* email */}
                      <div className='mb-4'>
                          <label htmlFor='email' className='font-black text-[24px] text-[#191919] tracking-tighter max-md:text-[20px]'>
                          البريد الإلكتروني
                      </label>
                      <input
                             type='email'
                              id='email'
                              name='email'
                              value={formData.email}
                              placeholder='سجل بريدك الشخصي'
                              onChange={handleChangeData}
                              required
                          className='w-full bg-white font-[400] text-[18px] text-[#A5A5A5] rounded-lg p-2  border-solid border-[1.5px] border-[#191919] '
                      />
                      </div>
                      {/*== email ==*/}

                      {/* subject */}
                      <div className='mb-4'>
                          <label htmlFor='subject' className='font-black text-[24px] text-[#191919] tracking-tighter max-md:text-[20px]'>
                           الموضوع
                      </label>
                      <input
                             type='text'
                              id='subject'
                              name='subject'
                              value={formData.subject}
                              placeholder='ما هو السؤال أو المشكلة التي لديك؟'
                              onChange={handleChangeData}
                              required
                          className='w-full bg-white font-[400] text-[18px] text-[#A5A5A5] rounded-lg p-2  border-solid border-[1.5px] border-[#191919] h-20'
                      />
                      </div>
                      {/*== subject ==*/}

                      {/* button */}
                      <button
                              type='submit'
                              disabled={loading}
                          className=' cursor-pointer mt-4 mb-4 main-shadow p-2 w-50 font-bold text-[18px] text-white bg-[#191919] rounded-lg'>
                               
                              {loading ? "جاري الارسال ...":"ارسل الرساله"}
                      </button>
                      {/* button */}
                          
                      </form>
                      
                      
                  </div>
                  {/*== contact-form ==*/}

                  {/* info-section */}
                  <div className='p-12'>
                      {/* help */}
                      <div className='flex gap-6 mb-10 max-md:flex-col max-lg:flex-col'>
                          <img src={helpIcon} alt='help-icon' className='w-25 h-25 max-md:m-auto max-lg:m-auto' />
                          <div className='w-3/6 max-md:w-full max-md:text-center max-lg:w-full max-lg:text-center'>
                              <h3 className='main-font font-black text-[24px] text-[#191919] pb-2  max-md:text-[20px]  '>نقدم لك المساعدة</h3>
                              <p className='main-font font-[400] text-[18px] text-[#4C4C4C] max-md:text-[17px]  '>
                                  إن كان لديك اي مشكلة في البلد الذي تسافر إليه سنقوم بمساعدك في هذا الموضوع.
                              </p>
                          </div>
                          
                      </div>
                      {/*== help ==*/}

                       {/* communication */}
                      <div className='flex gap-6 mb-10 max-md:flex-col max-lg:flex-col'>
                          <img src={communicationIcon} alt='help-icon' className='w-25 h-25 max-md:m-auto max-lg:m-auto ' />
                          <div className='w-3/6 max-md:w-full max-md:text-center max-lg:w-full max-lg:text-center'>
                              <h3 className='main-font font-black text-[24px] text-[#191919] pb-2 max-md:text-[20px] '>للتواصل</h3>
                              <p className='main-font font-[400] text-[18px] text-[#4C4C4C] max-md:text-[17px]  '>
                                يمكنك التواصل معنا عبر الفورم أو عبر البريد
                                الإلكتروني: company@mail.com
                              </p>
                          </div>
                          
                      </div>
                      {/*== communication ==*/}

                      {/* working-hours */}
                      <div className='flex gap-6 mb-6 max-md:flex-col max-lg:flex-col'>
                          <img src={workingHoursIcon} alt='help-icon' className='w-25 h-25 max-md:m-auto max-lg:m-auto' />
                          <div className='w-3/6 max-md:w-full max-md:text-center max-lg:w-full max-lg:text-center'>
                              <h3 className='main-font font-black text-[24px] text-[#191919] pb-2 max-md:text-[20px] '>أوقات الدوام</h3>
                              <p className='main-font font-[400] text-[18px] text-[#4C4C4C] max-md:text-[17px] '>
                                يمكنك التواصل معنا يومياً أثناء أوقات الدوام
                                من الساعة 9 صباحاً حتى 6 مساءاً.
                              </p>
                          </div>
                      </div>
                      {/*== working-hours ==*/}
                      
                  </div>
                  {/*== info-section ==*/}
                  
              </div>
              {/*== contact-content ==*/}
              
          </div>
           {/*== contact-us-section ==*/}
      </>
  )
}

export default ContactUs
