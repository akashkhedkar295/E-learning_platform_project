import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { NavLink , useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';


export default function Navbar(props) {
  const [user]=useAuthState(auth);
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  const [popvisible, setPopVisible] = useState(false);
  const [nvisible,setNvisible] = useState(false);
  const LogOut = async() =>{
    const success=await signOut();
    navigate('/')
    if(success) return toast.success("LogOut successfully!",{ position: "top-center", autoClose: 3000, theme: "dark" });
  }

  const pop = () =>{
    if(popvisible){
      setPopVisible(false);
    }else{
      setPopVisible(true);
    }
  }
  const Navbarvisible = () =>{
    if(nvisible){
      setNvisible(false);
    }else{
      setNvisible(true);
    }
  }
  // const temp = user.email === "admin@gmail.com";
  return (
    <div className="bg-red w-full">
      <ToastContainer/>
    <nav className={` ${!props.navState ? 'fixed' : ''} bg-gray-800  w-full z-20 top-0 start-0  border-gray-60`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <NavLink href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap text-white`}>Coder.com</span>
      </NavLink>
      <div className="flex  md:order-2 justify-between space-x-3 rtl:space-x-reverse">

      <button type="button" onClick={pop} className={`flex text-sm ${user ? user.email === "admin@gmail.com" ? 'hidden' : '' : 'hidden'} bg-gray-800 rounded-full md:me-0  focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown`} data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-9 h-9 pt-[1px] rounded-full" src={ user === null ?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png': user.photoURL ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt=''/>
      </button> 
      <button type="button" onClick={LogOut} className={`focus:outline-none ${user ? user.email === "admin@gmail.com" ? '' : 'hidden' : 'hidden'} text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm  px-5 py-2.5 me-2 mb-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>LogOut</button>
      

      {/*------------------------------------------------------------ dropdown list------------------------------------------------------------------------------ */}
      <div  className={`z-50 ${popvisible ?'visible':'hidden'} absolute top-10 right-72 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
        <div className="md:px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{user===null ? 'Please Sign In': user.displayName}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user=== null ?'':user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <NavLink to='/' onClick={LogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
          </li>
        </ul>
      </div>
      
      <NavLink to='/Compiler' className="text-blue-700  border md:visible hidden border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center md:inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"  style={{fill: 'white'}}>
           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" className='text-white' width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>
           <span className="sr-only">Icon description</span>
        </NavLink>

          <button type="button" onClick={props.isThem}  className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>{props.them==="dark"?"Light":"dark"}</button>
          <button onClick={Navbarvisible} data-collapse-toggle="navbar-sticky" type="button" className={`inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className={`items-center justify-between md:visible ${nvisible?'visible':'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
      <ul className={`flex flex-col ${user ? user.email === "admin@gmail.com" ? 'hidden' : '' : ''} p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-800 border-gray-700`}>
          <li>
            <Link to="Home" spy={true} onClick={props.navFalse} smooth={true} offset={-100} duration={500} className={`cursor-pointer  block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  ><NavLink to='/' >Home</NavLink></Link>
          </li>
          <li>
            <Link to="WhyUs" spy={true} onClick={props.navFalse} smooth={true} offset={-200} duration={500} className={`cursor-pointer  block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}><NavLink to='/' >About Page</NavLink></Link>
          </li>
          <li>
            <Link to="AboutUs" spy={true} onClick={props.navFalse} smooth={true} offset={-150} duration={500} className={`cursor-pointer  block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}><NavLink to='/' >About us</NavLink></Link>
          </li>
          <li>
            <Link to="Feekback" spy={true} onClick={props.navFalse} smooth={true} offset={-220} duration={500} className={`cursor-pointer  block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}><NavLink to='/' >Feedback</NavLink></Link>
          </li> 
          <li>
          <NavLink to="/Problems" className={`cursor-pointer  block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Assignment</NavLink>
          </li>    
        </ul>  

       
      </div>
      
{/*---------------------------------------------------------- Languages NavBar ------------------------------------------------------------------ */}

      </div> 
      <div className={`fixed ${!props.navState  ?'h-10':'h-0'} ${user?user.email === "admin@gmail.com" ? ' hidden ' : '': ''} w-full text-white bg-blue-700  truncate whitespace-nowrap`}>
                  <div className="items-center overflow-x-scroll w-full scrollbar-hide md:flex flex md:w-auto md:order-1" id="navbar-sticky">
                    <h6 className='text-lg'>Languages :</h6>
        <ul className={`flex ml-4 space-x-6 p-1  w-full`}>
          <li>
            <NavLink to='/HTML_Tutorials' className={` block py-2 px-3 rounded  md:hover:bg-transparent  md:p-0  text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>HTML</NavLink>
          </li>
          <li>
            <NavLink to='/CSS_Tutorials' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS</NavLink>
          </li>
          <li>
            <NavLink  to='/JS_Tutorials' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JAVASCRIPT</NavLink>
          </li>
          <li>
            <NavLink  to='/Java_Tutorials' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JAVA</NavLink>
          </li>
          <li>
            <NavLink  to='/C_Tutorials' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C</NavLink>
          </li>
          <li>
            <NavLink to='/CPP_Tutorials' className={` block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >C++</NavLink>
          </li>
          <li>
            <a  href='/' className={` block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >ANGULAR</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>TAILWIND CSS</a>
          </li>
          <li>
          <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>REACT</a>
          </li>
          
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>PYTHON</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C#</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>SQL</a>
          </li>  
          <li>
            <a  href='/' className={` block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >PHP</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>MYSQL</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JQUERY</a>
          </li>
          <li>
            <a  href='/' className={` block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >NODE.JS</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>TYPESCRIPT</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>KOTLIN</a>
          </li>
          <li>
            <a  href='/' className={`block py-2 px-3  rounded  md:p-0 md:hover:text-blue-300 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DSA</a>
          </li>
        </ul>
      </div>
    </div>     
    </nav>
  </div>
  );
}
