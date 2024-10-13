import React from 'react'
import { useState , useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { auth, firestore, provider } from '../firebase/Firebase';
// import { signInWithGoogle } from '../firebase/Firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';


const Login = (props) => {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({email:'',password:''});
    
    const handleChangeInput=(e)=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
        console.log(inputs);
      };
      console.log(inputs);
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const onLogin = async (e) => {
        e.preventDefault();
        if(inputs.email === "admin@gmail.com" && inputs.password === "admin123"){
          
          try{
            const newUser = await signInWithEmailAndPassword(inputs.email , inputs.password);
            if(!newUser) return toast.error("invalid Email and  Password ! " ,{ position: "top-center", autoClose: 3000, theme: "dark" });
            props.setAdminActive(true);
            // navigate("admin");
          }catch(err){
            console.log(err);
         } 
         
        }else{
          if(!inputs.email || !inputs.password) return toast.error("Please fill all fields",{ position: "top-center", autoClose: 3000, theme: "dark" });
        try{
            const newUser = await signInWithEmailAndPassword(inputs.email , inputs.password);
            if(!newUser) return toast.error("invalid Email and  Password ! " ,{ position: "top-center", autoClose: 3000, theme: "dark" });;
            navigate("profile")

        }catch(err){
           console.log(err);
        } 
        }
      };
      const signInWithGoogle = () =>{
        signInWithPopup(auth,provider)
        .then((result) =>{
          const userData = {
            uid:user.uid,
            email: user.email,
            displayName: user.displayName,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            likedProblems: [],
            dislikedProblems: [],
            sovledProblems: [],
            starredProblems: [],
          }
          setDoc(doc(firestore, "users",user.uid),userData);
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      useEffect(() => {
		if (error) toast.error(error, { position: "top-center", autoClose: 3000, theme: "dark" });
	}, [error]);
  return (
    <div className={`md:w-1/2 ${user ? user.email === "admin@gmail.com" ? 'hidden' : '' : ''}  h-[84%] mt-14 max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8 ${props.them ==='dark'?' bg-gray-900 dark:border-gray-700': 'border-gray-400'}  `}>
        <ToastContainer />
    <form className="space-y-6 pt-6">
        <h5 className={`text-xl font-medium  ${props.them==='dark' ? 'text-white': 'text-gray-900'}`}>Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>Your email </label>
            <input type="email" onChange={handleChangeInput} name="email" id="email" className={`text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5  ${props.them==='dark'?'bg-gray-600 border-gray-500  placeholder-gray-400 text-white': 'bg-gray-50 border-gray-300 text-gray-900'} `} placeholder="name@company.com" required/>
        </div>
        <div>
            <label htmlFor="password" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>Your password</label>
            <input type="password" onChange={handleChangeInput} name="password" id="password" placeholder="••••••••" className={`text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500   block w-full p-2.5  ${props.them==='dark'?' bg-gray-600 border-gray-500  placeholder-gray-400 text-white': 'bg-gray-50 border-gray-300 text-gray-900'} `} required/>
        </div>
        
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className={`w-4 h-4 border ${props.them==='dark'?'bg-gray-600 border-gray-500 placeholder-gray-400 ':'border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300' }`} required/>  
                </div>
                <label htmlFor="remember" className={`ms-2 text-sm font-medium ${props.them==='dark'?'text-gray-300':'text-gray-900'}`}>Remember me</label>
            </div>
            <Link to='forgot' className={`ms-auto cursor-pointer text-sm  hover:underline ${props.them==='dark' ? 'text-blue-500' : 'text-blue-700'}`}>Lost Password?</Link>
        </div>
        <button type="submit" onClick={onLogin} className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${props.them}:bg-blue-600 ${props.them}:hover:bg-blue-700 ${props.them}:focus:ring-blue-800`}>{loading ? 'Processing...' :'Login to your account'}</button>
        <button type="button" onClick={signInWithGoogle} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
        </svg>
        Sign in with Google
        </button>
        <div className={`text-sm font-medium  ${props.them==='dark'?'text-gray-300':'text-gray-500'}`}>
            Not registered? <Link  to='signup' className={` cursor-pointer hover:underline ${props.them==='dark' ? 'text-blue-500' : 'text-blue-700'}`}>Create account</Link>
        </div>
    </form>
    
    </div>
  )
}

export default Login;
