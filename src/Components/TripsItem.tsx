import React from 'react'
import '../Styles/Styles.css'

interface CityCardProps {
        cityImage:string,
        cityName: string,
        durationTime: string,
        cost:string
    }
const TripsItem:React.FC<CityCardProps>=({cityImage,cityName, durationTime,cost})=> {
  return (
      <>
          {/* city card */}
          <div className=''>
              <div className=' relative '>
                  <img src={cityImage} className=''/>
                  <div className='absolute bottom-0 p-2 bg-white rounded-xl w-5/6 m-6'>
                  <h3 className='main-font h-color font-black text-[24px] max-sm:text-[17px]'>{cityName}</h3>
                  <p className='main-font second-color text-[#797979] font-medium text-[18px] max-sm:text-[16px]'>
                      <span>{durationTime}</span> بتكلفه <span>{cost}</span>
                  </p>
              </div>
              </div>
              
              
          </div>
          {/*== city card ==*/}
      </>
  )
}

export default TripsItem
