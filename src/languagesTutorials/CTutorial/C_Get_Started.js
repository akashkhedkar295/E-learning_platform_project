import React from 'react'
import  Editor from '@monaco-editor/react'

const C_Get_Started = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>C Get Started</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Get Started With C</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>To start using C, you need two things:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>A text editor, like Notepad, to write C code</li>
          <li>A compiler, like GCC, to translate the C code into a language that the computer will understand</li>
          </ul></li><br/>
          <li>There are many text editors and compilers to choose from. In this tutorial, we will use an <b><i>IDE</i></b> (see below).</li>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>C Install IDE</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>An IDE (Integrated Development Environment) is used to edit AND compile the code.</li><br />
          <li>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C code.</li><br />
          <li><b>Note:</b> Web-based IDE's can work as well, but functionality is limited.</li><br />
          <li>We will use <b>Code::Blocks</b> in our tutorial, which we believe is a good place to start.</li><br />
          <li>You can find the latest version of Codeblocks at <a href="http://www.codeblocks.org/" className={`font-medium ${props.dark === "dark" ? 'dark:text-blue-500 ' : 'text-blue-600 '}  hover:underline`} target="_blank" rel="noopener noreferrer">http://www.codeblocks.org/.</a> Download the <span className=' text-red-400'>mingw-setup.exe</span> file, which will install the text editor with a compiler.</li>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>C Quickstart</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Let's create our first C file.</li><br />
          <li>Open Codeblocks and go to <b>File {`>`} New {`>`} Empty File</b>.</li><br />
          <li>Write the following C code and save the file as <span className=' text-red-400'>myfirstprogram.c</span> <b>(File {`>`} Save File as)</b>:</li><br />
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>myfirstprogram.c</h2>
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

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.</li><br />
          <li>In Codeblocks, it should look like this:</li><br />
          {/* // -------------------------------------------------------------Image part -------------------------------------------------------------------------- */}
      <div className="pl-8">
        <img src="https://www.w3schools.com/c/codeblocks2020.png" alt="window" />
      </div><br />
      <li>Then, go to <b>Build {`>`} Build</b> and <b>Run</b> to run (execute) the program. The result will look something to this:</li><br />

      {/* // -------------------------------------------------------------compiler cmd -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <div className=" px-12 py-8 ">
        <p className='text-white text-base px-6 font-serif border-l-4 border-blue-500 bg-black'>Hello World!</p>
        <p className='text-white text-base px-6 font-serif border-l-4 border-blue-500 bg-black'>Process returned 0 (0x0) execution time : 0.011 s</p>
        <p className='text-white text-base px-6 font-serif border-l-4 border-blue-500 bg-black'>Press any key to continue.</p>
      </div>
      </div><br />

      <li><b>Congratulations!</b> You have now written and executed your first C program.</li>

        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      
      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Learning C At W3Schools</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>When learning C at W3Schools.com, you can use our "Try it Yourself" tool, which shows both the code and the result. This will make it easier for you to understand every part as we move forward:</li><br />

        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <h2 className={`text-3xl px-12 py-4 ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>myfirstprogram.c</h2>
      <div className="ed px-12 pb-7 ">
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
      <h2 className={`text-xl px-12  ${props.dark ==='dark'?'dark:text-white':'text-[#00000]'} `}>Result :</h2>
      <div className=" px-12 pb-8 ">
        <p className='text-white text-base px-4 py-2 font-serif border-l-4 border-blue-500 bg-black'>Hello World!</p>
      </div>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      
      
    </div>
  )
}

export default C_Get_Started
