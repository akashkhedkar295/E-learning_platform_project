import React from "react";
import { auth } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Service = (props) => {
  return (
    <div>
     
    <div className={`md:px-28  p-4 my-24 grid md:grid-cols-3 grid-row-1 gap-4`} id="WhyUs">
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Free Tutorials
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Enjoy your free tutorials 
          </p>
        </a>
      </div>

      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Log in/Sign up
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Create a free coder.com Account to improve your learning experience
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Test
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Test yourself with multiple choice questions
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Exercises
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Test your skills with different exercises
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            CSS Framework
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Build fast and responsive sites using our free tailwind css framework
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Code Editor
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            With our online code editor,you can edit code and view in your browser
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            References
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Explore our selection of references covering all popular coding languages
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Color Picker
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Use our color picker to find different RGB,HEX and HSL colors
          </p>
        </a>
      </div>
      <div>
        <a
          href="/"
          className={`block max-w-sm p-6  border  rounded-lg shadow  ${props.them === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`} style={{height:'150px'}}>
          <h5 className={`mb-2 text-2xl font-bold tracking-tight  ${props.them ==='dark'? 'text-white' : 'text-gray-900'}`}>
            Get Certified
          </h5>
          <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
            Document your knowledge
          </p>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Service;
