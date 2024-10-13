import React, { useState } from "react";
import { firestore } from "../firebase/Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Feedback = (props) => {
  const userRef = doc(firestore, "Feedback" , "qASBfSbKnUFncs3Eh939");
  const [inputs,setInputs] = useState({Fname:'',Lname:'',email:'',message:''});
  const handleChangeInput=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
  };

  const onSubmit = async (e) => {
      if(!inputs.email || !inputs.Fname || !inputs.message) return toast.error("Please fill all fields",{ position: "top-center", autoClose: 3000, theme: "dark" });
    try{
      await updateDoc(userRef,{
        Fname: arrayUnion(inputs.Fname),
        Lname: arrayUnion(inputs.Lname),
        email: arrayUnion(inputs.email),
        message: arrayUnion(inputs.message),
      });
    }catch(err){
       console.log(err);
    } 
  };
  return (
    <div id="Feekback" className={`md:px-28 p-4  pt-16`}>
      <form className="max-w-full mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Fname"
              onChange={handleChangeInput}
              id="floating_first_name"
              className={`block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Lname"
              onChange={handleChangeInput}
              id="floating_last_name"
              className={`block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className={`peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            onChange={handleChangeInput}
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className={`peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            id="message"
            name="message"
            onChange={handleChangeInput}
            rows="4"
            className={`block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=""
            required
          />
          <label
            htmlFor="message"
            className={`peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Your message
          </label>
        </div>

        <button
          type="submit" onClick={onSubmit}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
