import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase/Firebase';
import { collection, getDocs  } from 'firebase/firestore';


const AdminFeedback = (props) => {
    const [problemData , setProblemData] = useState();
    const getProblemsData = async()=>{
        const querySnapshot = await getDocs(collection(firestore,"Feedback"));
        const ProData = querySnapshot.docs.map(doc=>({id: doc.id,...doc.data()}));
        setProblemData(ProData);
    }
    
    useEffect(()=>{
        getProblemsData();
    },[])
  return (
    <div className='h-screen'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className={`w-full text-sm text-left rtl:text-right ${props.them==="dark" ? 'text-gray-400' : 'text-gray-500'} `}>
        <thead className={`text-xs ${props.them==='dark' ? 'text-gray-400 bg-gray-700' : 'text-gray-800 bg-gray-50'}  uppercase`}>
            <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                 Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>

            </tr>
        </thead>
        <tbody>
          {problemData ?
          (
            problemData[0].Fname.map((proData,i)=>(
              <tr key={proData.i} className={`${props.them === 'dark'? 'odd:dark:bg-gray-900 border-gray-700 even:bg-gray-800' : 'odd:bg-white even:bg-gray-200'}  border-b `}>
          <th scope="row" className={`px-6 py-4 font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>
          {i+1} 
          </th>
          <td className="px-6 py-4">
            {problemData[0].Fname[i] +" "+ problemData[0].Lname[i]}
          </td>
          <td className="px-6 py-4">
              {problemData[0].email[i]}
          </td>
          <td className="px-6 py-4">
              {problemData[0].message[i]}
          </td>
          <td className="px-6 py-4 space-x-6">
              <button type='edit'  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
              
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

export default AdminFeedback
