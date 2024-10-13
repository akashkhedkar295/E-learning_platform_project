import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/Firebase'
import { sendPasswordResetEmail } from 'firebase/auth';
const ForgotPass = (props) => {
  const [email, setEmail] = useState('');
  const forgot = async()=>{
    sendPasswordResetEmail(auth, email)
      .then(() => {
        
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage);
      });
      alert("Password reset email send!");
  }
  return (
    <div className={`md:w-1/2 h-3/4 mt-14 max-w-sm p-4  border rounded-lg shadow sm:p-6 md:p-8 ${props.them ==='dark'?' bg-gray-900 dark:border-gray-700': 'border-gray-400'}`}>
    <form className="space-y-6 pt-6">
        <h5 className={`text-xl font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'}`}>Sign in to our platform</h5>
        <p className={`font-normal  ${props.them === 'dark' ? 'text-gray-400' : 'text-gray-700' }`}>Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it</p>
        <div>
            <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'}`}>Your email </label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className={`text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5  ${props.them==='dark'?'bg-gray-600 border-gray-500  placeholder-gray-400 text-white': 'bg-gray-50 border-gray-300 text-gray-900'} `} placeholder="name@company.com" required/>
        </div>
        <button type="submit" onClick={forgot} className={`w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ${props.them === 'dark' ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'}`}>Login to your account</button>
        <div className={`text-sm font-medium ${props.them==='dark'?'text-gray-300':'text-gray-500'}`}>
            Not registered? <Link  to='/' className={` cursor-pointer hover:underline ${props.them==='dark' ? 'text-blue-500' : 'text-blue-700'}`}>Create account</Link>
        </div>
    </form>

    </div>
  )
}

export default ForgotPass
