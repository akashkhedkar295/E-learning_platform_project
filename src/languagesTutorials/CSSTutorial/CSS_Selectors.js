import React from 'react'
import  Editor from '@monaco-editor/react'

const CSS_Selectors = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Syntax</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>A CSS selector selects the HTML element{`(s)`} you want to style.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Selectors</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>CSS selectors are used to "find" {`(or select)`} the HTML elements you want to style.</li><br/>
          <li>We can divide CSS selectors into five categories:</li><br/>
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Simple selectors (select elements based on name, id, class)</li>
          <li>Combinator selectors (select elements based on a specific relationship between them)</li>
          <li>Pseudo-class selectors (select elements based on a certain state)</li>
          <li>Pseudo-elements selectors (select and style a part of an element)</li>
          <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
        </ul></li><br/>
          <li>This page will explain the most basic CSS selectors.</li>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS element Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The element selector selects HTML elements based on the element name.</li>
        </ul>
      </div>
      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>CSS Example</h2>
    
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file3.css'
        value={`p {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS id Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The id selector uses the id attribute of an HTML element to select a specific element.</li><br/>
          <li>The id of an element is unique within a page, so the id selector is used to select one unique element!</li><br/>
          <li>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>In this example all {`<p>`} elements will be center-aligned, with a red text color:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file4.css'
        value={`#para1 {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div>


{/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
<div className="bg-[#ffffcc] rounded-md p-6  my-16 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        <strong className="font-semibold ">Note:</strong> An id name cannot start with a number!
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS id Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The class selector selects HTML elements with a specific class attribute.</li><br/>
          
          <li>To select elements with a specific class, write a period (.) character, followed by the class name.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>In this example all HTML elements with class="center" will be red and center-aligned: </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file5.css'
        value={`.center {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div>

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can also specify that only specific HTML elements should be affected by a class.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>In this example only {`<p>`} elements with class="center" will be red and center-aligned: </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file66.css'
        value={`p.center {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div>

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>HTML elements can also refer to more than one class.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>In this example the {`<p>`} element will be styled according to class="center" and to class="large": </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${18*2}px`}
        defaultLanguage='html'
        path='file10.html'
        value={`<p class="center large">This paragraph refers to two classes.</p>`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div>

      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
<div className="bg-[#ffffcc] rounded-md p-6  my-16 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        <strong className="font-semibold ">Note:</strong> A class name cannot start with a number!
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />



      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS Universal Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
         
          <li>The universal selector (*) selects all HTML elements on the page.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>The CSS rule below will affect every HTML element on the page: </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file7.css'
        value={`* {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS Grouping Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The grouping selector selects all the HTML elements with the same style definitions.</li><br/>
          
          <li>Look at the following CSS code (the h1, h2, and p elements have the same style definitions): </li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      
      <div className="ed px-12  py-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${162*2}px`}
        defaultLanguage='css'
        path='file9.css'
        value={`h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div>

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS Universal Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
         <li>It will be better to group the selectors, to minimize the code.</li>
          <li>To group selectors, separate each selector with a comma.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>In this example we have grouped the selectors from the code above: </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file11.css'
        value={`h1, h2, p {
  text-align: center;
  color: red;
}`}
 options={
  {readOnly:true,
    fontSize: "17px",
    hideCursorInOverviewRuler: true,
    scrollbar: {
      vertical:"hidden",
      handleMouseWheel:false,
  },
  }

}
 />
      </div>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      <h2 className={`text-4xl py-6 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} pb-3`}>All CSS Simple Selectors</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      
          <table className={`w-full text-lg text-left rtl:text-right ${!props.dark === 'dark' ? 'text-gray-500' : 'dark:text-gray-400'}`}>
              <thead className={`text-xs ${props.dark === 'dark' ? 'dark:bg-gray-700 dark:text-gray-400': 'text-gray-700 bg-gray-200 '}  uppercase  `}>
                  <tr>
                      <th scope="col" className="px-6 py-3">    
                      Selector
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Example
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Example description
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      #id
                      </td>
                      <td className="px-6 py-4">
                      #firstname
                      </td>
                      <td className="px-6 py-4">
                      Selects the element with id="firstname"
                      </td>
                      
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      .class
                      </td>
                      <td className="px-6 py-4">
                      .intro
                      </td>
                      <td className="px-6 py-4">
                      Selects all elements with class="intro"
                      </td>
                       
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      element.class
                      </td>
                      <td className="px-6 py-4">
                      p.intro
                      </td>
                      <td className="px-6 py-4">
                      Selects only {`<p>`} elements with class="intro"
                      </td>
                       
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      *
                      </td>
                      <td className="px-6 py-4">
                      *
                      </td>
                      <td className="px-6 py-4">
                      Selects all elements
                      </td>
                       
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      element
                      </td>
                      <td className="px-6 py-4">
                      p
                      </td>
                      <td className="px-6 py-4">
                      Selects all {`<p>`} elements
                      </td>
                       
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      element,element,..
                      </td>
                      <td className="px-6 py-4">
                      div, p
                      </td>
                      <td className="px-6 py-4">
                      Selects all {`<div>`} elements and all {`<p>`} elements
                      </td>
                       
                  </tr>
              </tbody>
          </table>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    </div>
  )
}

export default CSS_Selectors
