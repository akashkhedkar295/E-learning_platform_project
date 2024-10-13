import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const FeedbacksContent = (props) => {
    const FeedbackData = useGetSolvedQuizs();
    const [user] = useAuthState(auth);
  return (    
<div className={` mx-28 mb-10 p-4  border-gray-200 rounded-lg  sm:p-8  dark:border-gray-700`}>
   {/* <div className="flow-root"> */}
        <ul  className={`divide-y  ${props.them === 'dark' ? 'divide-gray-700' : 'divide-gray-200'} ${user ? user.email === "admin@gmail.com" ? 'hidden' : '' : ''} `}>
             <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt=""/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className={`text-sm font-medium ${props.them === 'dark' ? 'text-white':'text-gray-900'}  truncate`}>
                            {FeedbackData.length === 0 ? '' : FeedbackData.Fname[FeedbackData.Fname.length-1] + " "+FeedbackData.Lname[FeedbackData.Fname.length-1]}
                        </p>
                        <p className={`text-sm ${props.them === 'dark' ? 'text-gray-400': 'text-gray-500'}  truncate`}>
                        {FeedbackData.length === 0 ? '' : FeedbackData.message[FeedbackData.Fname.length-1] }
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt=""/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className={`text-sm font-medium ${props.them === 'dark' ? 'text-white':'text-gray-900'}  truncate`}>
                            {FeedbackData.length === 0 ? '' : FeedbackData.Fname[FeedbackData.Fname.length-2] + " "+FeedbackData.Lname[FeedbackData.Fname.length-2]}
                        </p>
                        <p className={`text-sm ${props.them === 'dark' ? 'text-gray-400': 'text-gray-500'}  truncate`}>
                        {FeedbackData.length === 0 ? '' : FeedbackData.message[FeedbackData.Fname.length-2] }
                        </p>
                    </div>
                </div>
            </li>

            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt=""/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className={`text-sm font-medium ${props.them === 'dark' ? 'text-white':'text-gray-900'}  truncate`}>
                            {FeedbackData.length === 0 ? '' : FeedbackData.Fname[FeedbackData.Fname.length-3] + " "+FeedbackData.Lname[FeedbackData.Fname.length-3]}
                        </p>
                        <p className={`text-sm ${props.them === 'dark' ? 'text-gray-400': 'text-gray-500'}  truncate`}>
                        {FeedbackData.length === 0 ? '' : FeedbackData.message[FeedbackData.Fname.length-3]}
                        </p>
                    </div>
                </div>
            </li>

            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt=""/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className={`text-sm font-medium ${props.them === 'dark' ? 'text-white':'text-gray-900'}  truncate`}>
                            {FeedbackData.length === 0 ? '' : FeedbackData.Fname[FeedbackData.Fname.length-4] + " "+FeedbackData.Lname[FeedbackData.Fname.length-4]}
                        </p>
                        <p className={`text-sm ${props.them === 'dark' ? 'text-gray-400': 'text-gray-500'}  truncate`}>
                           {FeedbackData.length === 0 ? '' : FeedbackData.message[FeedbackData.Fname.length-4]}
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt=""/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className={`text-sm font-medium ${props.them === 'dark' ? 'text-white':'text-gray-900'}  truncate`}>
                            {FeedbackData.length === 0 ? '' : FeedbackData.Fname[FeedbackData.Fname.length-5] + " "+FeedbackData.Lname[FeedbackData.Fname.length-5]}
                        </p>
                        <p className={`text-sm ${props.them === 'dark' ? 'text-gray-400': 'text-gray-500'}  truncate`}>
                           {FeedbackData.length === 0 ? '' : FeedbackData.message[FeedbackData.Fname.length-5]}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
   {/* </div> */}
</div>
  )
}

export default FeedbacksContent




function useGetSolvedQuizs() {
	const [FeedbackData, setFeedbackData] = useState([]); 
    const [user] = useAuthState(auth)
	useEffect(() => {
		const getSolvedQuizs = async () => {
			const userRef = doc(firestore, "Feedback", "qASBfSbKnUFncs3Eh939");
			const userDoc = await getDoc(userRef);
			if (userDoc.exists()) {
				setFeedbackData(userDoc.data());
			}
		};

		if (user) getSolvedQuizs();
		if (!user) setFeedbackData([]);
	}, [user]);

	return FeedbackData;
}