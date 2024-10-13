import React from 'react'
import  Editor from '@monaco-editor/react'

const Java_Get_Started = (props) => {
  return (
    <div className="container p-8 pt-28 space-y-4">
    <h1 className={`text-5xl  ${props.dark ==='dark'?'text-white':'text-[#00000]'} `}>Java Getting Started</h1>
    <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

    {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Java Install</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>Some PCs might have Java already installed.</li><br />
          <li>To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):</li>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />
      {/* // -------------------------------------------------------------Editor code exzmple -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <div className=" px-12 py-8 ">
        <p className='text-white text-base font-serif px-6 py-2 border-l-4 border-blue-500 bg-black'>C:\Users\Your Name{`>`}java  -version</p>
      </div>
      </div>

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Java Install</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>If Java is installed, you will see something like this (depending on version):</li><br />
        </ul>
      </div>

      {/* // -------------------------------------------------------------compiler cmd -------------------------------------------------------------------------- */}
      
      <div className={`w-full  ${props.dark ==='dark'? 'dark:bg-gray-600' : 'bg-gray-200'}`}>
      <div className=" px-12 py-8 ">
        <p className='text-white text-base px-6 font-serif border-l-4 border-blue-500 bg-black'>java version "11.0.1" 2018-10-16 LTS</p>
        <p className='text-white text-base px-6 font-serif border-l-4 border-blue-500 bg-black'>Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)</p>
        <p className='text-white text-base px-6 font-serif border-l-4 border-blue-500 bg-black'>Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)</p>
      </div>
      </div>

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>If you do not have Java installed on your computer, you can download it for free at oracle.com.</li>
        </ul>
      </div>

      {/* // -------------------------------------------------------------IMP notes part -------------------------------------------------------------------------- */}
<div className="bg-[#ffffcc] rounded-md p-6 my-12 ">
        <p className={` ${props.dark ==='dark'?'dark:text-gray-600':'text-gray-500'} space-y-1 ml-4 list-disc md:text-lg  list-inside`}>
        <b>Note:</b> In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.
        </p>
      </div><hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      {/* // -------------------------------------------------------------Heading Points unorder part -------------------------------------------------------------------------- */}
 <div className=" w-full">
      <h2 className={`text-4xl ${props.dark ==='dark'?'text-white':'text-[#00000]'} pb-3`}>Setup for Windows</h2>
        <ul className={`space-y-1 ${props.dark ==='dark'?'text-gray-400':'text-gray-500'} ml-4  list-disc md:text-lg list-inside`}>
          <li>To install Java on Windows:</li><br />
          <li><ul className={`space-y-1 ${props.dark ==='dark'?'dark:text-gray-400':'text-gray-500'} ml-4 list-decimal md:text-lg list-inside`}>
          <li>Go to "System Properties" (Can be found on Control Panel {`>`} System and Security {`>`} System {`>`} Advanced System Settings)</li>
          <li>Click on the "Environment variables" button under the "Advanced" tab</li>
          <li>Then, select the "Path" variable in System variables and click on the "Edit" button</li>
          <li>Click on the "New" button and add the path where Java is installed, followed by <b>\bin</b>. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: <b>C:\Program Files\Java\jdk-11.0.1\bin</b>
Then, click "OK", and save the settings</li>
          <li>Games</li>
          <li>At last, open Command Prompt (cmd.exe) and type <b>java-version</b> to see if Java is running on your machine</li>
          </ul></li><br/>
        </ul>
      </div> <hr className={`h-px my-8 ${props.dark ==='dark'? 'bg-gray-400' : 'bg-gray-200'} border-0 `} />

      
    </div>
  )
}

export default Java_Get_Started
