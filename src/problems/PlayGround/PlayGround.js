import React, { useEffect, useState } from 'react'
import PrefrenceNav from './PrefrenceNav'
import Split from 'react-split'
import { Editor } from '@monaco-editor/react'
import EditorFooter from './EditorFooter'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../firebase/Firebase'
import { problems } from '../ProblemList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import useLocalStorage from '../../hooks/useLocalStorage'

const PlayGround = (props) => {
    const [activeTestCaseId , setActiveTestCaseId] = useState(0);
    let [userCode , setUserCode] = useState(props.problem.starterCode);
    const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");
    const [settings , setSettings] = useState({
        fontSize: fontSize,
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
    });
    
    const [user] = useAuthState(auth);
    const notify = () => toast("Wow so easy !");
    const handleSubmite = async() =>{
        if(!user){
            toast.error("Please Login to submite your code !" , {position: "top-center" , autoClose: 3000 , theme: "dark"});
            return;
        }
        try{
            userCode = userCode.slice(userCode.indexOf(props.problem.starterFunctionName))
            const cb = new Function(`return ${userCode}`)();
            const handler = problems[props.problem.id].handlerFunction;
            if(typeof handler === "function"){
                const success = handler(cb)
                if(success){
                    toast.success('congrates All tests passed !' , {
                     position: "top-center",
                     autoClose: 3000,
                     theme: "dark"
                    })
                     
                     props.setSuccess(true);
                     setTimeout(()=>{
                         props.setSuccess(false);
                     },4000)
                     const userRef = doc(firestore, "users" , user.uid);
                     await updateDoc(userRef,{
                         sovledProblems: arrayUnion(props.problem.id),
                     })
                     props.setSolved(true);
                 }
            }
           
        }catch(error){
            toast.error("Oops! One or more test cases failed",{
                position: "top-center",
                autoClose: 3000,
                theme: "dark"
            })
            
         }
    }
    useEffect(()=>{
        const code =localStorage.getItem(`code-${props.problem.id}`);
        if(user){
            setUserCode(code ? JSON.parse(code): props.problem.starterCode)
        }else{
            setUserCode(props.problem.starterCode)
        }
    },[props.problem.id,user,props.problem.starterCode])
    const onChange = (value) =>{
        setUserCode(value);
        localStorage.setItem(`code-${props.problem.id}`,JSON.stringify(value));
    } 
  return (
    <div className='flex flex-col bg-dark-layer-1 relative overflow-hidden'>
     <PrefrenceNav setSettings={setSettings} settings={settings}/>
     <ToastContainer/>
     <Split className='h-[calc(100vh-94px)] ' direction='vertical' sizes={[50,50]} minSize={60}>
        <div className="w-full overflow-auto">
            <Editor 
            width='100%'
            height={'100vh'}
            value={userCode}
            theme='vs-dark'
            path='test.js'
            onChange={onChange}
            options={{
                inlineSuggest: true,
                fontSize: settings.fontSize,
                formatOnType: true,
                autoClosingBrackets: true,
                autoClosingQuotes:  "always",
                autoDetectHighContrast: true,
                colorDecorators:false,
                matchBrackets: 'always',
              }}
            /> 
        </div>
        <div className='w-full px-5 overflow-auto'>
            {/* Test case heading */}
            <div className="flex h-10 items-center space-x-6 ">
                <div className="relative flex h-full flex-col justify-center cursor-pointer">
                    <div className='text-sm font-medium leading-5 text-white'>
                        Tastcases
                    </div>
                    <hr  className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white'/>
                </div>
            </div>
            <div className="flex">
                {/* Case 1 */}

                {props.problem.examples.map((example,index)=>(
                    <div className="mr-2 items-start mt-2 text-white " key={example.id} 
                    onClick={()=>setActiveTestCaseId(index)}
                    >
                    <div className="flex flex-wrap items-center gap-y-4">
                        <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                        ${activeTestCaseId === index?'text-white':'text-gray-500'}
                        `}>
                            Case {index + 1}
                        </div>
                    </div>
                </div>
                ))}
                
            </div>

            <div className="font-semibold my-4 ">
                <p className='text-sm font-medium mt-4 text-white'>Inpue:</p>
                <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                    {props.problem.examples[activeTestCaseId].inputText}
                </div>

                <p className='text-sm font-medium mt-4 text-white'>Outpue:</p>
                <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                {props.problem.examples[activeTestCaseId].outputText}
                </div>
            </div>
        </div>
     </Split>
     <EditorFooter handleSubmite={handleSubmite} Notify={notify}/>
    </div>
  )
}

export default PlayGround
