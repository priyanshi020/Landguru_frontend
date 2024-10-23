import React from 'react'
import Nav from './component/Nav'
import HeroSection from './component/HeroSection'
import Accordian from './component/Accordian'
import Other from './component/Other'
import Footer from './component/Footer'
import CarouselComponent from './component/CarouselComponent'
import Pricing from './component/Pricing'
import HowItWorks from './component/HowItWorks'
import PopularCourse from './component/PopularCourse'

const Landing = () => {
  return (
    <React.Fragment>
       
       <Nav/>
       <div className='' style={{margin:'5%'}} >
       <HeroSection/>
       <PopularCourse/>
       <HowItWorks/>
       <Pricing/>
       <CarouselComponent/>
       <Accordian/>
       <Other/>
       </div>
       <Footer/>
    </React.Fragment>
  )
}

export default Landing