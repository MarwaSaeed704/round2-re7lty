import React, { useEffect, useState } from 'react'
import '../Styles/Styles.css'
import arrow3 from '../assets/arrow3.png'
import ServicesCard, { ServicesCardProps } from '../Components/ServicesCard'
import axios from 'axios'

const OurServices: React.FC = () => {

    const [ourServices, setOurServices] = useState<ServicesCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);

    const getServices = async () => {
        try {

            const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/showservices");
            // console.log(response.data.data);
            const transformedResponse = response.data.data.map((service: ServicesCardProps) => (
                {
                    id: service.id,
                    service_name: service.service_name,
                    image: service.image,
                    description: service.description,
                }
            ));

            setOurServices(transformedResponse);
            

            
            
        } catch (error) {
            setError("حدث خطأ أثناء جلب البيانات.");
            
        } finally {
            setLoading(false);
        }
    
        
    }


    useEffect(() => {
        getServices();
    },[])
    
    
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
                 

                  {ourServices.length>0 ? ourServices.map((service) => (
                      <ServicesCard
                          key={service.id}
                          id={service.id}
                          service_name={service.service_name}
                          image={service.image}
                          description={service.description}
                      />
                  )) : <p>⏳ تحميل ...</p>}

                  {/* {error && <p> {error} </p>} */}
                  {/* {loading && <p> ⏳ تحميل ... </p>} */}
                  
                  
              </div>
              {/*== services ==*/}


              
          </div>
          {/*== ourservices-section ==*/}
      </>
  )
}

export default OurServices
