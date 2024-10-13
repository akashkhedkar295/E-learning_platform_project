import React from 'react'
import { useEffect, useState } from 'react'
import { firestore } from '../firebase/Firebase';
import { collection, getDocs , deleteDoc,doc } from 'firebase/firestore';

const AdminProblemData = (props) => {
    const [problemData , setProblemData] = useState();
    const getProblemsData = async()=>{
        const querySnapshot = await getDocs(collection(firestore,"problems"));
        const ProData = querySnapshot.docs.map(doc=>({id: doc.id,...doc.data()}));
        setProblemData(ProData);
    }
    const handleDelete = async(id)=>{
        try{
          await deleteDoc(doc(firestore, 'problems' , id));
          setProblemData(problemData.filter((item)=> item.id !== id));
         
        }catch(error){
          console.log(error);
        }
      }
    useEffect(()=>{
        getProblemsData();
    },[])
  return (
    <div>
        <div className="relative overflow-x-auto">
    <table className={`text-sm text-left rtl:text-right`}>
        <tbody>
            
            <tr>
            <td className="px-3 py-4">
                <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'}`}>PROBLEM TITLE </label>
                <input type="text" id="email" className={` border ${props.them==='dark' ? 'focus:border-blue-500 focus:ring-blue-500 text-white border-gray-600 bg-gray-700' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500 text-gray-900 border-gray-300' }   text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400`} placeholder="PROBLEM TITLE" required />
            </td> 
                <td className="px-3 py-4">
                <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>CATEGORY </label>
                <input type="text" id="email" className={` border ${props.them==='dark' ? 'focus:border-blue-500 focus:ring-blue-500 text-white border-gray-600 bg-gray-700' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500 text-gray-900 border-gray-300' }   text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400`} placeholder="CATEGORY" required />
                </td>  
                <td className="px-3 py-4">
                <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>DIFFICULTY	</label>
                <input type="text" id="email" className={` border ${props.them==='dark' ? 'focus:border-blue-500 focus:ring-blue-500 text-white border-gray-600 bg-gray-700' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500 text-gray-900 border-gray-300' }   text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400`} placeholder="DIFFICULTY" required />
                </td>
                <td className="px-3 py-4">
                <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}>VEDIOID </label>
                <input type="text" id="email" className={` border ${props.them==='dark' ? 'focus:border-blue-500 focus:ring-blue-500 text-white border-gray-600 bg-gray-700' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500 text-gray-900 border-gray-300' }   text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400`} placeholder="VEDIOID" required />
                </td>
                <td className="px-3 py-4">
                <label htmlFor="email" className={`block mb-2 text-sm font-medium ${props.them==='dark' ? 'text-white': 'text-gray-900'} `}> Assignment Upload File </label>
                 <input className={`block w-full text-sm  border  rounded-lg cursor-pointer ${props.them === 'dark' ? ' border-gray-600 bg-gray-700 text-gray-400 ' : 'border-gray-300 text-gray-900 bg-gray-50'}  focus:outline-none dark:placeholder-gray-400`} id="file_input" type="file"/>

                </td>   
                <td className="px-3 py-4">
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>  
                </td>   
            </tr>
            <tr>
             
            </tr>                       
        </tbody>
    </table>



</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className={`w-full text-sm text-left rtl:text-right ${props.them==="dark" ? 'text-gray-400' : 'text-gray-500'} `}>
        <thead className={`text-xs ${props.them==='dark' ? 'text-gray-400 bg-gray-700' : 'text-gray-800 bg-gray-50'}  uppercase`}>
            <tr>
                <th scope="col" className="px-6 py-3">
                  Order
                </th>
                <th scope="col" className="px-6 py-3">
                    Problem Title
                </th>
                <th scope="col" className="px-6 py-3">
                 Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Difficulty
                </th>
                <th scope="col" className="px-6 py-3">
                    Likes
                </th>
                <th scope="col" className="px-6 py-3">
                    Dislikes
                </th>
                <th scope="col" className="px-6 py-3">
                    VedioID
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {problemData?
          (
            problemData.map((proData,i)=>(
              <tr key={proData.id} className={`${props.them === 'dark'? 'odd:dark:bg-gray-900 border-gray-700 even:bg-gray-800' : 'odd:bg-white even:bg-gray-200'}  border-b `}>
          <th scope="row" className={`px-6 py-4 font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>
          {proData.order} 
          </th>
          <td className="px-6 py-4">
            {proData.id}
          </td>
          <td className="px-6 py-4">
              {proData.category}
          </td>
          <td className="px-6 py-4">
              {proData.difficulty}
          </td>
          <td className="px-6 py-4">
              {proData.likes}
          </td>
          <td className="px-6 py-4">
              {proData.dislikes}
          </td>
          <td className="px-6 py-4">
              {proData.videoId}
          </td> 
          <td className="px-6 py-4 space-x-4">
              <button type='edit'  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
              <button type='delete' onClick={()=>handleDelete(proData.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
          </td>    
      </tr>
            ))
          ):<></>} 
        </tbody>
    </table>
</div>
    </div>
  )
}

export default AdminProblemData
