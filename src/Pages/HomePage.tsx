import React from 'react'
import Home from './Home'
import AllTrips from './AllTrips'
import OurServices from './OurServices'
import Prices from './Prices'


const HomePage:React.FC=()=> {
  return (
      <>
          <div dir='rtl'>
              <Home />
              <AllTrips />
              <OurServices />
              <Prices />
          </div>
      </>
  )
}

export default HomePage
