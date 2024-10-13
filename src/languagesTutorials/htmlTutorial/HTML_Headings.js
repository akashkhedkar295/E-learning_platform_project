import React from 'react'
import  Editor from '@monaco-editor/react'


const HTML_Headings = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>HTML Headings</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>HTML headings are titles or subtitles that you want to display on a webpage.</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
     {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
     
     <div className={`w-full pb-9 ${props.dark ==='dark'? 'bg-gray-600' : 'bg-gray-200'}`}>
     <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Example</h2>
      <div className=" bg-white ed mx-12  ">
         <h1 class="flex items-center text-5xl font-extrabold dark:text-[#00000]">Heading 1</h1>
         <h2 class="text-4xl pb-2 font-bold dark:text-[#00000]">Heading 2</h2>
         <h3 class="text-3xl pb-2 font-bold dark:text-[#00000]">Heading 3</h3>
         <h4 class="text-2xl pb-2 font-bold dark:text-[#00000]">Heading 4</h4>
         <h5 class="text-xl pb-2 font-bold dark:text-[#00000]">Heading 5</h5>
         <h6 class="text-lg pb-2 font-bold dark:text-[#00000]">Heading 6</h6>
      </div>
      </div>

      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // ------------------------------------------------------------- Heading and points part -------------------------------------------------------------------------- */}

      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>HTML Headings</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>HTML headings are defined with the <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h1> `}</span> to  <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h6> `}</span>  tags.</li>
          <li><span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h1> `}</span> defines the most important heading. <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h6> `}</span> defines the least important heading.</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full ${props.dark ==='dark'? 'bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${78*2}px`}
        defaultLanguage='html'
        path='file100.html'
        value={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
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
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        <strong class="font-semibold ">Note:</strong> Browsers automatically add some white space (a margin) before and after a heading.
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // ------------------------------------------------------------- Heading and points part -------------------------------------------------------------------------- */}

      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Headings Are Important</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Search engines use the headings to index the structure and content of your web pages.</li>
          <li>Users often skim a page by its headings. It is important to use headings to show the document structure.</li>
          <li><span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h1> `}</span> headings should be used for main headings, followed by <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h2> `}</span> headings, then the less important <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>{` <h3> `}</span> , and so on. </li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        <strong className="font-semibold ">Note:</strong> Use HTML headings for headings only. Don't use headings to make text <strong className="font-semibold ">BIG</strong>  or <strong className="font-semibold ">bold.</strong>
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

       {/* // ------------------------------------------------------------- Heading and points part -------------------------------------------------------------------------- */}

       <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Bigger Headings</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Each HTML heading has a default size. However, you can specify the size for any heading with the <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>style</span> attribute, using the CSS <span className={`${props.dark === 'dark' ? 'dark:bg-red-200': ' bg-red-100'} text-red-800 `}>font-size</span> property:</li>
        </ul>
      </div>

       {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
       <div className={`w-full ${props.dark ==='dark'? 'bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${20*2}px`}
        defaultLanguage='html'
        path='file99.html'
        value={`<h1 style="font-size:60px;">Heading 1</h1>`}
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
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>HTML Tag Reference</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>W3Schools' tag reference contains additional information about these tags and their attributes.</li>
        </ul>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className={`w-full text-lg text-left rtl:text-right ${!props.dark === 'dark' ? 'text-gray-500' : 'dark:text-gray-400'}`}>
              <thead className={`text-xs ${props.dark === 'dark' ? 'dark:bg-gray-700 dark:text-gray-400': 'text-gray-700 bg-gray-200 '}  uppercase  `}>
                  <tr>
                      <th scope="col" className="px-6 py-3">    
                            Tag
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Description
                      </th>
                     
                  </tr>
              </thead>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          {`<html>`}
                      </td>
                      <td className="px-6 py-4">
                      Defines the root of an HTML document
                      </td>
                      
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          {`<body>`}
                      </td>
                      <td className="px-6 py-4">
                      Defines the document's body
                      </td>
                       
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          {`<h1> to <h6>`}
                      </td>
                      <td className="px-6 py-4">
                      Defines HTML headings
                      </td>
                       
                  </tr>
              </tbody>
          </table>
      </div>

{/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
<div className="bg-[#ffffcc] rounded-md p-6 my-12 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        For a complete list of all available HTML tags, visit our HTML Tag Reference.
        </p>
      </div>
      
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    </div>
  )
}

export default HTML_Headings
