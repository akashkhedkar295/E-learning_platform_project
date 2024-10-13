import React from 'react'
import  Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
const CSS_Colors = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Colors</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Color Names</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>In CSS, a color can be specified by using a predefined color name:</li>
        </ul>
      </div> 
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white text-white">
                <th scope="row" class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'Tomato'}}>
                Tomato
                </th>
                <td class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'Orange'}}>
                Orange
                </td>
                <td class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'DodgerBlue'}}>
                DodgerBlue
                </td>
                <td class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'MediumSeaGreen'}}>
                MediumSeaGreen
                </td>
                
            </tr>     
            <tr class="bg-white text-white">
                <th scope="row" class=" text-2xl px-10 py-6 align-middle" style={{backgroundColor:'Gray'}}>
                Gray
                </th>
                <td class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'SlateBlue'}}>
                SlateBlue
                </td>
                <td class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'Violet'}}>
                Violet
                </td>
                <td class="text-2xl px-10 py-6 align-middle" style={{backgroundColor:'LightGray'}}>
                LightGray
                </td>
                
            </tr>                
           
        </tbody>
    </table>
</div>
<Link href="https://www.w3schools.com/css/tryit.asp?filename=trycss_color_names">
<button  class="text-white text-base bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 my-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try It Yourself </button>
</Link>
<ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>CSS/HTML support <Link  href="https://www.w3schools.com/colors/colors_names.asp">140 standard color names.</Link></li>
        </ul>
        <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

        {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Background Color</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can set the background color for HTML elements:</li>
        </ul>
      </div> 

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white text-white">
                <th scope="row" class="text-3xl p-4 align-middle text-center" style={{backgroundColor:'DodgerBlue'}}>
                Hello World
                </th>               
            </tr>     
            <tr class="bg-white text-white">
                <th scope="row" class=" text-xl p-4 align-middle" style={{backgroundColor:'Tomato'}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </th>
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
        height={`${30*2}px`}
        defaultLanguage='html'
        path='style780.html'
        value={`<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`}
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Text Color</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can set the color of text:</li>
          <li><h3 class="text-3xl font-bold dark:text-white" style={{color:'Tomato'}}>Hello World</h3></li>
          <li className='' style={{color:'DodgerBlue'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
          <li style={{color:'MediumSeaGreen'}}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</li>
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
        defaultLanguage='html'
        path='style787.html'
        value={`<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`}
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Border Color</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can set the color of borders:</li>
         </ul>
      </div> 

      <div className="">
      <h3 class={`text-3xl p-2 my-2 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{border: '2px solid Tomato'}}>Hello World</h3>
      <h3 class={`text-3xl p-2 my-2 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{border: '2px solid DodgerBlue'}}>Hello World</h3>
      <h3 class={`text-3xl p-2 my-2 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{border: '2px solid Violet'}}>Hello World</h3>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Color Values</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:</li><br />
          <li>Same as color name "Tomato":</li>
         </ul>
      </div> 

      <div>
      <h3 class={`text-3xl p-2 my-2 text-center ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{backgroundColor: 'Tomato'}}>rgb(255, 99, 71)</h3>
      <h3 class={`text-3xl p-2 my-2 text-center ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{backgroundColor: 'Tomato'}}>#ff6347</h3>
      <h3 class={`text-3xl p-2 my-2 text-center ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{backgroundColor: 'Tomato'}}>hsl(9, 100%, 64%)</h3>
      </div>

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Same as color name "Tomato", but 50% transparent:</li>
         </ul>
      </div> 

      <div className='bg-white'>
      <h3 class={`text-3xl p-2 border-b-[6px]  text-center ${props.dark ==='dark'?'dark:text-white bg-slate-800':'text-[#00000] bg-white'}`} style={{backgroundColor: 'rgba(255, 99, 71, 0.5)'}}>rgba(255, 99, 71, 0.5)</h3>
      <h3 class={`text-3xl p-2  text-center ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`} style={{backgroundColor: 'hsla(9, 100%, 64%, 0.5)'}}>hsla(9, 100%, 64%, 0.5)</h3>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${80*2}px`}
        defaultLanguage='html'
        path='style737.html'
        value={`<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>`}
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

    </div>
  )
}

export default CSS_Colors
