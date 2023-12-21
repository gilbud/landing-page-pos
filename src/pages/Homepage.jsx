import AboutUs from '../components/AboutUs'
import Home from '../components/Home'
import Service from '../components/Service'
const Homepage = () => {
  return (
    <>
      <div className='pt-28  bg-gray-100'>
        <Home />
        <AboutUs />
        <Service />
      </div>
    </>
  )
}

export default Homepage
