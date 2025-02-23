
import React from 'react'
import '../Styles/Styles.css'
import TripsItem from '../Components/TripsItem'
import istanbolImg from '../assets/istanbol.png'
import dubaiImg from '../assets/dubai.png'
import cairoImg from '../assets/cairoImg.png'
import riyadahImg from '../assets/riyadahImg.png'



const AllTrips: React.FC = () => {
    
    

    const tripsList = [
        {
            cityImage: istanbolImg,
            cityName: "اسطنبول",
            durationTime: "5 أيام ",
            cost:"1,500 دولار",
        },

        {
            cityImage: dubaiImg ,
            cityName: "دبي",
            durationTime: "5 أيام ",
            cost:"1,500 دولار",
        },

        {
            cityImage: cairoImg,
            cityName: "القاهرة",
            durationTime: "5 أيام ",
            cost:"1,500 دولار",
        },

        {
            cityImage: riyadahImg,
            cityName: "الرياض",
            durationTime: "5 أيام ",
            cost:"1,500 دولار",
        },
        
    ] 

  return (
      <>
          {/* all-trips-section */}
          <div >
              <div className='p-12 mt-8'>
                  <p className='main-font second-color font-black text-[24px] max-md:text-[16px]'>قم بزيارة العالم</p>
                  <h2 className='main-font h-color font-black text-[48px] max-md:text-[24px]'>الرحلات التي نقدمها</h2>
              </div>

              {/* show-trips-list */}
              <div className='flex max-md:justify-center max-md:items-center  max-lg:justify-center max-lg:items-center'>
                  <div className='w-full max-md:overflow-x-auto md:overflow-x-auto md:overflow-visible sm:overflow-visible whitespace-nowrap p-4 ' >
                      <div className='flex space-x-8 max-lg:space-x-4 max-md:space-x-4'>
                         {tripsList.map((city,index) => 
                       (
                          
                          <TripsItem
                                key={index}
                                cityImage={city.cityImage}
                                cityName={city.cityName}
                                durationTime={city.durationTime}
                                cost={city.cost}
                              />
                      )
                  ) }    
                   </div>
                  </div>
                  
              </div>
              {/*== show-trips-list ==*/}
              
          </div>
          {/*== all-trips-section ==*/}
      </>
  )
}

export default AllTrips

