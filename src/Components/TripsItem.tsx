import React from 'react'
import '../Styles/Styles.css'

export interface CityCardProps{
        id:number,
        name:string,
        coast: string,
        number_of_days: number,
        image:string,
}


const TripsItem:React.FC<CityCardProps>=({id,name,coast,number_of_days,image})=> {
  return (
      <>
          {/* city card */}
          <div key={id} className='w-2/8 max-md:min-w-[250px] max-lg:min-w-[250px]'>
              <div className=' relative '>
                  <img src={image} className=''/>
                  <div className='absolute bottom-5 right-5 p-2 bg-white rounded-xl w-5/6  text-wrap'>
                  <h3 className='main-font h-color font-black text-[24px] max-sm:text-[17px]'>{name}</h3>
                  <p className='main-font second-color text-[#797979] font-medium text-[18px] max-sm:text-[16px]'>
                      <span>{number_of_days} ايام</span> بتكلفه <span>{coast}ريال</span>
                  </p>
              </div>
              </div>
              
              
          </div>
          {/*== city card ==*/}
      </>
  )
}

export default TripsItem
