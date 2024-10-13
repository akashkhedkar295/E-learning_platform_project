import React, { useEffect, useState } from 'react'
import { firestore ,auth } from '../firebase/Firebase';
import { collection, getDocs , deleteDoc , doc} from "firebase/firestore";


const Admin = (props) => {
  const [usersData,setUsersData] = useState();
  const getUserData = async()=>{
    const querySnapshot = await getDocs(collection(firestore, "users"));
    const userData = querySnapshot.docs.map(doc=>({id: doc.id,...doc.data()}));
    setUsersData(userData);
  }

  const handleDelete = async(id)=>{
    try{
      await deleteDoc(doc(firestore, 'users' , id));
      firestore.auth.getUser(id).then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
      setUsersData(usersData.filter((item)=> item.id !== id));
     
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getUserData();
  },[usersData]);

  return (
    <div className={`h-screen pr-28`}>
<div className="relative overflow-x-auto">
    <table className={`text-sm text-left rtl:text-right`}>
        <tbody>
            <tr>
                <th scope="row" className="px-3 py-4 font-medium">
                <label for="email" className={`block mb-2 text-base font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-900'} `}>Find User By Email</label>
                </th>
                <td className="px-3 py-4">
                <input type="email" id="email" className={` border ${props.them==='dark' ? 'focus:border-blue-500 focus:ring-blue-500 text-white border-gray-600 bg-gray-700' : 'bg-gray-50 focus:border-blue-500 focus:ring-blue-500 text-gray-900 border-gray-300' }   text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400`} placeholder="name@flowbite.com" required />
                </td>  
                <td className="px-3 py-4">
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>  
                </td>     
            </tr>                       
        </tbody>
    </table>



</div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className={`w-full text-sm text-left rtl:text-right ${props.them==="dark" ? 'text-gray-400' : 'text-gray-500'} `}>
        <thead className={`text-xs ${props.them==='dark' ? 'text-gray-400 bg-gray-700' : 'text-gray-800 bg-gray-50'}  uppercase`}>
            <tr>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                    UID
                </th>
                <th scope="col" className="px-6 py-3">
                  Email ID
                </th>
                <th scope="col" className="px-6 py-3">
                    PhotoURL
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {usersData?
          (
            usersData.map((uData,i)=>(
              <tr key={uData.id} className={`${props.them === 'dark'? 'odd:dark:bg-gray-900 border-gray-700 even:bg-gray-800' : 'odd:bg-white even:bg-gray-200'}  border-b `}>
          <th scope="row" className={`px-6 py-4 font-medium ${props.them === 'dark' ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>
          {uData.displayName} 
          </th>
          <td className="px-6 py-4">
            {uData.id}
          </td>
          <td className="px-6 py-4">
              {uData.email}
          </td>
          <td className="px-6 py-4">
              {uData.photoURL}
          </td>
          <td className="px-6 py-4 space-x-4">
              <button type='edit'  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
              <button type='delete'  onClick={()=>handleDelete(uData.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
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

export default Admin


