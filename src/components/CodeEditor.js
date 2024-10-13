import React from 'react'
import Editor from '@monaco-editor/react'
import { useState } from 'react';
import axios from 'axios';
import { languageOptions } from '../constants/languageOptions';


export default function CodeEditor(props) {
  const [code,setCode] = useState("");
  const [output,setOutput]=useState("");
  const [codeError,setCodeError] = useState("");
  const [fileName,setFileName] = useState("script.py");
  const [processing, setProcessing] = useState(null);
  const [input,setInput] = useState(null)
  
  const file= languageOptions[fileName];
  const handleCompile = () => {
    setProcessing(true);
    if(fileName==='script.html'){
     let webOutPut = document.getElementById('codeOut');
     webOutPut.contentDocument.body.innerHTML=code;
     setProcessing(false);
    }else{
    const formData = {
      language_id: file.id,
      source_code: btoa(code),
      
      stdin: btoa(input)
    };
    
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "95fa0eac66mshd0d658a4918a0cfp127c91jsn803e1798dca4",
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
    }
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "95fa0eac66mshd0d658a4918a0cfp127c91jsn803e1798dca4",
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setCodeError(response.data.stderr);
        setOutput(response.data.stdout);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
    }
  };
return (
  
  <div className="h-[85%] w-full md:px-8  pb-6 pt-[95px] overflow-y-hidden ">
  <div className=''>
    <div className=" py-3 pl-10 option-con  space-x-3 flex">
      <select name="code-lang" id="code-lang" onClick={(event)=>setFileName(event.target.value)} className={`text-white font-medium outline-none text-sm px-2 text-left bg-[#1e1e1e]`}>
        {Object.keys(languageOptions).map((items)=> <option key={items} value={items}>{languageOptions[items].lable}</option>)}
      </select>
      <button type="button"  onClick={handleCompile} className={`text-white bg-blue-700 flex text-base hover:bg-blue-800  font-medium rounded-lg  px-4 py-2 text-center ${props.them}:bg-blue-600 ${props.them}:hover:bg-blue-700 ${props.them}:focus:ring-blue-800`}>
      {processing ? "Processing..." : "Run"}
      <svg className="w-4 h-4 pl-2 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
    </svg>
      </button>
   </div>
   <div className="code-contner  flex md:flex-row flex-col md:space-x-1 w-full h-full">
      <Editor
        width='100%'
        height='100vh'
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        value={code}
        defaultValue={file.value}
        onChange={(e)=>setCode(e)}
        options={{
            inlineSuggest: true,
            fontSize: "18px",
            formatOnType: true,
            autoClosingBrackets: true,
            autoClosingQuotes:  "always",
            autoDetectHighContrast: true,
            colorDecorators:false,
            matchBrackets: 'always',
          }
        }
      />
    
    <div className={`w-1/2 justify-betweens space-y-2 pl-3 scrollbar-hide overflow-hidden rounded`} style={{height:"75vh"}}>
    <div className="block ">
    <label htmlFor="Output Box" className={`block mb-2 text-base font-medium text-gray-900 ${props.them}:text-white `}>Output Box</label>
        <pre className={`${fileName==='script.html'?'hidden':''} w-full h-[370px] my-2 mr-2 text-white rounded-md overflow-y-scroll scrollbar-hide touch-auto text-lg font-normal bg-black`}> 
        {atob(output)===atob(null)?atob(codeError):atob(output)}
        </pre>
        
      </div>
      <iframe id='codeOut' title='Output' className={`${fileName==='script.html'?'':'hidden'} border-gray-600 bg-white  border-4 w-full h-[535px] overflow-scroll`}></iframe>
      <label htmlFor="Input Box" className={`block mb-2 text-base light:text-white font-medium text-gray-900 `}>Input Box</label>
      <textarea id="message"  type='text' onChange={(e)=>setInput(e.target.value)} className={`${fileName==='script.html'?'hidden':''} w-full h-[100px] p-5 text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 `}></textarea>
    </div>
   </div>
   </div>
  </div>
)
}