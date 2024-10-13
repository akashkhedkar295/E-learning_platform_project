import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase/Firebase';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    const [usersData,setUsersData] = useState();
    const [problemData , setProblemData] = useState();
    const [feedback,setFeedback] = useState();
    const [loading , setLoading] = useState(false); 
  const getUserData = async()=>{
    setLoading(true);
    const querySnapshot = await getDocs(collection(firestore, "users"));
    const querySnapshot2 = await getDocs(collection(firestore,"problems"));
    const querySnapshot3 = await getDocs(collection(firestore,"Feedback"));
    const userData = querySnapshot.docs.map(doc=>({id: doc.id,...doc.data()}));
    const ProData = querySnapshot2.docs.map(doc=>({id: doc.id,...doc.data()}));
    const feedbackdata = querySnapshot3.docs.map(doc=>({id: doc.id,...doc.data()}));
    setUsersData(userData);
    setProblemData(ProData);
    setLoading(false);
    setFeedback(feedbackdata);
  }
  useEffect(()=>{
    getUserData();
  },[]);

console.log(loading);
  return (
    <div className='h-screen w-full '>
        <div className='flex space-x-5'>
        <div className={`max-w-sm w-[330px] border pt-4 ${props.them==='dark'? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow`}>
    <Link href="#">
        <h5 className={`mb-2 px-6 text-3xl font-bold tracking-tight ${props.them ==='dark'? 'text-white' :'text-gray-900'}`}>+{usersData?usersData.length:0}</h5>
    </Link>
    <p className={`mb-3 px-6 font-normal ${props.them==="dark"? 'text-gray-400':'text-gray-700'}`}>User Registrations</p>
    <Link href="#" className={`inline-flex w-full items-center px-3 py-1 ${props.them==="dark"? 'focus:ring-blue-800 hover:bg-blue-700 bg-blue-600': 'focus:ring-blue-300 hover:bg-blue-800 bg-blue-700' } text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none`}>
        More Info
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
</div>

<div className={`max-w-sm w-[330px] border pt-4 ${props.them==='dark'? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow`}>
    <Link href="#" className=''>
        <h5 className={`mb-2 px-6 text-3xl font-bold tracking-tight ${props.them ==='dark'? 'text-white' :'text-gray-900'}`}>+{problemData?problemData.length:0}</h5>
    </Link>
    <p className={`mb-3 px-6 font-normal ${props.them==="dark"? 'text-gray-400':'text-gray-700'}`}>Assignments Task</p>
    <Link href="#" className={`inline-flex w-full items-center px-3 py-1 ${props.them==="dark"? 'focus:ring-blue-800 hover:bg-blue-700 bg-blue-600': 'focus:ring-blue-300 hover:bg-blue-800 bg-blue-700' } text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none`}>
        More Info
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
</div>
<div className={`max-w-sm w-[330px] border pt-4 ${props.them==='dark'? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow`}>
    <Link href="#" className=''>
        <h5 className={`mb-2 px-6 text-3xl font-bold tracking-tight ${props.them ==='dark'? 'text-white' :'text-gray-900'}`}>+{feedback? feedback[0].Fname.length :''}</h5>
    </Link>
    <p className={`mb-3 px-6 font-normal ${props.them==="dark"? 'text-gray-400':'text-gray-700'}`}>Users Feedbacks and Coments</p>
    <Link href="#" className={`inline-flex w-full items-center px-3 py-1 ${props.them==="dark"? 'focus:ring-blue-800 hover:bg-blue-700 bg-blue-600': 'focus:ring-blue-300 hover:bg-blue-800 bg-blue-700' } text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none`}>
        More Info
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
</div>
        </div>
    </div>
  )
}

export default Dashboard
