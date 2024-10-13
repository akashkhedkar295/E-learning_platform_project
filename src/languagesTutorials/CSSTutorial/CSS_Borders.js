import React from 'react'
import  Editor from '@monaco-editor/react'

const CSS_Borders = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>CSS Borders</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    <p className={`tracking-wide ${props.dark ==='dark'?'text-gray-400':'text-gray-500'}  md:text-lg `}>The CSS border properties allow you to specify the style, width, and color of an element's border.

</p>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    <div className='bg-transparent '>
    <p className={`tracking-wide py-4 px-5 my-4 border ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>I have borders on all sides.</p>
    <p className={`tracking-wide py-4 px-5 my-4 border-b border-red-500 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>I have borders on all sides.</p>
    <p className={`tracking-wide py-4 px-5 my-4 border rounded-xl ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>I have borders on all sides.</p>
    <p className={`tracking-wide py-4 px-5 my-4 border-l-8 border-blue-500 bg-blue-100 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>I have borders on all sides.</p>
    </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>CSS Border Style</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>The <span className=' text-red-400'>border-style</span> property specifies what kind of border to display.</li><br/>
          <li>The following values are allowed:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li><span className=' text-red-400'>dotted</span> - Defines a dotted border</li>
          <li><span className=' text-red-400'>dashed</span> - Defines a dashed border</li>
          <li><span className=' text-red-400'>solid</span> - Defines a solid border</li>
          <li><span className=' text-red-400'>double</span> - Defines a double border</li>
          <li><span className=' text-red-400'>groove</span> - Defines a 3D grooved border. The effect depends on the border-color value</li>
          <li><span className=' text-red-400'>ridge</span> - Defines a 3D ridged border. The effect depends on the border-color value</li>
          <li><span className=' text-red-400'>inset</span> - Defines a 3D inset border. The effect depends on the border-color value</li>
          <li><span className=' text-red-400'>outset</span> - Defines a 3D outset border. The effect depends on the border-color value</li>
          <li><span className=' text-red-400'>none</span> - Defines no border</li>
          <li><span className=' text-red-400'>hidden</span> - Defines a hidden border</li>
        </ul></li><br/>
        <li>The <span className=' text-red-400'>border-style</span>  property can have from one to four values (for the top border, right border, bottom border, and the left border).</li>
        </ul>
      </div> 

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
<div className={`w-full ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 pt-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example</h2>
      <ul className={`space-y-1 px-12  ml-4 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} py-2 md:text-lg list-inside`}>
          <li>Demonstration of the different border styles:</li>
        </ul>
      <div className=" px-12 pb-12 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${135*2}px`}
        defaultLanguage='css'
        value={`p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}`}
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
   <h2 className={`text-3xl py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Result:</h2>
      <div className=" bg-white ">
      <div className='bg-transparent py-2 px-7 '>
    <p className={`tracking-wide py-2 px-2 my-4 border-[2px] border-dotted border-black ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>A dotted border..</p>
    <p className={`tracking-wide py-2 px-2 my-4 border-[2px] border-dashed border-black ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>A dashed border.</p>
    <p className={`tracking-wide py-2 px-2 my-4 border-[2px] border-solid border-black ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>A solid border.</p>
    <p className={`tracking-wide py-2 px-2 my-4 border-double border-4  border-black ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `} style={{borderStyle: 'double'}}>A double border.</p>
    <p className={`tracking-wide py-2 px-2 my-4  border-none   border-black ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>No border..</p>
    <p className={`tracking-wide py-2 px-2 my-4 border-l-4 border-double border-black ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'}  md:text-lg `}>I have borders on all sides.</p>
    </div>
      </div>
      </div>
    
      </div>

      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
<div className="bg-[#ffffcc] rounded-md p-6  my-16 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        <strong className="font-semibold ">Note:</strong>None of the OTHER CSS border properties (which you will learn more about in the next chapters) will have ANY effect unless the <span className=' text-red-400'>border-style</span> property is set!
        </p>
      </div>
      <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      
    </div>
  )
}

export default CSS_Borders
