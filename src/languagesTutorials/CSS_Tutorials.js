import React from 'react'
import Footer from '../components/Footer'
import {
  Outlet
} from "react-router-dom";
import CSSNavbar from './CSSTutorial/CSSNavbar';

const CSS_Tutorials = (props) => {
  return (
    
    <div className="flex overflow-hidden" style={{height:'730px'}}>
      <div className=''>
       <CSSNavbar />
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

export default CSS_Tutorials
