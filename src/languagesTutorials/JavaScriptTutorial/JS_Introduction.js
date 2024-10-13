import React, { useEffect, useState } from 'react'
import  Editor from '@monaco-editor/react'

const JS_Introduction = (props) => {
  const [imgSrc, setImgSrc]=useState('https://www.w3schools.com/js/pic_bulboff.gif');
  const code = `<!DOCTYPE html>
  <html>
  <body>
      <button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'">Turn on the light</button>
  
  <img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:100px">
  
  <button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'">Turn off the light</button>
  
  </body>
  </html>`;

  // document.getElementById('OutPutHTML').contentDocument.body.innerHTML=code;
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>JavaScript Introduction</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>This page contains some examples of what JavaScript can do.</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
    <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>JavaScript Can Change HTML Content</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>One of many JavaScript HTML methods is <span className=' text-red-400'>getElementById()</span> .</li><br />
          <li>The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${20*2}px`}
        defaultLanguage='javascript'
        value={`document.getElementById("demo").innerHTML = "Hello JavaScript";`}
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
<div className="bg-[#ffffcc] rounded-md p-6 my-12 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        JavaScript accepts both double and single quotes:
        </p>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${20*2}px`}
        defaultLanguage='javascript'
        value={`document.getElementById('demo').innerHTML = 'Hello JavaScript';`}
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>JavaScript Can Change HTML Attribute Values</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>In this example JavaScript changes the value of the <span className=' text-red-400'>src</span> (source) attribute of an <span className=' text-red-400'>{`<img>`}</span> tag:</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
     
      <div className={`w-full pb-12 ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <div className=" bg-white  mx-12 pb-7 ">
        <iframe id='OutPutHTML' className=" bg-white ed mx-12 pb-7 h-[250px] w-[400px]" srcDoc={code} frameborder="0"></iframe>
      </div>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
    <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>JavaScript Can Change HTML Styles (CSS)</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Changing the style of an HTML element, is a variant of changing an HTML attribute:</li>
        </ul>
      </div>
      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${20*2}px`}
        defaultLanguage='javascript'
        value={`document.getElementById("demo").style.fontSize = "35px";`}
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>JavaScript Can hide HTML Elements</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Hiding HTML elements can be done by changing the <span className=' text-red-400'>display</span> style:</li>
        </ul>
      </div>
      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${20*2}px`}
        defaultLanguage='javascript'
        value={`document.getElementById("demo").style.display = "none";`}
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>JavaScript Can Show HTML Elements</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Showing hidden HTML elements can also be done by changing the  <span className=' text-red-400'>display</span> style:</li>
        </ul>
      </div>
      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${20*2}px`}
        defaultLanguage='javascript'
        value={`document.getElementById("demo").style.display = "block";`}
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

      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 ">
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} pb-4`}>Did You Know?</h2>
        <ul className={`space-y-1 ml-4 ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'}  md:text-lg list-inside`}>
          <li>JavaScript and Java are completely different languages, both in concept and design.</li>
          <li>JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.</li>
          <li>ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.</li>
        </ul>
      </div>
      </div>

    </div>
  )
}

export default JS_Introduction
