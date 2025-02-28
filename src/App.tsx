
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import HomePage from './Pages/HomePage'
import AllTrips from './Pages/AllTrips'
import OurServices from './Pages/OurServices'
import Prices from './Pages/Prices'
import CustomerReview from './Pages/CustomerReview'
import ContactUs from './Pages/ContactUs'
import Footer from './Pages/Footer'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <div dir='rtl'>
              <div id='home'> <Home /> </div>
              <div id='all-trips'> <AllTrips /> </div>
              <div id='our-services' > <OurServices />  </div>
              <div id='prices'> <Prices /> </div>
              <div id='customer-review'> <CustomerReview /> </div>
              <div id='contact-us' > <ContactUs /> </div> 
              <div id='footer'> <Footer/> </div>
            </div>
          }/>

        </Routes>
        
      </Router>
    </>
  )
}

export default App
