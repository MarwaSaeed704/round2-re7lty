import React from 'react'
import Home from './Home'
import AllTrips from './AllTrips'
import OurServices from './OurServices'
import Prices from './Prices'
import CustomerReview from './CustomerReview'
import ContactUs from './ContactUs'
import Footer from './Footer'


const HomePage:React.FC=()=> {
  return (
      <>
          <div dir='rtl'>
              <Home />
              <AllTrips />
              <OurServices />
              <Prices />
              <CustomerReview />
              <ContactUs />
              <Footer/>
          </div>
      </>
  )
}

export default HomePage
