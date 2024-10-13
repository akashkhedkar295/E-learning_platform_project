import React from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import {  } from '../firebase/Firebase'
import suchita from '../problems/Image/suchita.jpeg'
import akash from '../problems/Image/akash.jpeg'
import { Link } from 'react-router-dom'


const AboutUs = (props) => {
  return (
    <div className={`flex mx-28 py-24 space-x-28`} id='AboutUs'>

      <div className={`w-full max-w-sm border ${props.them ==='dark' ? 'border-gray-700 bg-gray-800':'border-gray-200 bg-white'}  rounded-lg shadow`}>
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className={`inline-block ${props.them ==='dark'? 'focus:ring-gray-700 hover:bg-gray-700 text-gray-400':'focus:ring-gray-200 hover:bg-gray-100 text-gray-500'} focus:ring-4 focus:outline-none  rounded-lg text-sm p-1.5`} type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" className={`z-10 hidden text-base list-none ${props.them === 'dark' ? 'bg-gray-700' : 'bg-white'}  divide-y divide-gray-100 rounded-lg shadow w-44 dark:`}>
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={akash} alt="Bonnie image"/>
        <h5 className={`mb-1 text-xl font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-900'}`}>Akash Khedkar</h5>
        <span className={`text-sm px-5 ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>I’m a backend developer specializing in Python and Node.js, focused on building efficient, scalable, and secure server-side applications.</span>
        <div className="flex mt-4 md:mt-6">
            <Link href="#" className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center ${props.them === 'dark' ? 'focus:ring-blue-800 hover:bg-blue-700 bg-blue-600' : 'focus:ring-blue-300 hover:bg-blue-800 bg-blue-700'} text-white  rounded-lg  focus:ring-4 focus:outline-none`}>Add friend</Link>
            <Link href="#" className={`py-2 px-4 ms-2 text-sm font-medium ${props.them === 'dark' ? 'hover:bg-gray-700 hover:text-white border-gray-600 text-gray-400 bg-gray-800 focus:ring-gray-700' : 'hover:bg-gray-100 hover:text-blue-700 border-gray-200 text-gray-900 bg-white focus:ring-gray-100'}  focus:outline-none  rounded-lg border focus:z-10 focus:ring-4`}>Message</Link>
        </div>
    </div>
</div>

<div className={`w-full max-w-sm border ${props.them ==='dark' ? 'border-gray-700 bg-gray-800':'border-gray-200 bg-white'}  rounded-lg shadow`}>
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className={`inline-block ${props.them ==='dark'? 'focus:ring-gray-700 hover:bg-gray-700 text-gray-400':'focus:ring-gray-200 hover:bg-gray-100 text-gray-500'} focus:ring-4 focus:outline-none  rounded-lg text-sm p-1.5`} type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" className={`z-10 hidden text-base list-none ${props.them === 'dark' ? 'bg-gray-700' : 'bg-white'}  divide-y divide-gray-100 rounded-lg shadow w-44 dark:`}>
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={suchita} alt="Bonnie image"/>
        <h5 className={`mb-1 text-xl font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-900'}`}>Suchita Zende</h5>
        <p className={`text-sm px-7  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>I'm a web developer skilled in front-end and back-end technologies, passionate about creating seamless, high-performing web experiences.</p>
        <div className="flex mt-4 md:mt-6">
            <Link href="#" className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center ${props.them === 'dark' ? 'focus:ring-blue-800 hover:bg-blue-700 bg-blue-600' : 'focus:ring-blue-300 hover:bg-blue-800 bg-blue-700'} text-white  rounded-lg  focus:ring-4 focus:outline-none`}>Add friend</Link>
            <Link href="#" className={`py-2 px-4 ms-2 text-sm font-medium ${props.them === 'dark' ? 'hover:bg-gray-700 hover:text-white border-gray-600 text-gray-400 bg-gray-800 focus:ring-gray-700' : 'hover:bg-gray-100 hover:text-blue-700 border-gray-200 text-gray-900 bg-white focus:ring-gray-100'}  focus:outline-none  rounded-lg border focus:z-10 focus:ring-4`}>Message</Link>
        </div>
    </div>
</div>

    </div>
  )
}

export default AboutUs