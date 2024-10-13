import React from 'react'
import  Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'

const CSS_Margins = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Margins</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>Margins are used to create space around elements, outside of any defined borders.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    <div className="w-full bg-transparent">
    <p className={`tracking-wide py-4 px-5 m-20 border ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>This element has a margin of 70px.</p>
    </div>
    <Link href="https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_intro">
     <button  class="text-white text-base bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 my-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try It Yourself </button>
    </Link>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Margins</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The CSS <span className=' text-red-400'>margin</span> properties are used to create space around elements, outside of any defined borders.</li><br/>         
          <li>With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</li>
        </ul>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Margin - Individual Sides</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>CSS has properties for specifying the margin for each side of an element:</li><br/>
          <li>The following values are allowed:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li><span className=' text-red-400'>margin-top</span></li>
          <li><span className=' text-red-400'>margin-right</span> </li>
          <li><span className=' text-red-400'>margin-bottom</span></li>
          <li><span className=' text-red-400'>margin-left</span></li>
        </ul></li><br/>
        <li>All the margin properties can have the following values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>auto - the browser calculates the margin</li>
          <li>length - specifies a margin in px, pt, cm, etc. </li>
          <li>% - specifies a margin in % of the width of the containing element</li>
          <li>inherit - specifies that the margin should be inherited from the parent element</li>
        </ul></li><br/>
        <li><b>Tip:</b> Negative values are allowed.</li>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Set different margins for all four sides of a {`<p>`} element:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${70*2}px`}
        defaultLanguage='css'
        
        value={`p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Margin - Shorthand Property</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>To shorten the code, it is possible to specify all the margin properties in one property.</li><br/>
          <li>The <span className=' text-red-400'>margin</span> property is a shorthand property for the following individual margin properties:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li><span className=' text-red-400'>margin-top</span></li>
          <li><span className=' text-red-400'>margin-right</span> </li>
          <li><span className=' text-red-400'>margin-bottom</span></li>
          <li><span className=' text-red-400'>margin-left</span></li>
        </ul></li><br/>
        <li>So, here is how it works:</li><br />
        <li>If the <span className=' text-red-400'>margin</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>margin: 25px 50px 75px 100px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>top margin is 25px</li>
              <li>right margin is 50px</li>
              <li>bottom margin is 75px</li>
              <li>left margin is 100px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the margin shorthand property with four values:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`p {
  margin: 25px 50px 75px 100px;
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

      <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>        
        <li>If the <span className=' text-red-400'>margin</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>margin: 25px 50px 75px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>top margin is 25px</li>
              <li>right and left margins are 50px</li>
              <li>bottom margin is 75px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the margin shorthand property with four values:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`p {
  margin: 25px 50px 75px;
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

      <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>        
        <li>If the <span className=' text-red-400'>margin</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>margin: 25px 50px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>top and bottom margins are 25px</li>
              <li>right and left margins are 50px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the margin shorthand property with two values: </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`p {
  margin: 25px 50px;
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The auto Value</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can set the margin property to <span className=' text-red-400'>auto</span> to horizontally center the element within its container.</li><br />
          <li>The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.</li>
         </ul>
      </div> 


      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12 ml-4 py-3 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg list-inside`}>
          <li>Use margin: auto:</li>
         </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${60*2}px`}
        defaultLanguage='css'
        
        value={`div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The inherit Value</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>This example lets the left margin of the {`<p class="ex1">`} element be inherited from the parent element {`(<div>)`}:</li>
         </ul>
      </div> 


      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12 ml-4 py-3 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg list-inside`}>
          <li>Use of the inherit value:</li>
         </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${100*2}px`}
        defaultLanguage='css'
        
        value={`div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
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

      <h2 className={`text-4xl py-6 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} pb-3`}>All CSS Margin Properties</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      
          <table className={`w-full text-lg text-left rtl:text-right ${!props.dark === 'dark' ? 'text-gray-500' : 'dark:text-gray-400'}`}>
              <thead className={`text-xs ${props.dark === 'dark' ? 'dark:bg-gray-700 dark:text-gray-400': 'text-gray-700 bg-gray-200 '}  uppercase  `}>
                  <tr>
                      <th scope="col" className="px-6 py-3">    
                      Property
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Description
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      margin
                      </td>
                      <td className="px-6 py-4">
                      A shorthand property for setting all the margin properties in one declaration
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      margin-bottom
                      </td>
                      <td className="px-6 py-4">
                      Sets the bottom margin of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      margin-left
                      </td>
                      <td className="px-6 py-4">
                      Sets the left margin of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      margin-right
                      </td>
                      <td className="px-6 py-4">
                      Sets the right margin of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      margin-top
                      </td>
                      <td className="px-6 py-4">
                      Sets the top margin of an element
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    </div>
  )
}

export default CSS_Margins
