import React from 'react'

export interface ServicesCardProps{
    id: number,
    service_name: string,
    description: string,
    image:string,
}

const ServicesCard:React.FC<ServicesCardProps>=({id,service_name,description,image}) =>{
  return (
      <>
         
              {/* service */}
                  <div key={id} className=' '>
                      <img src={image} className='w-2/6 m-auto max-md:w-3/6 max-lg:w-3/6' />
                      <div className='w-4/6 m-auto text-center max-md:w-5/6 max-lg:w-full'>
                  <h3 className='main-font text-[#191919] font-black text-[24px] tracking-[-2%] max-md:text-[20px]'> { service_name}</h3>
                            <p className='main-font text-[#4C4C4C] font-[400] text-[18px] tracking-[-3%] max-md:text-[17px]'>

                            {description}                      
                            </p>
                     </div>
                      
                  </div>
                  {/*== service ==*/}
              
         
      </>
  )
}

export default ServicesCard
