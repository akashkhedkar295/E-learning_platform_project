import React, { useState } from 'react'
import { Link  , useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth, firestore } from '../firebase/Firebase'
import { doc, setDoc } from 'firebase/firestore';



const SignUp = (props) => {
  
  const [inputs,setInputs] = useState({email:'',displayName: '',password:''});
  const navigate = useNavigate('');

  const handleChangeInput=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    
  };

  const onRegiter = async(e) =>{
    e.preventDefault();
    
    
      try {
        // Signed in
        const userCredential= await createUserWithEmailAndPassword(auth,inputs.email, inputs.password);
        const user = userCredential.user;
      updateProfile(user ,{
          displayName: inputs.displayName,
      });
      const userData ={
        uid: user.uid,
        email: user.email,
        displayName: inputs.displayName,
        createdAt: Date.now(),
        photoURL: user.photoURL,
        likedProblems: [],
        dislikedProblems: [],
        sovledProblems: [],
        starredProblems: [],
        sovledQuiz : [],
      }
      const userQizeProb = {
        uid: user.uid,
        displayName: user.displayName,
        solveAt: Date.now(),
        QuizProblems: {
          QuizID: null,
          QuizName: null,
          QuizScore: null,
          QuizeSolveTime: null
        }, 
      }
      
      await setDoc(doc(firestore,'Quiz',user.uid),userQizeProb);
      await setDoc(doc(firestore,"users",user.uid),userData);
        navigate("/");
        await setDoc(doc(firestore, "users",user.uid),userData);
      }catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    };
    
  }
  return (
    <div className={`md:w-1/2  h-[84%]  mt-14 max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8 ${props.them ==='dark'?' bg-gray-900 dark:border-gray-700': 'border-gray-400'}  `}>
    <form className="space-y-6 pt-6" onSubmit={onRegiter}>
        <h5 className={`text-xl font-medium  ${props.them==='dark' ? 'text-white': 'text-gray-900'}`}>Register</h5>
        <div>
            <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>Your email </label>
            <input type="email" onChange={handleChangeInput} name="email" id="email" className={`text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5  ${props.them==='dark'?'bg-gray-600 border-gray-500  placeholder-gray-400 text-white': 'bg-gray-50 border-gray-300 text-gray-900'} `} placeholder="name@company.com" required/>
        </div>
        
        <div>
            <label htmlFor="displayName" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>Your Name</label>
            <input type="text" onChange={handleChangeInput} name="displayName" id="displayName" placeholder="jone son" className={`text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5  ${props.them==='dark'?'bg-gray-600 border-gray-500  placeholder-gray-400 text-white': 'bg-gray-50 border-gray-300 text-gray-900'} `} required/>
        </div>
        <div>
            <label htmlFor="password" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>New password</label>
            <input type="password" onChange={handleChangeInput} name="password" id="password" placeholder="••••••••" className={`text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5  ${props.them==='dark'?'bg-gray-600 border-gray-500  placeholder-gray-400 text-white': 'bg-gray-50 border-gray-300 text-gray-900'} `} required/>
        </div>
        <button type="submit" className={`w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ${props.them === 'dark' ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'}`}>Register</button>
        <div className={`text-sm font-medium  ${props.them==='dark'?'text-gray-300':'text-gray-500'}`}>
        already have an account <Link to='/' className={` cursor-pointer hover:underline ${props.them==='dark' ? 'text-blue-500' : 'text-blue-700'}`}>Just LogIn</Link>
        </div>
    </form>
    </div>
  )
}

export default SignUp
