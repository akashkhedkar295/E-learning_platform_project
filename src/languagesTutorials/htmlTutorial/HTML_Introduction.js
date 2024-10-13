import React from 'react'
import  Editor from '@monaco-editor/react'

const HTML_Introduction = (props) => {
    console.log("hello it is "+props.dark);
  const code=`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;
  return (
// -------------------------------------------------------------Top Heading part --------------------------------------------------------------------------
    <div className="container pt-28 md:p-8 space-y-4">
      <h1 className={`text-5xl pt-28 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>HTML Introduction</h1>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>HTML is the standard markup language for creating Web pages.</p>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      {/* // -------------------------------------------------------------head and order list part -------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>What is HTML?</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
        </ul>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      <h2 className={`text-4xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>A Simple HTML Document</h2>
      <div className={`w-full ${props.dark ==='dark'? 'bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${144*2}px`}
        defaultLanguage='html'
        path='file.html'
        value={code}
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
      <h2 className={`text-3xl ${props.dark ==='dark'?'text-white':'text-[#00000]'}`}>Example Explained</h2>
      <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4 list-disc md:text-lg list-inside `}>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<!DOCTYPE html>`}</span> declaration defines that this document is an HTML5 document</li>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<html>`}</span> element is the root element of an HTML page </li>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<head>`}</span> element contains meta information about the HTML page </li>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<title>`}</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<body>`}</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. </li>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<h1>`}</span> element defines a large heading</li>
         <li>The <span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<p>`}</span> element defines a paragraph</li>
      </ul>
      </div><hr />

      {/* // ------------------------------------------------------------- Heading and points part -------------------------------------------------------------------------- */}

      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>What is HTML?</h2>
        <ul className={`space-y-1 ml-4 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg list-inside`}>
          <li>An HTML element is defined by a start tag, some content, and an end tag:</li>
          <li><span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<tagname>`}</span> Content goes here... {`</tagname>`}</li>
          <li>The HTML element is everything from the start tag to the end tag:</li>
          <li><span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<h1>`}</span>My First Heading{`</h1>`}`</li>
          <li><span className={`${props.dark === 'dark' ? 'bg-red-200': ' bg-red-100'} text-red-800 `}>{`<p>`}</span>My first paragraph.{`</p>`}</li>
        </ul>
      </div><hr />

      {/* // -------------------------------------------------------------table view part -------------------------------------------------------------------------- */}
      <div className="relative  shadow-md sm:rounded-lg">
          <table className={`w-full text-lg text-left rtl:text-right ${!props.dark === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              <thead className={`text-xs ${props.dark === 'dark' ? 'bg-gray-700 text-gray-400': 'text-gray-700 bg-gray-200 '}  uppercase  `}>
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Color
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' bg-gray-900 border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>   
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' bg-gray-900 border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>   
                  </tr>
              </tbody>
          </table>
      </div>

      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        {`Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!`}
        </p>
      </div><hr />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Web Browsers</h2>
        <ul className={`space-y-1 ml-4 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg list-inside`}>
          <li>The purpose of a web browser {`(Chrome, Edge, Firefox, Safari)`} is to read HTML documents and display them correctly.</li>
          <li>A browser does not display the HTML tags, but uses them to determine how to display the document:</li>
          <li>The HTML element is everything from the start tag to the end tag:</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Image part -------------------------------------------------------------------------- */}
      <div className="">
        <img src="https://www.w3schools.com/html/img_chrome.png" alt="window" />
      </div>
      {/* // -------------------------------------------------------------End-------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>HTML History</h2>
        <ul className={`space-y-1 ml-4 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg list-inside`}>
          <li>Since the early days of the World Wide Web, there have been many versions of HTML:</li>
        </ul>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className={`w-full text-lg text-left rtl:text-right ${!props.dark === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              <thead className={`text-xs ${props.dark === 'dark' ? 'bg-gray-700 text-gray-400': 'text-gray-700 bg-gray-200 '}  uppercase  `}>
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Color
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' bg-gray-900 border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>   
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' bg-gray-900 border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>   
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default HTML_Introduction
