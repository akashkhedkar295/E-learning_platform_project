import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import JavaNavbar from './JavaTutorial/JavaNavbar'

const Java_Tutorials = () => {
  return (
    <div className="flex overflow-hidden" style={{height:'730px'}}>
      <div className=''>
       <JavaNavbar />
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

export default Java_Tutorials
