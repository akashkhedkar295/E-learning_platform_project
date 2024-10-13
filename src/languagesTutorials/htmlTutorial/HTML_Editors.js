import React from 'react'
import Editor from '@monaco-editor/react'

const HTML_Editors = (props) => {
  return (
    // -------------------------------------------------------------Top Heading part --------------------------------------------------------------------------
    <div className="container p-8 pt-28 space-y-4">
      <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>HTML Editors</h1>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>A simple text editor is all you need to learn HTML.</p>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>Learn HTML Using Notepad or TextEdit</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Web pages can be created and modified by using professional HTML editors.</li>
          <li>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</li>
          <li>We believe that using a simple text editor is a good way to learn HTML.</li>
          <li>Follow the steps below to create your first web page with Notepad or TextEdit.</li>
        </ul>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>Step 1: Open Notepad (PC)</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li><b>Windows 8 or later:</b></li>
          <li>Open the <b>Start Screen </b> (the window symbol at the bottom left on your screen). Type <b> Notepad. </b></li>
          <li> <b>Windows 7 or earlier: </b></li>
          <li>Open  <b>Start {`> Programs > Accessories > Notepad`}</b></li>
        </ul>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
      <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>Step 1: Open TextEdit (Mac)</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
        <li>Open  <b>Start {`> Finder > Applications > TextEdit`}</b></li>
          <li>Also change some preferences to get the application to save files correctly.In<b> Preferences{` > Format > `}</b>choose <b> "Plain Text"</b></li>
          <li>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text</li>
          <li><b>Then open a new document to place the code.</b></li>
        </ul>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
       {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
       <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>Step 2: Write Some HTML</h2>
       <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Write or copy the following HTML code into Notepad:</li>
        </ul>
      <div className={`w-full ${props.dark ==='dark'? 'bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${124*2}px`}
        defaultLanguage='html'
        path='file.html'
        value={`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`}
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
      {/* // -------------------------------------------------------------Image part -------------------------------------------------------------------------- */}
      <div className="pl-8">
        <img src="https://www.w3schools.com/html/img_notepad.png" alt="window" />
        
        
        
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
      <div className=" w-full">
        <hr className='mt-10' />

      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>Step 3: Save the HTML Page</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Save the file on your computer. Select <b> File {`>`} Save as </b> in the Notepad menu.</li>
          <li>Name the file  <b> "index.htm" </b> and set the encoding to  <b>UTF-8 </b> (which is the preferred encoding for HTML files).</li>
        </ul>
      </div>
      {/* // -------------------------------------------------------------Image part -------------------------------------------------------------------------- */}
      <div className="pl-4">
        <img src="https://www.w3schools.com/html/img_saveas.png" alt="window" />
      </div>
      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        <b> Tip: </b> You can use either .htm or .html as file extension. There is no difference; it is up to you.        </p>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <hr className='mt-10' />

      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>Step 4: View the HTML Page in Your Browser</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
        <li>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</li>

        <li>The result will look much like this:</li>
        </ul>
      </div>
       {/* // -------------------------------------------------------------Image part -------------------------------------------------------------------------- */}
       <div className="pl-4">
        <img src="https://www.w3schools.com/html/img_chrome.png" alt="window" />
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <hr className='mt-10' />

      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-4`}>W3Schools Online Editor - "Try it Yourself"</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
        <li>With our free online editor, you can edit the HTML code and view the result in your browser.

</li>

        <li>It is the perfect tool when you want to test code fast. It also has color coding and the ability to save and share code with others:

</li>
        </ul>
      </div>
      <div className={`w-full ${props.dark ==='dark'? 'bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Example</h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${120*2}px`}
        defaultLanguage='html'
        path='file.html'
        value={`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
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
      </div>
  )
}

export default HTML_Editors
