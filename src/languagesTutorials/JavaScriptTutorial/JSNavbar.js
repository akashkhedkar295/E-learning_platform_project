import React from 'react'
import {NavLink} from "react-router-dom";

const JSNavbar = () => {
  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="left-0 z-40 w-56 h-screen  transition-transform -translate-x-full md:translate-x-0 overflow-y-scroll scrollbar-hide" aria-label="Sidebar">
   <div className="h-full py-4 overflow-y-auto scrollbar-hide bg-gray-800">
    {/* <BrowserRouter> */}
      <ul className="space-y-2 pl-6 pt-20 font-medium">
        <li><h6 className="text-2xl font-bold py-3 text-white">JS Tutorial</h6></li>
        <li><NavLink to='' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Introduction</NavLink></li>
        <li><NavLink to='JS_Where_To' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Where To</NavLink></li>
        <li><NavLink to='JS_Output' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Output</NavLink></li>
        <li><NavLink to='JS_Statements' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Statements</NavLink></li>
        <li><NavLink to='JS_Syntax' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Syntax</NavLink></li>
        <li><NavLink to='JS_Comments' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Comments</NavLink></li>
        <li><NavLink to='JS_Variables' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Variables</NavLink></li>
        <li><NavLink to='JS_Let' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Let</NavLink></li>
        <li><NavLink to='JS_Const' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Const</NavLink></li>
        <li><NavLink to='JS_Operators' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Operators</NavLink></li>
        <li><NavLink to='JS_Arithmetic' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Arithmetic</NavLink></li>
        <li><NavLink to='JS_Assignment' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Assignment</NavLink></li>
        <li><NavLink to='JS_Data_[Types' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Data Types</NavLink></li>
        <li><NavLink to='JS_Functions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Functions</NavLink></li>
        <li><NavLink to='JS_Objects' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Objects</NavLink></li>
        <li><NavLink to='JS_Events' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Events</NavLink></li>
        <li><NavLink to='JS_Strings' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Strings</NavLink></li>
        <li><NavLink to='JS_String_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS String Methods</NavLink></li>
        <li><NavLink to='JS_String_Search' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS String Search</NavLink></li>
        <li><NavLink to='JS_String_Templates' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS String Templates</NavLink></li>
        <li><NavLink to='JS_Numbers' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Numbers</NavLink></li>
        <li><NavLink to='JS_BigInt' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS BigInt</NavLink></li>
        <li><NavLink to='JS_Number_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Number Methods</NavLink></li>
        <li><NavLink to='JS_Number_Properties' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Number Properties</NavLink></li>
        <li><NavLink to='JS_Arrays' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Arrays</NavLink></li>
        <li><NavLink to='JS_Array_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Array Methods</NavLink></li>
        <li><NavLink to='JS_Array_Search' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Array Search</NavLink></li>
        <li><NavLink to='JS_Array_Sort' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Array Sort</NavLink></li>
        <li><NavLink to='JS_Array_Iteration' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Array Iteration</NavLink></li>
        <li><NavLink to='JS_Array_Const' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Array Const</NavLink></li>
        <li><NavLink to='JS_Dates' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Dates</NavLink></li>
        <li><NavLink to='JS_Date_Formats' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Date Formats</NavLink></li>
        <li><NavLink to='JS_Date_Get_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Date Get Methods</NavLink></li>
        <li><NavLink to='JS_Date Set Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Date Set Methods</NavLink></li>
        <li><NavLink to='JS_Math' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Math</NavLink></li>
        <li><NavLink to='JS_Random' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Random</NavLink></li>
        <li><NavLink to='JS_Booleans' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Booleans</NavLink></li>
        <li><NavLink to='JS_Comparisons' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Comparisons</NavLink></li>
        <li><NavLink to='JS_If_Else' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS If Else</NavLink></li>
        <li><NavLink to='JS_Switch' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Switch</NavLink></li>
        <li><NavLink to='JS_Loop_For' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Loop For</NavLink></li>
        <li><NavLink to='JS_Loop_For_In' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Loop For In</NavLink></li>
        <li><NavLink to='JS_Loop_For_Of' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Loop For Of</NavLink></li>
        <li><NavLink to='JS_Loop_While' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Loop While</NavLink></li>
        <li><NavLink to='JS_Break' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Break</NavLink></li>
        <li><NavLink to='JS_Iterables' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Iterables</NavLink></li>
        <li><NavLink to='JS_Sets' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Sets</NavLink></li>
        <li><NavLink to='JS_Maps' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Maps</NavLink></li>
        <li><NavLink to='JS_Typeof' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Typeof</NavLink></li>
        <li><NavLink to='JS_Type_Conversion' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Type Conversion</NavLink></li>
        <li><NavLink to='JS_Bitwise' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Bitwise</NavLink></li>
        <li><NavLink to='JS_RegExp' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS RegExp</NavLink></li>
        <li><NavLink to='JS_Precedence' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Precedence</NavLink></li>
        <li><NavLink to='JS_Errors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Errors</NavLink></li>
        <li><NavLink to='JS_Scope' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Scope</NavLink></li>
        <li><NavLink to='JS_Hoisting' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Hoisting</NavLink></li>
        <li><NavLink to='JS_Strict_Mode' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Strict Mode</NavLink></li>
        <li><NavLink to='JS_this_Keyword' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS this Keyword</NavLink></li>
        <li><NavLink to='JS_Arrow_Function' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Arrow Function</NavLink></li>
        <li><NavLink to='JS_Classes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Classes</NavLink></li>
        <li><NavLink to='JS_Modules' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Modules</NavLink></li>
        <li><NavLink to='JS_JSON' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS JSON</NavLink></li>
        <li><NavLink to='JS_Debugging' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Debugging</NavLink></li>
        <li><NavLink to='JS_Style_Guide' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Style Guide</NavLink></li>
        <li><NavLink to='JS_Best Practices' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Best Practices</NavLink></li>
        <li><NavLink to='JS_Mistakes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Mistakes</NavLink></li>
        <li><NavLink to='JS_Performance' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Performance</NavLink></li>
        <li><NavLink to='JS_Reserved_Words' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>JS Reserved Words</NavLink></li>
        
        
        <li><h6 className="text-2xl font-bold py-3 text-white">JS Objects</h6></li>
        <li><NavLink to='Object_Definitions' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Definitions</NavLink></li>
        <li><NavLink to='Object_Properties' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Properties</NavLink></li>
        <li><NavLink to='Object_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Methods</NavLink></li>
        <li><NavLink to='Object_Display' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Display</NavLink></li>
        <li><NavLink to='Object_Accessors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Accessors</NavLink></li>
        <li><NavLink to='Object_Constructors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Constructors</NavLink></li>
        <li><NavLink to='Object_Prototypes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Prototypes</NavLink></li>
        <li><NavLink to='Object_Iterables' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Iterables</NavLink></li>
        <li><NavLink to='Object_Sets' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Sets</NavLink></li>
        <li><NavLink to='Object_Maps' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Maps</NavLink></li>
        <li><NavLink to='Object_Reference' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>Object Reference</NavLink></li>

        <li><h6 className="text-2xl font-bold py-3 text-white">JS HTML DOM</h6></li>
        <li><NavLink to='DOM_Intro' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Intro </NavLink></li>
        <li><NavLink to='DOM_Methods' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Methods</NavLink></li>
        <li><NavLink to='DOM_Document' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Document</NavLink></li>
        <li><NavLink to='DOM_Elements' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Elements</NavLink></li>
        <li><NavLink to='DOM_HTML' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM HTML</NavLink></li>
        <li><NavLink to='DOM_Forms' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Forms</NavLink></li>
        <li><NavLink to='DOM_CSS' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM CSS</NavLink></li>
        <li><NavLink to='DOM_Animations' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Animations</NavLink></li>
        <li><NavLink to='DOM_Events' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Events</NavLink></li>
        <li><NavLink to='DOM_Event_Listener' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Event Listener</NavLink></li>
        <li><NavLink to='DOM_Navigation' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Navigation</NavLink></li>
        <li><NavLink to='DOM_Nodes' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Nodes</NavLink></li>
        <li><NavLink to='DOM_Collections' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Collections</NavLink></li>
        <li><NavLink to='DOM_Node_Lists' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>DOM Node Lists</NavLink></li>

        <li><h6 className="text-2xl font-bold pt-4 dark:text-white">JS MCQ</h6></li>
        <li><NavLink to='JS_Qize' className={` block  px-3 pb-12 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>JS MCQ Test</NavLink></li>
      </ul>
      {/* </BrowserRouter> */}
   </div>
</aside>
    </div>
  )
}

export default JSNavbar
