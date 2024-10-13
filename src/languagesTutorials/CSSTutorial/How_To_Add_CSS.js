import React from 'react'
import  Editor from '@monaco-editor/react'

const How_To_Add_CSS = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>How To Add CSS</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Three Ways to Insert CSS</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>There are three ways of inserting a style sheet:</li><br/>
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>External CSS</li>
          <li>Internal CSS</li>
          <li>Inline CSS</li>
        </ul></li><br/>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>External CSS</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>With an external style sheet, you can change the look of an entire website by changing just one file!</li><br/>
          <li>Each HTML page must include a reference to the external style sheet file inside the {`<link>`} element, inside the head section.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>The CSS element Selector</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>With an external style sheet, you can change the look of an entire website by changing just one file!</li><br/>
          <li>Each HTML page must include a reference to the external style sheet file inside the {`<link>`} element, inside the head section.</li>
        </ul>
      </div>
      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>External styles are defined within the {`<link `}element, inside the {`<head>`} section of an HTML page:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${150*2}px`}
        defaultLanguage='html'
        path='file21.html'
        value={`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
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

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>An external style sheet can be written in any text editor, and must be saved with a .css extension.</li>
          <li>The external .css file should not contain any HTML tags.</li>
          <li>Here is how the "mystyle.css" file looks:</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${95*2}px`}
        defaultLanguage='css'
        path='myStyle.css'
        value={`body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
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
        <strong className="font-semibold ">Note:</strong> Do not add a space between the property value (20) and the unit (px):
        <ul className={`space-y-1 ml-3   md:text-lg list-inside`}>
          <li>Incorrect (space): <span  className='text-red-500'>margin-left: 20 px;</span> </li>
          <li>Correct (no space): <span className='text-red-500'>margin-left: 20px;</span></li>
          
        </ul>
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Internal CSS</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>An internal style sheet may be used if one single HTML page has a unique style.</li><br />
          <li>The internal style is defined inside the {`<style>`} element, inside the head section.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Internal styles are defined within the {`<style>`} element, inside the {`<head> `}section of an HTML page:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${250*2}px`}
        defaultLanguage='html'
        path='style33.html'
        value={`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
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
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Inline CSS</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>An inline style may be used to apply a unique style for a single element.</li><br />
          <li>To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.</li>
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Inline styles are defined within the "style" attribute of the relevant element:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${110*2}px`}
        defaultLanguage='html'
        path='style00.html'
        value={`<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

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

{/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
<div className="bg-[#ffffcc] rounded-md p-6  my-16 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        <strong className="font-semibold ">Tip: </strong>An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Multiple Style Sheets</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. </li>
          
        </ul>
      </div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Assume that an external style sheet has the following style for the {`<h1>`} element:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        path='style26.css'
        value={`h1 {
  color: navy;
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

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Then, assume that an internal style sheet also has the following style for the {`<h1>`} element:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        path='style28.css'
        value={`h1 {
  color: orange; 
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

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>If the internal style is defined after the link to the external style sheet, the {`<h1>`} elements will be "orange":</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${100*2}px`}
        defaultLanguage='html'
        path='style200.html'
        value={`<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>`}
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

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>However, if the internal style is defined before the link to the external style sheet, the {`<h1>`} elements will be "navy": </li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${100*2}px`}
        defaultLanguage='html'
        path='style800.html'
        value={`<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>`}
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Cascading Order</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>What style will be used when there is more than one style specified for an HTML element?</li><br/>
          <li>All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:</li><br/>
          <li><ol className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-decimal md:text-lg list-inside`}>
          <li>Inline style (inside an HTML element)</li>
          <li>External and internal style sheets (in the head section)</li>
          <li>Browser default</li>
        </ol></li><br/>
          <li>So, an inline style has the highest priority, and will override external and internal styles and browser defaults.</li>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    </div>
  )
}

export default How_To_Add_CSS
