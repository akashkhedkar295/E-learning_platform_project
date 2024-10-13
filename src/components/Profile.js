import React, { useEffect, useState } from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Profile = (props) => {
  const [user]=useAuthState(auth);
  const [signOut, loading] = useSignOut(auth);
  const LogOut = async() =>{
    const success=await signOut();
    if(success) return toast.success("LogOut successfully!",{
      position: "top-center",
      theme: "dark",
      autoClose: 3000
    }); 
  }
  const sovledProblems  = useGetSolvedProblems();
  const sovledQuiz = useGetSolvedQuizs();
  return (
    <div className={`w-1/2 h-3/4 ${user ? user.email === "admin@gmail.com" ? 'hidden' : '' : ''} mt-14 max-w-sm p-4  border border-gray-400 rounded-lg shadow sm:p-6 md:p-8 ${props.them}:bg-gray-900 ${props.them}:border-gray-700`}>
      <ToastContainer />
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={!user?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png': user.photoURL ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt=''/>
        <h5 className={`mb-1 text-xl font-medium  ${props.them==='dark'?'text-white':'dark:text-gray-900'}`}>{!user?'':user.email}</h5>
        <span className={`text-xl ${props.them==='dark' ? 'text-gray-500' : 'dark:text-gray-400'}`}>{!user? '': user.displayName}</span>
        <form className="flex mt-4 md:mt-6">
            <Link href='/' onClick={LogOut} className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white ${props.them ==='dark' ? ' dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800': 'bg-blue-700  hover:bg-blue-800 focus:ring-blue-300 '} rounded-lg  focus:ring-4 focus:outline-none  `}>{loading? 'Processing...': 'Log Out'}</Link>
        </form>
    </div>   
    <div className="">
    <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-700'}`}>Sovled Problems</span>
        <span className={`text-sm font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-700'} `}>{parseInt((sovledProblems.length/10)*100)}%</span>
      </div>
      <div className={`w-full ${props.them ==='dark' ? 'bg-gray-700' : 'bg-gray-200'}  rounded-full h-2.5`}>
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width : `${(sovledProblems.length/10)*100}%`}}></div>
      </div> 
      </div> 

      <div className="mt-4">
      <div className="flex justify-between mb-">
        <span className={`text-base font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-700'}`}>Sovled Quiz</span>
        <span className={`text-sm font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-700'} `}>{parseInt((sovledQuiz.length/19)*100)}%</span>
      </div>
      <div className={`w-full ${props.them ==='dark' ? 'bg-gray-700' : 'bg-gray-200'}  rounded-full h-2.5`}>
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width : `${(sovledQuiz.length/19)*100}%`}}></div>
      </div>   
      </div> 
    </div>
  )
}

export default Profile

function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState([]);
	const [user] = useAuthState(auth);
  
	useEffect(() => {
		const getSolvedProblems = async () => {
			const userRef = doc(firestore, "users", user.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setSolvedProblems(userDoc.data().sovledProblems);
			}
		};

		if (user) getSolvedProblems();
		if (!user) setSolvedProblems([]);
	}, [user]);

	return solvedProblems;
}

function useGetSolvedQuizs() {
	const [solvedQuizs, setSolvedQuizs] = useState([]);
	const [user] = useAuthState(auth);
  
	useEffect(() => {
		const getSolvedQuizs = async () => {
			const userRef = doc(firestore, "users", user.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setSolvedQuizs(userDoc.data().sovledQuiz);
			}
		};

		if (user) getSolvedQuizs();
		if (!user) setSolvedQuizs([]);
	}, [user]);

	return solvedQuizs;
}