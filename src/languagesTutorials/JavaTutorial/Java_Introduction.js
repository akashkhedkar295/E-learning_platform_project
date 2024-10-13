import React from 'react'
import  Editor from '@monaco-editor/react'

const Java_Introduction = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Java Introduction</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
    
    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>What is Java?</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Java is a popular programming language, created in 1995.</li><br />
          <li>It is owned by Oracle, and more than <b>3 billion</b> devices run Java.</li><br />
          <li>It is used for:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Mobile applications (specially Android apps)</li>
          <li>Desktop applications</li>
          <li>Web applications</li>
          <li>Web servers and application servers</li>
          <li>Games</li>
          <li>Database connection</li>
          <li>And much, much more!</li>
          </ul></li><br/>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Why Use Java?</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
          <li>It is one of the most popular programming languages in the world</li>
          <li>It has a large demand in the current job market</li>
          <li>It is easy to learn and simple to use</li>
          <li>It is open-source and free</li>
          <li>It is secure, fast and powerful</li>
          <li>It has huge community support (tens of millions of developers)</li>
          <li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
          <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Get Started</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          
          <li>It is not necessary to have any prior programming experience.</li><br />
          
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      
    </div>
  )
}

export default Java_Introduction
