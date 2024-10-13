import React from 'react'
import { NavLink } from 'react-router-dom'

const CPPNavbar = () => {
  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-scroll scrollbar-hide" aria-label="Sidebar">
   <div className="h-full py-4 overflow-y-auto scrollbar-hide bg-gray-800">
    {/* <BrowserRouter> */}
      <ul className="space-y-2 pl-6 pt-20 font-medium">
        <li><h6 className="text-2xl font-bold py-3 text-white">C++ Tutorial</h6></li>       
        <li><NavLink to='' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Intro</NavLink></li>
        <li><NavLink to='C++_Get Started' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Get Started</NavLink></li>
        <li><NavLink to='C++_Syntax' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Syntax</NavLink></li>
        <li><NavLink to='C++_Output' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Output</NavLink></li>
        <li><NavLink to='C++_Comments' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Comments</NavLink></li>
        <li><NavLink to='C++_Variables' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Variables</NavLink></li>
        <li><NavLink to='C++_User_Input' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ User Input</NavLink></li>
        <li><NavLink to='C++_Data_Types' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Data Types</NavLink></li>
        <li><NavLink to='C++_Operators' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Operators</NavLink></li>
        <li><NavLink to='C++_Strings' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Strings</NavLink></li>
        <li><NavLink to='C++_Math' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Math</NavLink></li>
        <li><NavLink to='C++_Booleans' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Booleans</NavLink></li>
        <li><NavLink to='C++_Conditions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Conditions</NavLink></li>
        <li><NavLink to='C++_Switch' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Switch</NavLink></li>
        <li><NavLink to='C++_While_Loop' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ While Loop</NavLink></li>
        <li><NavLink to='C++_For_Loop' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ For Loop</NavLink></li>
        <li><NavLink to='C++_Break/Continue' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Break/Continue</NavLink></li>
        <li><NavLink to='C++_Arrays' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Arrays</NavLink></li>
        <li><NavLink to='C++_Structures' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Structures</NavLink></li>
        <li><NavLink to='C++_References' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ References</NavLink></li>
        <li><NavLink to='C++_Pointers' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Pointers</NavLink></li>
        
        <li><h6 className="text-2xl font-bold py-3 text-white">C++ Functions</h6></li>
        
        <li><NavLink to='C++_Functions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Functions</NavLink></li>
        <li><NavLink to='C++_Function Parameters' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Function Parameters</NavLink></li>
        <li><NavLink to='C++_Function Overloading' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Function Overloading</NavLink></li>
        <li><NavLink to='C++_Recursion' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Recursion</NavLink></li>
        
        <li><h6 className="text-2xl font-bold py-3 text-white">C++ Classes</h6></li>
        
        <li><NavLink to='C++_OOP' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ OOP</NavLink></li>
        <li><NavLink to='C++_Classes/Objects' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Classes/Objects</NavLink></li>
        <li><NavLink to='C++_Class_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Class Methods</NavLink></li>
        <li><NavLink to='C++_Constructors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Constructors</NavLink></li>
        <li><NavLink to='C++_Access_Specifiers' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Access Specifiers</NavLink></li>
        <li><NavLink to='C++_Encapsulation' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Encapsulation</NavLink></li>
        <li><NavLink to='C++_Inheritance' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Inheritance</NavLink></li>
        <li><NavLink to='C++_Polymorphism' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Polymorphism</NavLink></li>
        <li><NavLink to='C++_Files' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Files</NavLink></li>
        <li><NavLink to='C++_Exceptions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C++ Exceptions</NavLink></li>


        <li><h6 className="text-2xl font-bold py-3 text-white">CSS MCQ</h6></li>
        <li><NavLink  to="/CSS_Tutorials/CSS_Qize"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS MCQ Test</NavLink></li>
        <li><br/></li>

      </ul>
      {/* </BrowserRouter> */}
   </div>
</aside>
    </div>
  )
}

export default CPPNavbar;
