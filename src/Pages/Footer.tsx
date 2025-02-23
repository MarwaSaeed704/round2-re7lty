import React from 'react'
import '../Styles/Styles.css'
import logoImg from '../assets/رحلاتي ..png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
const Footer:React.FC=()=> {
  return (
      <>
          {/* footer-section */}
          <div className='main-font bg-[#191919] pt-14 pb-14 pl-8 pr-8 mt-15 '>
              {/* content */}
              <div className='pb-10 w-full flex lg:justify-between max-md:flex-col max-lg:gap-10'>
                  
                  {/* rehlate */}
                  <div className='w-2/8 max-md:w-full max-md:mb-6 max-lg:w-3/8 '>
                      <img src={logoImg} alt='logo img' className='w-35' />
                      <p className=' font-medium text-[20px] text-[#797979] max-md:text-[18px] '>
                                                    شركة متخصصة في مجال السياحة والسفر
                            نقدم خدمات تأمين الرحلات والحجوزات
                            والفيز لكل أنحاء العالم.
                      </p>                      
                  </div>
                  {/*== rehlate ==*/}

                  {/*  */}
                  <div className='w-5/8 flex lg:justify-around max-md:w-full max-md:grid max-md:grid-cols-2 max-md:content-between max-lg:gap-8 max-lg:w-full'>
                       {/* about */}
                  <div className=''>
                      <h3 className='pb-6 font-black text-[24px] text-[#FFF9EA] max-md:text-[20px] '>حول</h3>
                      <ul className=' font-medium text-[20px] text-[#797979] max-md:text-[18px] '>
                          <li>الشركة</li>
                          <li>من نحن؟</li>
                          <li>فرص العمل</li>
                          <li>المدونة</li>

                      </ul>
                      
                  </div>
                  {/*== about ==*/}
                  
                   {/* our-services */}
                  <div className=''>
                      <h3 className='pb-6 font-black text-[24px] text-[#FFF9EA] max-md:text-[20px] '>خدماتنا</h3>
                      <ul className=' font-medium text-[20px] text-[#797979] max-md:text-[18px] '>
                          <li>بطاقات الطيران</li>
                          <li> الرحلات البحرية</li>
                          <li> الفنادق</li>
                          <li>الرحلات البرية</li>
                          <li>تأمين الفيزا</li>

                      </ul>
                      
                  </div>
                  {/*== our-services ==*/}
                  
                   {/* bookings */}
                  <div className=''>
                      <h3 className='pb-6 font-black text-[24px] text-[#FFF9EA] max-md:text-[20px] '>الحجوزات</h3>
                      <ul className=' font-medium text-[20px] text-[#797979] max-md:text-[18px] '>
                          <li> العروض الجديدة</li>
                          <li>تأكد من حجزك</li>
                          <li> الاشتراكات</li>
                          <li> طرق السفر</li>
                      </ul>
                      
                  </div>
                  {/*== bookings ==*/}
                  
                   {/* website */}
                  <div className=''>
                      <h3 className='pb-6 font-black text-[24px] text-[#FFF9EA] max-md:text-[20px] '>الموقع</h3>
                      <ul className=' font-medium text-[20px] text-[#797979] max-md:text-[18px] '>
                          <li>سياسة الخصوصية</li>
                          <li>شروط الاستخدام</li>
                          <li> بلغ عن مشكلة</li>
                          <li>تواصل معنا</li>
                      </ul>
                      
                  </div>
                  {/*== website ==*/}
                      
                  </div>
                  {/*==  ==*/}

                 
                  
              </div>
              {/*== content ==*/}
              
              {/* line */}
              <div className='w-full h-[1px] bg-[#4C4C4C] '>
                  
              </div>
              {/*== line ==*/}

              {/* bottom */}
              <div className='pt-6 flex justify-between max-md:flex-col'>
                  
                  {/* Copyright */}
                  <div>
                      <span className='font-medium text-[20px] text-[#797979] max-md:text-[18px] max-md:block'>جميع الحقوق محفوظة لموقع للمصمم  </span>
                      <span className='font-medium text-[20px] text-[#FEC430] max-md:text-[18px] ' >أحمد سكماني 2023</span>
                  </div>
                  {/*== Copyright ==*/}

                  {/* SocialNetworks */}
                  <div className='flex gap-4 max-md:mt-6'>
                      <img src={youtube} alt='SocialNetworks' />
                      <img src={instagram} alt='SocialNetworks' />
                      <img src={facebook} alt='SocialNetworks' />
                      
                  </div>
                  {/*== SocialNetworks ==*/}


                  
              </div>
              {/*== bottom ==*/}
              
              
          </div>
          {/*== footer-section ==*/}
      </>
  )
}

export default Footer
