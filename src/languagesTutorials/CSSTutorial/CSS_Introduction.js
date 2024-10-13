import React from 'react'
import  Editor from '@monaco-editor/react'

const CSS_Introduction = (props) => {
  return (
    // -------------------------------------------------------------Top Heading part --------------------------------------------------------------------------
    <div className="container p-8 pt-28 space-y-4">
      <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Introduction</h1>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>CSS is the language we use to style a Web page.</p>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------head and order list part -------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>What is CSS?</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
          <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
          <li>External stylesheets are stored in CSS files</li>
        </ul>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />


    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
    <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Why Use CSS?</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
     
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>CSS Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${160*2}px`}
        defaultLanguage='css'
        path='file1.css'
        value={`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} pb-3 `}>CSS Solved a Big Problem</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The purpose of a web browser {`(Chrome, Edge, Firefox, Safari)`} is to read HTML documents and display them correctly.</li><br/>
          <li>HTML was NEVER intended to contain tags for formatting a web page!</li><br/>
          <li>HTML was created to describe the content of a web page, like:,/</li>  <br/>       
          <li>{`<h1>`}This is a heading{`</h1>`}</li><br/>
          <li>{`<p>`}This is a paragraph.{`</p>`}</li><br/>
          <li>When tags like {`<font>`}, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</li>
          <li>To solve this problem, the World Wide Web Consortium {`(W3C)`} created CSS.</li><br/>
          <li>CSS removed the style formatting from the HTML page!</li><br/>
        </ul>
      </div>

       {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
       <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        If you don't know what HTML is, we suggest that you read our HTML Tutorial.
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Saves a Lot of Work!</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The style definitions are normally saved in external .css files.</li><br/>
          <li>With an external stylesheet file, you can change the look of an entire website by changing just one file!</li><br/>
          
        </ul>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      </div>
  )
}

export default CSS_Introduction
