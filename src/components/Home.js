import React, { useEffect } from 'react'
import Service from './Service'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Feedback from './Feedback'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/Firebase'
import FeedbacksContent from './FeedbacksContent'
import AdminNav from './AdminNav'

const Home = (props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user) return navigate('profile') 
  },[user,navigate])
console.log(window.scroll>0);
  return (
  <>
  {/* -----------------------------------------------------------home tag line page------------------------------------------------------------------------- */}
    <div className={`md:px-28 p-4 w-full  flex-col md:flex md:flex-row pt-20 pb-12 md:space-x-4`} id='Home' >
      <div className={`w-full ${user ? user.email === "admin@gmail.com" ? 'hidden' : '' : ''} md:w-9/12 h-full md:pt-36 pt-14 md:pr-44`}> 
        <h4 className={`mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-4xl ${props.them === 'dark' ? 'text-white': 'text-gray-900'} `}>Unlock Your Coding Potential:<span className={` ${props.them === 'dark' ? 'text-blue-500' : 'text-blue-600' }`}>Learn, Create, Innovate</span></h4>
        <p className={`text-lg mb-6 font-normal  lg:text-xl ${props.them==='dark' ? 'text-gray-400' : 'text-gray-600' }`}>Discover a world of endless possibilities with our coder learning platform. From beginner to expert, cultivate your coding skills, build innovative projects, and transform your ideas into reality. Join a community of like-minded individuals and embark on a journey of continuous learning and innovation.</p>

        <form>   
            <label htmlFor="default-search" className={`mb-2  text-sm font-medium text-gray-900 sr-only ${props.them}:text-white`}>Search</label>
             <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className={`w-4 h-4 text-gray-500 ${props.them}:text-gray-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
                </div>
                <input type="search" id="default-search" className={`block w-full p-4 ps-10 text-sm  border  rounded-lg  focus:ring-blue-500 focus:border-blue-500  ${props.them==='dark' ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white ' : 'bg-gray-50 border-gray-300 text-gray-900'}`} placeholder="Search Mockups, Logos..." required/>
                <button type="submit" className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${props.them}:bg-blue-600 ${props.them}:hover:bg-blue-700 ${props.them}:focus:ring-blue-800`}>Search</button>
            </div>
        </form>

      </div>

      {/* -----------------------------------------------------------login page------------------------------------------------------------------------- */}
        <Outlet/>
    </div>

    {user&& user.email === "admin@gmail.com" ?
    <>
    <AdminNav them={props.them} />
    </>:
    <>
    <div className='relative'>
    <hr className="h-px my-8 relative bg-gray-200 border-0 dark:bg-gray-400 mx-28"/> 
    <h2 className={`text-4xl absolute  left-[50%] translate-x-[-50%] top-[-25px] font-bold ${props.them==='dark' ? 'text-white bg-slate-700' : 'bg-white'}  px-3 dark:`}>Our Core Features</h2>
    </div>
    <Service them={props.them} />
    <div className='relative'>
    <hr className="h-px my-8 relative bg-gray-200 border-0 dark:bg-gray-400 mx-28"/> 
    <h2 className={`text-4xl absolute  left-[50%] translate-x-[-50%] top-[-25px] font-bold ${props.them==='dark' ? 'text-white bg-slate-700' : 'bg-white'}  px-3 dark:`}>AboutUs</h2>
    </div>
    <AboutUs them={props.them} />
    <div className='relative'>
    <hr className="h-px my-8 relative bg-gray-200 border-0 dark:bg-gray-400 mx-28"/> 
    <h2 className={`text-4xl absolute  left-[50%] translate-x-[-50%] top-[-25px] font-bold ${props.them==='dark' ? 'text-white bg-slate-700' : 'bg-white'}  px-3 dark:`}>Feedback & Comments</h2>
    </div>
    <Feedback them={props.them}/>
    {user && <FeedbacksContent them={props.them}/>}
    <Footer/>
    </>}


    
    
   </>
  )
}

export default Home
