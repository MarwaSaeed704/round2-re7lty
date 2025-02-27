
import React, { useEffect, useState } from 'react'
import '../Styles/Styles.css'
import TripsItem from '../Components/TripsItem'
import axios  from 'axios'
import { CityCardProps } from '../Components/TripsItem'



const AllTrips: React.FC = () => {

    
    
    const [trips, setTrips] = useState<CityCardProps[]>([]);

    const [error, setError] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    

   
        
    
        
    
    const getTrips = async () => {

          try {
            const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/trips");
            const transformedTrips = response.data.data.data.map((trip: CityCardProps) => ({
                id: trip.id,
                name: trip.name,
                coast: trip.coast,
                number_of_days: trip.number_of_days,
                image: trip.image,
            }));
              
              setTrips(transformedTrips);
             
              
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError("حدث خطأ أثناء جلب البيانات.");
        } finally {
            setLoading(false);
        }
    };

       
    
    useEffect(() => {

        getTrips(); 
 
    },[])

    
    

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
                         {trips.length> 0 ? trips.map((city) => 
                         (                           
                          
                          <TripsItem
                                 key={city.id}
                                 id={city.id}
                                 name={city.name}
                                 coast={city.coast}
                                 number_of_days={city.number_of_days}
                                 image={city.image}
                              />
                         )
                             
                  ) :<p>⏳ تحميل الرحلات...</p>}    
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

