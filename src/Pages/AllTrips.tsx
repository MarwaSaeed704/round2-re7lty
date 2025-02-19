import React from 'react'
import '../Styles/Styles.css'
import TripsItem from '../Components/TripsItem'
import istanbolImg from '../assets/istanbol.png'
import dubaiImg from '../assets/dubai.png'
import cairoImg from '../assets/cairoImg.png'
import riyadahImg from '../assets/riyadahImg.png'


const AllTrips: React.FC=()=> {

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
                  <p className='main-font second-color font-black text-[24px] max-sm:text-[16px]'>قم بزيارة العالم</p>
                  <h2 className='main-font h-color font-black text-[48px] max-sm:text-[24px]'>الرحلات التي نقدمها</h2>
              </div>

              {/* show-trips-list */}
              <div className='flex gap-8 p-8  max-sm:flex-col'>
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
              {/*== show-trips-list ==*/}
              
          </div>
          {/*== all-trips-section ==*/}
      </>
  )
}

export default AllTrips

