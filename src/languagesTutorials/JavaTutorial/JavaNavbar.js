import React from 'react'
import {NavLink} from "react-router-dom";

const JavaNavbar = () => {
  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-scroll scrollbar-hide" aria-label="Sidebar">
   <div className="h-full py-5 pb-16 overflow-y-auto scrollbar-hide bg-gray-800">
    {/* <BrowserRouter> */}
      <ul className="space-y-2 pl-6 pt-20 font-medium">
        <li><h6 className="text-2xl font-bold py-3 text-white">Java Tutorial</h6></li>        
        <li><NavLink to='' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Intro</NavLink></li>
        <li><NavLink to='Java_Get_Started' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Get Started</NavLink></li>
        <li><NavLink to='Java_Syntax' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Syntax</NavLink></li>
        <li><NavLink to='Java_Output' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Output</NavLink></li>
        <li><NavLink to='Java_Comments' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Comments</NavLink></li>
        <li><NavLink to='Java_Variables' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Variables</NavLink></li>
        <li><NavLink to='Java_Data Types' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Data Types</NavLink></li>
        <li><NavLink to='Java_Type Casting' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Type Casting</NavLink></li>
        <li><NavLink to='Java_Operators' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Operators</NavLink></li>
        <li><NavLink to='Java_Strings' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Strings</NavLink></li>
        <li><NavLink to='Java_Math' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Math</NavLink></li>
        <li><NavLink to='Java_Booleans' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Booleans</NavLink></li>
        <li><NavLink to='Java_If...Else' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java If...Else</NavLink></li>
        <li><NavLink to='Java_Switch' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Switch</NavLink></li>
        <li><NavLink to='Java_While Loop' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java While Loop</NavLink></li>
        <li><NavLink to='Java_For Loop' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java For Loop</NavLink></li>
        <li><NavLink to='Java_Break/Continue' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Break/Continue</NavLink></li>
        <li><NavLink to='Java_Arrays' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Arrays</NavLink></li>

        <li><h6 className="text-2xl font-bold py-3 text-white">Java Methods</h6></li>
        <li><NavLink to='Java_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Methods</NavLink></li>
        <li><NavLink to='Java_Method_Parameters' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Method Parameters</NavLink></li>
        <li><NavLink to='Java_Method_Overloading' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Method Overloading</NavLink></li>
        <li><NavLink to='Java_Scope' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Scope</NavLink></li>
        <li><NavLink to='Java_Recursion' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Recursion</NavLink></li>

        <li><h6 className="text-2xl font-bold py-3 text-white">Java Classes </h6></li>
        <li><NavLink to='Java_OOP' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java OOP</NavLink></li>
        <li><NavLink to='Java_Classes/Objects' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Classes/Objects</NavLink></li>
        <li><NavLink to='Java_Class_Attributes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Class Attributes</NavLink></li>
        <li><NavLink to='Java_Class_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Class Methods</NavLink></li>
        <li><NavLink to='Java_Constructors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Constructors</NavLink></li>
        <li><NavLink to='Java_Modifiers' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Modifiers</NavLink></li>
        <li><NavLink to='Java_Encapsulation' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Encapsulation</NavLink></li>
        <li><NavLink to='Java_Packages / API' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Packages / API</NavLink></li>
        <li><NavLink to='Java_Inheritance' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Inheritance</NavLink></li>
        <li><NavLink to='Java_Polymorphism' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Polymorphism</NavLink></li>
        <li><NavLink to='Java_Inner_Classes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Inner Classes</NavLink></li>
        <li><NavLink to='Java_Abstraction' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Abstraction</NavLink></li>
        <li><NavLink to='Java_Interface' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Interface</NavLink></li>
        <li><NavLink to='Java_Enums' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Enums</NavLink></li>
        <li><NavLink to='Java_User_Input' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java User Input</NavLink></li>
        <li><NavLink to='Java_Date' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Date</NavLink></li>
        <li><NavLink to='Java_ArrayList' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java ArrayList</NavLink></li>
        <li><NavLink to='Java_LinkedList' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java LinkedList</NavLink></li>
        <li><NavLink to='Java_HashMap' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java HashMap</NavLink></li>
        <li><NavLink to='Java_HashSet' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java HashSet</NavLink></li>
        <li><NavLink to='Java_Iterator' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Iterator</NavLink></li>
        <li><NavLink to='Java_Wrapper_Classes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Wrapper Classes</NavLink></li>
        <li><NavLink to='Java_Exceptions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Exceptions</NavLink></li>
        <li><NavLink to='Java_RegEx' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java RegEx</NavLink></li>
        <li><NavLink to='Java_Threads' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Threads</NavLink></li>
        <li><NavLink to='Java_Lambda' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Java Lambda</NavLink></li>


        <li><h6 className="text-2xl font-bold pt-4 dark:text-white">JS MCQ</h6></li>
        <li><NavLink to='Java_Qize' className={` block  px-3 pb-12 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Java MCQ Test</NavLink></li>
      </ul>
      {/* </BrowserRouter> */}
   </div>
</aside>
    </div>
  )
}

export default JavaNavbar
