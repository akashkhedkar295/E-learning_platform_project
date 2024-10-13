import React, { useEffect, useState } from 'react'
import { AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { arrayRemove, arrayUnion, doc, getDoc, runTransaction, updateDoc } from 'firebase/firestore';
import {auth , firestore } from '../firebase/Firebase';
import RectangleSkelton from '../components/Skelton/RectangleSkelton';
import CircleSkelton from '../components/Skelton/CircleSkelton';
import { useAuthState } from "react-firebase-hooks/auth";


const ProblemDescription = (props) => {
	const {currentProblem , loading , problemDifficaltyClass,setCurrentProblem} = useGetCurrentProblem(props.problem.id);
	const {liked, disliked, solved, setData, starred} = useGetUsersDataOnProblem(props.problem.id);	
	const [user] = useAuthState(auth);
	const [updating, setUpdating] = useState(false);

	const returnUserDataAndProblemData = async (transaction) => {
		const userRef = doc(firestore, "users", user.uid);
		const problemRef = doc(firestore, "problems", props.problem.id);
		const userDoc = await transaction.get(userRef);
		const problemDoc = await transaction.get(problemRef);
		return { userDoc, problemDoc, userRef, problemRef };
	};

	const handleLike = async () => {
		if (!user) {
			alert("You must be logged in to like a problem");
			return;
		}
		if (updating) return;
		setUpdating(true);
		await runTransaction(firestore, async (transaction) => {
			const { problemDoc, userDoc, problemRef, userRef } = await returnUserDataAndProblemData(transaction);

			if (userDoc.exists() && problemDoc.exists()) {
				if (liked) {
					// remove problem id from likedProblems on user document, decrement likes on problem document
					transaction.update(userRef, {
						likedProblems: userDoc.data().likedProblems.filter((id) => id !== props.problem.id),
					});
					transaction.update(problemRef, {
						likes: problemDoc.data().likes - 1,
					});

					setCurrentProblem((prev) => (prev ? { ...prev, likes: prev.likes - 1 } : null));
					setData((prev) => ({ ...prev, liked: false }));
				} else if (disliked) {
					transaction.update(userRef, {
						likedProblems: [...userDoc.data().likedProblems, props.problem.id],
						dislikedProblems: userDoc.data().dislikedProblems.filter((id) => id !== props.problem.id),
					});
					transaction.update(problemRef, {
						likes: problemDoc.data().likes + 1,
						dislikes: problemDoc.data().dislikes - 1,
					});

					setCurrentProblem((prev) =>
						prev ? { ...prev, likes: prev.likes + 1, dislikes: prev.dislikes - 1 } : null
					);
					setData((prev) => ({ ...prev, liked: true, disliked: false }));
				} else {
					transaction.update(userRef, {
						likedProblems: [...userDoc.data().likedProblems, props.problem.id],
					});
					transaction.update(problemRef, {
						likes: problemDoc.data().likes + 1,
					});
					setCurrentProblem((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
					setData((prev) => ({ ...prev, liked: true }));
				}
			}
		});
		setUpdating(false);
	};


	const handleDislike = async () => {
		if (!user) {
			alert("You must be logged in to dislike a problem");
			return;
		}
		if (updating) return;
		setUpdating(true);
		await runTransaction(firestore, async (transaction) => {
			const { problemDoc, userDoc, problemRef, userRef } = await returnUserDataAndProblemData(transaction);
			if (userDoc.exists() && problemDoc.exists()) {
				// already disliked, already liked, not disliked or liked
				if (disliked) {
					transaction.update(userRef, {
						dislikedProblems: userDoc.data().dislikedProblems.filter((id) => id !== props.problem.id),
					});
					transaction.update(problemRef, {
						dislikes: problemDoc.data().dislikes - 1,
					});
					setCurrentProblem((prev) => (prev ? { ...prev, dislikes: prev.dislikes - 1 } : null));
					setData((prev) => ({ ...prev, disliked: false }));
				} else if (liked) {
					transaction.update(userRef, {
						dislikedProblems: [...userDoc.data().dislikedProblems, props.problem.id],
						likedProblems: userDoc.data().likedProblems.filter((id) => id !== props.problem.id),
					});
					transaction.update(problemRef, {
						dislikes: problemDoc.data().dislikes + 1,
						likes: problemDoc.data().likes - 1,
					});
					setCurrentProblem((prev) =>
						prev ? { ...prev, dislikes: prev.dislikes + 1, likes: prev.likes - 1 } : null
					);
					setData((prev) => ({ ...prev, disliked: true, liked: false }));
				} else {
					transaction.update(userRef, {
						dislikedProblems: [...userDoc.data().dislikedProblems, props.problem.id],
					});
					transaction.update(problemRef, {
						dislikes: problemDoc.data().dislikes + 1,
					});
					setCurrentProblem((prev) => (prev ? { ...prev, dislikes: prev.dislikes + 1 } : null));
					setData((prev) => ({ ...prev, disliked: true }));
				}
			}
		});
		setUpdating(false);
	};


	const handleStar = async () => {
		if (!user) {
			alert("You must be logged in to star a problem");
			return;
		}
		if (updating) return;
		setUpdating(true);

		if (!starred) {
			const userRef = doc(firestore, "users", user.uid);
			await updateDoc(userRef, {
				starredProblems: arrayUnion(props.problem.id),
			});
			setData((prev) => ({ ...prev, starred: true }));
		} else {
			const userRef = doc(firestore, "users", user.uid);
			await updateDoc(userRef, {
				starredProblems: arrayRemove(props.problem.id),
			});
			setData((prev) => ({ ...prev, starred: false }));
		}

		setUpdating(false);
	};

	return (
    <div className='' >
      <div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex'>
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					{user? user.displayName: ''}
				</div>
			</div>
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					{user? user.email: ''}
				</div>
			</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{props.problem.title}</div>
						</div>

						{!loading && currentProblem && (
							<div className='flex items-center mt-3'>
							<div
								className={`${problemDifficaltyClass} inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								{currentProblem.difficulty}
							</div>
							{(solved || props.solved ) && (
									<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
										<BsCheck2Circle />
									</div>
								)}
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6' onClick={handleLike}>
								{liked && !updating && <AiFillLike className='text-dark-blue-s' />  }
								{!liked && !updating && <AiFillLike/> }
								{updating && <AiOutlineLoading3Quarters className='animate-spin'/>}
								{/* <AiFillLike  className='text-dark-blue-s'/> */}
								<span className='text-xs'>{currentProblem.likes}</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6' onClick={handleDislike}>
							        {disliked && !updating && <AiFillDislike className='text-dark-blue-s' />}
									{!disliked && !updating && <AiFillDislike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}
								<span className='text-xs'>{currentProblem.dislikes}</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ' onClick={handleStar}>
							        {starred && !updating && <AiFillStar className='text-dark-yellow' />}
									{!starred && !updating && <TiStarOutline />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}
							</div>
						</div>
						)}

						{loading && (
							<div className='mt-3 flex space-x-2'>
								<RectangleSkelton />
								<CircleSkelton />
								<RectangleSkelton />
								<RectangleSkelton />
								<CircleSkelton />
							</div>
						)}
						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
							<div
							dangerouslySetInnerHTML={{__html: props.problem.problemStatement}}
							/>
						</div>

						{/* Examples */}
						<div className='mt-4'>
						

							
							{props.problem.examples.map((example,index)=>(
								<div key={example.id} className=''>
								<p className='font-medium text-white '>Example {index+1}: </p>
								{example.img && (
									<img src={example.img} alt="" className='mt-3' />
								)}
								<div className='example-card '>
									<pre>
										<strong className='text-white'>Input: </strong> {example.inputText}
										<br />
										<strong>Output:</strong> {example.outputText} <br />
										{
											example.explanation && (
												<>
												<strong>Explanation:</strong>{example.explanation}
												</>
											)
										}
									</pre>
								</div>
							</div>
							))}	
							
						</div>

						{/* Constraints */}
						<div className='my-8 pb-4'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc my-4'>
							<div
							dangerouslySetInnerHTML={{__html : props.problem.constraints}}
							/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default ProblemDescription;


function useGetCurrentProblem(problemId){
	const [currentProblem , setCurrentProblem] = useState(null);
	const [loading,setLoading] = useState(true);
	const [problemDifficaltyClass,setProblemDifficaltyClass] = useState("")
	useEffect(()=>{
		const getCurrentProblem = async() =>{
			setLoading(true);
			const docRef = doc(firestore, "problems",problemId);
			const docSnap = await getDoc(docRef);
			if(docSnap.exists()){
				const problem =docSnap.data();
				setCurrentProblem({id:docSnap.id, ...problem});
				setProblemDifficaltyClass(
					problem.difficulty === "Easy" ? 'bg-olive text-olive' : problem.difficulty === "Medium" ? "bg-dark-yellow text-dark-yellow" : "bg-dark-pink text-dark-pink"
				);
			}
			setLoading(false)
		};
		getCurrentProblem();
	},[problemId]);
	return {currentProblem,loading,problemDifficaltyClass,setCurrentProblem};
}


function useGetUsersDataOnProblem(problemId){
	const [data ,setData] = useState({liked:false,disliked:false,starred:false,solved:false});
	const [user] = useAuthState(auth);
	useEffect(()=>{
		const getUsersDataOrProblem = async () =>{
			const useRef = doc(firestore, "users",user.uid);
			const userSnap = await getDoc(useRef);
			if(userSnap.exists()){
				const data = userSnap.data();
				setData({
					liked: data.likedProblems.includes(problemId),
					disliked: data.dislikedProblems.includes(problemId),
					starred: data.starredProblems.includes(problemId),
					solved: data.sovledProblems.includes(problemId),
			});
			}
		};
		if(user) getUsersDataOrProblem();
		return () => setData({liked:false,disliked:false,starred:false,solved:false});
	},[problemId,user]);
	return {...data,setData }
}