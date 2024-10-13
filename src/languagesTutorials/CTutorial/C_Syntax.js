import React from 'react'
import  Editor from '@monaco-editor/react'

const C_Syntax = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>C Syntax</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Syntax</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>You have already seen the following code a couple of times in the first chapters. Let's break it down to understand it better:</li>
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
      </div>

      {/* // -------------------------------------------------------------Example heading and points -------------------------------------------------------------------------- */}
      <div className="explained  space-y-3">
      <h2 className={`text-3xl ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'}`}>Example explained</h2>
      <ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  md:text-lg list-inside `}>
         <li><b>Line 1:</b> <span className=' text-red-400'>#include {`<stdio.h>`}</span> is a <b>header file library</b> that lets us work with input and output functions, such as <span className=' text-red-400'>printf()</span> (used in line 4). Header files add functionality to C programs.</li><br />
         {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        Don't worry if you don't understand how  <span className=' text-red-400'>#include {`<stdio.h>`}</span> works. Just think of it as something that (almost) always appears in your program.
        </p>
      </div><br />
      <li><b>Line 2:</b> A blank line. C ignores white space. But we use it to make the code more readable.</li><br />
      <li><b>Line 3:</b> Another thing that always appear in a C program is <span className=' text-red-400'>main()</span>. This is called a function. Any code inside its curly brackets <span className=' text-red-400'>{`{}`}</span> will be executed.</li><br />
      <li><b>Line 4:</b> <span className=' text-red-400'>printf()</span> is a function used to output/print text to the screen. In our example, it will output "Hello World!".</li><br />
      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
      <div className="bg-[#ffffcc] rounded-md p-6 my-12 text-">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg list-inside`}>
        <ul className={`space-y-1 ml-4 ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'}  md:text-lg list-inside`}>
          <li><b>Note that:</b> Every C statement ends with a semicolon <span className=' text-red-400'>;</span></li><br />
          <li><b>Note:</b> The body of <span className=' text-red-400'>int main()</span> could also been written as:</li>
          <li><span className=' text-red-400'>{`int main(){printf("Hello World!");return 0;}`}</span></li><br />
          <li><b>Remember:</b> The compiler ignores white spaces. However, multiple lines makes the code more readable.</li>
        </ul>
        </p>
      </div><br />

      <li><b>Line 5:</b> <span className=' text-red-400'>return 0</span> ends the <span className=' text-red-400'>main()</span> function.</li><br />
      <li><b>Line 6:</b> Do not forget to add the closing curly bracket <span className=' text-red-400'>{`}`}</span> to actually end the main function.</li>
      </ul>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      
    </div>
  )
}

export default C_Syntax
