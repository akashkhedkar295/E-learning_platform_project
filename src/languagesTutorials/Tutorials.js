import React from 'react'
import HtmlNavbar from './htmlTutorial/HtmlNavbar'
import Footer from '../components/Footer'
import CSSNavbar from './CSSTutorial/CSSNavbar'
import {
  Outlet , Route, useLocation
} from "react-router-dom";

const Tutorials = (props) => {
  const Location = useLocation()
  console.log(Location.pathname=== '/HTML_Tutorials')
  return (
    
    <div className="flex justify-between overflow-hidden" style={{height:'730px'}}>
      <div className=''>
       <HtmlNavbar />
      </div>
      <div className=" min-h-[730px] block w-full overflow-y-scroll scrollbar-hide">
      
        <div className='pr-24 pl-6'>
        <Outlet />
          <div className='w-full flex py-10 px-8 justify-between'>
          
        </div>
        </div>
        
        <Footer/>
      </div>
     
    </div>
  )
}

export default Tutorials
