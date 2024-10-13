import React from 'react'
import  Editor from '@monaco-editor/react'
const CSS_Backgrounds = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Backgrounds</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>The CSS background properties are used to add background effects for elements.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

     {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
    <div className="w-full " style={{ backgroundImage: `url("https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc=")` }}>
    <div className=" w-full py-8">
        <ul className={`space-y-1 ml-4 text-black  md:text-lg list-inside`}>
          <li>In these chapters, you will learn about the following CSS background properties:</li><br />
          <li><ul className={`space-y-1 ml-4  list-disc md:text-lg list-inside`}>
          <li><span className='bg-red-50 text-red-600'>background-color</span></li>
          <li><span className='bg-red-50 text-red-600'>background-image</span></li>
          <li><span className='bg-red-50 text-red-600'>background-repeat</span></li>
          <li><span className='bg-red-50 text-red-600'>background-attachment</span></li>
          <li><span className='bg-red-50 text-red-600'>background-position</span></li>
          <li><span className='bg-red-50 text-red-600'>background </span>(shorthand property)</li>
        </ul></li>
        </ul>
      </div> 
    </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS background-color</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The<span className=' text-red-400'> {` background-color `}</span> property specifies the background color of an element.</li>
        </ul>
      </div> 

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        value={`body {
  background-color: lightblue;
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
    <div className="w-full " >
    <div className=" w-full ">
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>With CSS, a color is most often specified by:</li><br />
          <li><ul className={`space-y-1 ml-4  list-disc md:text-lg list-inside`}>
          <li>a valid color name - like "red"</li>
          <li>a HEX value - like "#ff0000"</li>
          <li>an RGB value - like "rgb(255,0,0)"</li>
        </ul></li><br />
        <li>Look at CSS Color Values for a complete list of possible color values.</li>
        </ul>
      </div> 
    </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

{/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Other Elements</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can set the background color for any HTML elements:</li>
         </ul>
      </div> 
    
{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>External styles are defined within the {`<link `}element, inside the {`<head>`} section of an HTML page:</li>
        </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${135*2}px`}
        defaultLanguage='css'
        value={`h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Opacity / Transparency</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The <span className=' text-red-400'>opacity</span>  property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:</li>
         </ul>
      </div> 
      
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white text-black">
                <th scope="row" class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 1}}>
                opacity: 1
                </th>
                <td class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 0.6}}>
                opacity: 0.6
                </td>
                <td class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 0.3}}>
                opacity: 0.3
                </td>
                <td class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 0.1}}>
                opacity: 0.1
                </td>
                
            </tr>     
                               
        </tbody>
    </table>
</div>

{/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        
        value={`div {
  background-color: green;
  opacity: 0.3;
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
        <strong className="font-semibold ">Note:</strong>When using the <span className=' text-red-500'>opacity</span> property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read.
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
<div className=" w-full">
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>If you do not want to apply opacity to child elements, like in our example above, use <b>RGBA</b> color values. The following example sets the opacity for the background color and not the text:</li><br />
          <li>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white text-black">
                <th scope="row" class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 1}}>
                opacity: 100%
                </th>
                <td class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 0.6}}>
                opacity: 60%
                </td>
                <td class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 0.3}}>
                opacity: 30%
                </td>
                <td class="text-2xl px-10 py-10 align-middle" style={{backgroundColor: `green` ,opacity: 0.1}}>
                opacity: 10%
                </td>
                
            </tr>     
                               
        </tbody>
    </table>
</div>
          </li><br />

          <li>You learned from our CSS Colors Chapter, that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an <b>alpha</b> channel ( <b>RGBA</b>) - which specifies the opacity for a color.</li><br />
          <li>An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</li><br />
          <li><b>Tip:</b> You will learn more about RGBA Colors in our CSS Colors Chapter.</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${50*2}px`}
        defaultLanguage='css'
        
        value={`div {
  background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS background-image</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The <span className=' text-red-400'>background-image</span>   property specifies an image to use as the background of an element.</li>
          <li>By default, the image is repeated so it covers the entire element.</li>
         </ul>
      </div> 


      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12 ml-4 py-3 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg list-inside`}>
          <li>By default, the image is repeated so it covers the entire element.</li>
         </ul>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${40*2}px`}
        defaultLanguage='css'
        
        value={`div {
  background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
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



      <h2 className={`text-4xl py-6 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} pb-3`}>The CSS Background Color Property</h2>
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
                      background-color
                      </td>
                      <td className="px-6 py-4">
                      Sets the background color of an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      background-image
                      </td>
                      <td className="px-6 py-4">
                      Sets the background image for an element
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      background-position
                      </td>
                      <td className="px-6 py-4">
                      Sets the starting position of a background image
                      </td>
                  </tr>
              </tbody>
              <tbody>
                  <tr className={`${props.dark === 'dark' ? ' dark:bg-gray-900 dark:border-gray-700' : ' bg-gray-50 border-b' }`}>
                      
                      <td className="px-6 py-4">
                      background-repeat
                      </td>
                      <td className="px-6 py-4">
                      Sets how a background image will be repeated
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />


    </div>
  )
}

export default CSS_Backgrounds
