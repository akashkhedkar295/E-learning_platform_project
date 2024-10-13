import React, { useEffect, useRef, useState } from 'react'
import './QuizCSS.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { arrayUnion, doc, getDoc, getDocFromCache, updateDoc } from 'firebase/firestore';


const Quiz = (props) => {
  let [index , setIndex ] = useState(1);
  let [question , setQuestion ] = useState(props.data[index]);
  let [lock,setLock ] = useState(false);
  let [score,setScore] =useState(0);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let [result,setResult] = useState(false);
  const [user,loading] = useAuthState(auth);
  const userRef =user? doc(firestore, "users" , user.uid): '';
  const userRef2 = user? doc(firestore , "Quiz" , user.uid): '';
  
  const sovledProblems = useGetSolvedProblems();
  const solvedQuizs = useGetSolvedQuiz();
  const sovledQuiz = sovledProblems.includes(props.data[0].id);
  let option_array = [option1,option2,option3,option4];
  const checkAns = (e , ans) =>{
    if(!user){
      toast.error("Please Login to submite your code !" , {position: "top-center" , autoClose: 3000 , theme: "dark"});
      return; 
    }
    if(lock===false){
       if(question.ans === ans){
         e.target.classList.add("correct");
         setLock(true);
         setScore(prev=>prev+1);
       }else{
         e.target.classList.add("wrong");
         setLock(true);
         option_array[question.ans-1].current.classList.add("correct");
       }
  }
  }
  const Next = async() =>{
    if(!user){
      toast.error("Please Login to submite your code !" , {position: "top-center" , autoClose: 3000 , theme: "dark"});
      return;
    }
    if(lock === true){
      if(index === props.data.length -1){
        setResult(true);
        if(score>12){
          try{
            if(!sovledQuiz){
              await updateDoc(userRef2,{
                QuizProblems: arrayUnion({QuizID: props.data[0].id , QuizName: props.data[0].id , QuizScore: score , QuizeSolveTime: Date.now(),}),
                displayName: user.displayName,
            });
            await updateDoc(userRef,{
              sovledQuiz: arrayUnion(props.data[0].id),
            })
          }
          }catch(error){
            toast.error("Oops! One or more test cases failed",{
              position: "top-center",
              autoClose: 3000,
              theme: "dark"
          })
          }
        }
        return 0;
      }
      setIndex(++index);
      setQuestion(props.data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }
  
  const Reset = () =>{
    setIndex(0)
    setQuestion(props.data[0]);
    setScore(0)
    setLock(false);
    setResult(false);
  }
  
  return (
    <div className='w-full h-screen '>
      <ToastContainer />
       <div class="w-[850px]  flex flex-col gap-2 px-10 pb-4 m-auto absolute top-28 left-[50%] translate-x-[-50%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex w-full justify-between '>
            <h1 className="text-4xl font-bold dark:text-white">{props.data[0].id} MCQ Test</h1>
            <h3 className="text-end text-lg dark:text-white">{user? user.displayName:''}<br/> <span className='text-base'>{user? user.email:''}</span> </h3>
            </div>
           <hr className="h-[2px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
           {result || sovledQuiz ? <></>:<>
           <h2 className="font-medium text-xl dark:text-white">{index}.{question.question}</h2>
           <pre className="font-medium text-sm dark:text-white">
            {question.code}
           </pre>
           <ul>
             <li ref={option1} onClick={(e)=>{checkAns(e,1)}} className='py-2.5 cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>A. {question.option1}</li>
             <li ref={option2} onClick={(e)=>{checkAns(e,2)}} className='py-2.5 cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 '>B. {question.option2}</li>
             <li ref={option3} onClick={(e)=>{checkAns(e,3)}} className='py-2.5 cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>C. {question.option3}</li>
             <li ref={option4} onClick={(e)=>{checkAns(e,4)}} className='py-2.5 cursor-pointer px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>D. {question.option4}</li>
           </ul>
           <button type="button" onClick={Next} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
           <div className="mb-3 pl-2 text-gray-500 dark:text-gray-400">
             {index} of {props.data.length-1} Questions {score}
           </div>
           </>}
           {/* solvedQuizs[sovledProblems.indexOf(props.data[0].id)].QuizScore */}
           {result || sovledQuiz ? <>
            <h2 class="font-medium text-xl  dark:text-white">You Scored {sovledQuiz && solvedQuizs[sovledProblems.indexOf(props.data[0].id)].QuizScore} out Of {props.data.length-1}</h2>
           <button type="button" onClick={Reset}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button></>:<></>}
           {/* {result || sovledQuiz? <>
            <h2 class="font-medium text-xl  dark:text-white">You are already sovled this Quiz</h2>
           <button type="button" onClick={Reset}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button></>:<></>} */}
             </div>

    </div>
  )
}

export default Quiz;


function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState([]);
	const [user] = useAuthState(auth);
  
	useEffect(() => {
		const getSolvedProblems = async () => {
			const userRef = doc(firestore, "users", user.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setSolvedProblems(userDoc.data().sovledQuiz);
			}
      
		};

		if (user) getSolvedProblems();
		if (!user) setSolvedProblems([]);
	}, [user]);

	return solvedProblems;
}
function useGetSolvedQuiz() {
	const [solvedQuizs, setSolvedQuizs] = useState([]);
	const [user] = useAuthState(auth);
  
	useEffect(() => {
		const getSolvedQuizs = async () => {
			const userRef = doc(firestore, "Quiz", user.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setSolvedQuizs(userDoc.data().QuizProblems);
			}     
		};

		if (user) getSolvedQuizs();
		if (!user) setSolvedQuizs([]);
	}, [user]);

	return solvedQuizs;
}