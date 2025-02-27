
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import HomePage from './Pages/HomePage'
import AllTrips from './Pages/AllTrips'
import OurServices from './Pages/OurServices'
import Prices from './Pages/Prices'
import CustomerReview from './Pages/CustomerReview'
import ContactUs from './Pages/ContactUs'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route index path='home' element={<Home />} />
            <Route path='all-trips' element={<AllTrips />} />
            <Route path='our-services' element={<OurServices />} />
            <Route path='prices' element={<Prices />} />
            <Route path='customer-review' element={<CustomerReview />} />
            <Route path='contact-us' element={<ContactUs/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
