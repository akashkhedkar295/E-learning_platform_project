import React from 'react'
import { NavLink } from 'react-router-dom'

const CNavbar = () => {
  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-scroll scrollbar-hide" aria-label="Sidebar">
   <div className="h-full py-4 overflow-y-auto scrollbar-hide bg-gray-900">
    {/* <BrowserRouter> */}
      <ul className="space-y-2 pl-6 pt-20 font-medium">
        <li><h6 className="text-2xl font-bold py-3 text-white">C Tutorial</h6></li>
        <li><NavLink to='' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Intro</NavLink></li>
        <li><NavLink to='C_Get_Started' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Get Started</NavLink></li>
        <li><NavLink to='C_Syntax' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Syntax</NavLink></li>
        <li><NavLink to='C_Output' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Output</NavLink></li>
        <li><NavLink to='C_Comments' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Comments</NavLink></li>
        <li><NavLink to='C_Variables' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Variables</NavLink></li>
        <li><NavLink to='C_Data_Types' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Data Types</NavLink></li>
        <li><NavLink to='C_Constants' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Constants</NavLink></li>
        <li><NavLink to='C_Operators' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Operators</NavLink></li>
        <li><NavLink to='C_Booleans' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Booleans</NavLink></li>
        <li><NavLink to='C_If...Else' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C If...Else</NavLink></li>
        <li><NavLink to='C_Switch' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Switch</NavLink></li>
        <li><NavLink to='C_While_Loop' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C While Loop</NavLink></li>
        <li><NavLink to='C_For_Loop' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C For Loop</NavLink></li>
        <li><NavLink to='C_Break/Continue' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Break/Continue</NavLink></li>
        <li><NavLink to='C_Arrays' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Arrays</NavLink></li>
        <li><NavLink to='C_Strings' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Strings</NavLink></li>
        <li><NavLink to='C_User_Input' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C User Input</NavLink></li>
        <li><NavLink to='C_Memory_Address' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Memory Address</NavLink></li>
        <li><NavLink to='C_Pointers' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Pointers</NavLink></li>


        <li><h6 className="text-2xl font-bold py-3 text-white">C Functions</h6></li>
        <li><NavLink to='C_Functions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Functions</NavLink></li>
        <li><NavLink to='C_Function_Parameters' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Function Parameters</NavLink></li>
        <li><NavLink to='C_Function_Declaration' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Function Declaration</NavLink></li>
        <li><NavLink to='C_Recursion' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Recursion</NavLink></li>
        <li><NavLink to='C_Math_Functions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Math Functions</NavLink></li>


        <li><h6 className="text-2xl font-bold py-3 text-white">C Files</h6></li>
        <li><NavLink to='C_Create_Files' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Create Files</NavLink></li>
        <li><NavLink to='C_Write_To_Files' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Write To Files</NavLink></li>
        <li><NavLink to='C_Read_Files' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C Read Files</NavLink></li>

        <li><h6 className="text-2xl font-bold py-3 text-white">C MCQ</h6></li>
        <li><NavLink  to="/C_Tutorials/C_Qize"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>C MCQ Test</NavLink></li>
        <li><br/></li>

      </ul>
      {/* </BrowserRouter> */}
   </div>
</aside>
    </div>
  )
}

export default CNavbar
