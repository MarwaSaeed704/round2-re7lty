import '../Styles/Home.css'
import Navbar from '../Components/Navbar'
import HomeContent from '../Components/HomeContent'


const Home:React.FC=()=> {
  return (
      <>
          {/* home-section */}
          <div dir='rtl' className='home-section w-full'>
              
              <Navbar />
              <HomeContent/>
               
          </div>
          {/*== home-section ==*/}
      </>
  )
}

export default Home
