import React from 'react'
import  Editor from '@monaco-editor/react'

const C_Output = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>C Output (Print Text)</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Output (Print Text)</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>To output values or print text in C, you can use the <span className=' text-red-400'>printf()</span> function:</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example </h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${75*2}px`}
        defaultLanguage='c'
        path='myfirstprogram.c'
        value={`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}
 options={
  {readOnly:true,
    fontSize: "18px",
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
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Double Quotes</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>When you are working with text, it must be wrapped inside double quotations marks <span className=' text-red-400'>""</span>.</li><br />
          <li>If you forget the double quotes, an error occurs:</li>
        </ul>
      </div>

       {/* // -------------------------------------------------------------compiler cmd -------------------------------------------------------------------------- */}
      
       <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
       <h2 className={`text-3xl px-12 py-5 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example </h2>
      <div className=" px-12 pb-4 ">
        <p className='text-black text-lg px-6 py-2 font-serif border-l-4 border-green-500 bg-white'>printf(<span className='text-red-300'>"This sentence will work!"</span>);</p>
      </div>
      <div className=" px-12 pb-8 ">
        <p className='text-black text-lg px-6 py-2 font-serif border-l-4 border-red-500 bg-white'>printf(This sentence will produce an error.);</p>
      </div>
      </div><br /><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Many <span className=' text-red-400'>printf</span> Functions</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You can use as many <span className=' text-red-400'>printf()</span> functions as you want. <b>However</b>, note that it does not insert a new line at the end of the output:</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Example </h2>
      <div className="ed px-12 pb-10 ">
        <Editor
        theme='vs-dark'
        width='100%'
        height={`${100*2}px`}
        defaultLanguage='c'
        path='printfun.c'
        value={`#include <stdio.h>

int main() {
  printf("Hello World!");
  printf("I am learning C.");
  printf("And it is awesome!");
  return 0;
}`}
 options={
  {readOnly:true,
    fontSize: "18px",
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

export default C_Output
