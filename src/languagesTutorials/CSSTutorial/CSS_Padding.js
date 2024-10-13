import React from 'react'
import  Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'

const CSS_Padding = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Padding</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>Padding is used to create space around an element's content, inside of any defined borders.



</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    <div className="w-full bg-transparent">
    <p className={`tracking-wide  p-20 border ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>This element has a margin of 70px.</p>
    </div>
    <Link href="https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_intro">
     <button  class="text-white text-base bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 my-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try It Yourself </button>
    </Link>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

     {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Margins</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The CSS <span className=' text-red-400'>padding</span> properties are used to generate space around an element's content, inside of any defined borders.</li><br/>         
          <li>With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

</li>
        </ul>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Padding - Individual Sides</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
         
          <li>CSS has properties for specifying the padding for each side of an element:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li><span className=' text-red-400'>padding-top</span></li>
          <li><span className=' text-red-400'>padding-right</span> </li>
          <li><span className=' text-red-400'>padding-bottom</span></li>
          <li><span className=' text-red-400'>padding-left</span></li>
        </ul></li><br/>
        <li>All the margin properties can have the following values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>auto - the browser calculates the margin</li>
          <li>length - specifies a padding in px, pt, cm, etc. </li>
          <li>% - specifies a padding in % of the width of the containing element</li>
          <li>inherit - specifies that the padding should be inherited from the parent element</li>
        </ul></li><br/>
        <li><b>Note:</b> Negative values are not allowed.</li>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Set different padding for all four sides of a {`<div>`} element:  </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${70*2}px`}
        defaultLanguage='css'
        
        value={`div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Padding - Shorthand Property</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>To shorten the code, it is possible to specify all the padding properties in one property.</li><br/>
          <li>The <span className=' text-red-400'>padding</span>  property is a shorthand property for the following individual padding properties:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li><span className=' text-red-400'>padding-top</span></li>
          <li><span className=' text-red-400'>padding-right</span> </li>
          <li><span className=' text-red-400'>padding-bottom</span></li>
          <li><span className=' text-red-400'>padding-left</span></li>
        </ul></li><br/>
        <li>So, here is how it works:</li><br />
        <li>If the <span className=' text-red-400'>margin</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>padding: 25px 50px 75px 100px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>top padding is 25px</li>
              <li>right padding is 50px</li>
              <li>bottom padding is 75px</li>
              <li>left padding is 100px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the padding shorthand property with four values:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`div {
  padding: 25px 50px 75px 100px;
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
        <li>If the <span className=' text-red-400'>padding</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>padding: 25px 50px 75px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>top padding is 25px</li>
              <li>right and left paddings are 50px</li>
              <li>bottom padding is 75px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the padding shorthand property with three values: </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`div {
  padding: 25px 50px 75px;
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
        <li>If the <span className=' text-red-400'>padding</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>padding: 25px 50px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>top and bottom paddings are 25px</li>
              <li>right and left paddings are 50px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the padding shorthand property with two values:  </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`div {
  padding: 25px 50px;
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
        <li>If the <span className=' text-red-400'>padding</span> property has four values:</li><br />
        <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4   md:text-lg list-inside`}>
          <li><b>padding: 25px;</b></li>
          <li><li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
              <li>all four paddings are 25px</li>
        </ul></li></li>
        </ul></li><br/>
        </ul>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the padding shorthand property with one value:   </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`div {
  padding: 25px;
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
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Padding and Element Width</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The CSS <span className=' text-red-400'>width</span> property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model).</li><br />
          <li>So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.</li>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Here, the {`<div>`} element is given a width of 300px. However, the actual width of the {`<div>`} element will be 350px (300px + 25px of left padding + 25px of right padding):</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        
        value={`div {
  width: 300px;
  padding: 25px;
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
          <li>To keep the width at 300px, no matter the amount of padding, you can use the <span className=' text-red-400'>box-sizing</span> property. This causes the element to maintain its actual width; if you increase the padding, the available content space will decrease.</li>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Use the box-sizing property to keep the width at 300px, no matter the amount of padding:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${60*2}px`}
        defaultLanguage='css'
        
        value={`div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
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
                      padding
                      </td>
                      <td className="px-6 py-4">
                      A shorthand property for setting all the padding properties in one declaration
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      padding-bottom
                      </td>
                      <td className="px-6 py-4">
                      Sets the bottom padding of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      padding-left
                      </td>
                      <td className="px-6 py-4">
                      Sets the left padding of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      padding-right
                      </td>
                      <td className="px-6 py-4">
                      Sets the right padding of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      padding-top
                      </td>
                      <td className="px-6 py-4">
                      Sets the top padding of an element
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    </div>
  )
}

export default CSS_Padding
