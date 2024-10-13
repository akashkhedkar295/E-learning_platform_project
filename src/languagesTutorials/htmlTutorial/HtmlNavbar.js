import React from 'react'
import {NavLink} from "react-router-dom";

const HtmlNavbar = () => {

  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-24 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="left-0 z-40 w-56 h-screen transition-transform -translate-x-full  sm:translate-x-0 overflow-y-scroll scrollbar-hide" aria-label="Sidebar">
   <div className="h-full md:py-4 overflow-y-auto scrollbar-hide bg-gray-800">
    {/* <BrowserRouter> */}
      <ul className="space-y-2 pl-6 pt-20 font-medium">
        <li><h6 className="text-2xl font-bold py-3 text-white">HTML Tutorial</h6></li>
        <li><NavLink to='' className={` bblock py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>HTML Intoduction </NavLink></li>
        <li><NavLink to='HTML_Editors' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Editors</NavLink></li>    
        <li><NavLink to='HTML_Headings' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Headings</NavLink></li>

        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Basic</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Elements</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Attributes</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Paragraphs</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Styles</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Formatting</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Quotations</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Comments</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Colors</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML CSS</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Links</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Images</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Favicon</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Page Title</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Tables</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Lists</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Block & Inline</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Div</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Classes</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Id</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Iframes</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML JavaScript</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML File Paths</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Head</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Layout</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Responsive</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Computercode</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Semantics</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Style Guide</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Entities</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Symbols</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Emojis</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Charsets</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML URL Encode</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML vs. XHTML</NavLink></li>

        <li><h6 className="text-2xl font-bold py-3 text-white">HTML Forms</h6></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Forms</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Form Attributes</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Form Elements</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Input Types</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Input Attributes</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Input Form Attributes</NavLink></li>

        <h6 className="text-2xl font-bold py-3 text-white">HTML Graphics</h6>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Canvas</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML SVG</NavLink></li>
      
        <h6 className="text-2xl font-bold py-3 text-white">HTML Media</h6>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Media</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Video</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Audio</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Plug-ins</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML YouTube</NavLink></li>

        <h6 className="text-2xl font-bold py-3 text-white">HTML APIs</h6>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Geolocation</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Drag/Drop</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Web Storage</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML Web Workers</NavLink></li>
        <li><NavLink href='/' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML SSE</NavLink></li>
        
    
        <li><NavLink to='/HTML_Tutorials/HTML_Qize' className={` block py-2 px-3  rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}  >HTML MCQ Test</NavLink></li>    

      </ul>
      {/* </BrowserRouter> */}
   </div>
</aside>
    </div>
  )
}

export default HtmlNavbar
