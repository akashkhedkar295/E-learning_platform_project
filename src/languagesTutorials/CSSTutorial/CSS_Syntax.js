import React from 'react'
import  Editor from '@monaco-editor/react'

const CSS_Syntax = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Syntax</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>A CSS rule consists of a selector and a declaration block.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

 {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Syntax</h2>
      <div className="py-4">
        <img src="https://www.w3schools.com/css/img_selector.gif" alt="window" />
      </div>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The selector points to the HTML element you want to style.</li><br/>
          <li>The declaration block contains one or more declarations separated by semicolons.</li><br/>
          <li>Each declaration includes a CSS property name and a value, separated by a colon.</li><br/>
          <li>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<h2 className={`text-4xl ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>A Simple HTML Document</h2>
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12 ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-3 md:text-lg list-inside`}>
          <li>In this example all {`<p>`} elements will be center-aligned, with a red text color:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        path='file2.css'
        value={`p {
  color: red;
  text-align: center;
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

      {/* // -------------------------------------------------------------Example heading and points -------------------------------------------------------------------------- */}
      <div className="explained  space-y-3">
      <h2 className={`text-3xl ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`}>Example Explained</h2>
      <ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4 list-disc md:text-lg list-inside `}>
         <li><span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{`p`}</span>  is a selector in CSS {`(it points to the HTML element you want to style: <p>)`}.</li>
         <li><span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>color</span> is a property, and <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>red</span> is the property value</li>
        <li><span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>text-align</span> is a property, and<span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>center</span> is the property value</li>
      </ul>
      </div> 
      
      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        You will learn much more about CSS selectors and CSS properties in the next chapters!
        </p>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    </div>
  )
}

export default CSS_Syntax
