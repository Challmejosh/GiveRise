import {  useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const [email,setEmail] = useState("")
     const passwordReset = (e,email)=>{
            e.preventDefault()
            sendPasswordResetEmail(auth,email).then(()=>{
                toast.success("email sent")
            }
            ).catch((error)=>{
                alert(error.message)
            })
        }
    return ( 
        <div className="w-full flex items-center justify-center h-[100dvh] ">
             <form onSubmit={(e)=>passwordReset(e,email)} action="" className=" flex flex-col items-center justify-center max-w-[400px] gap-3 shadow-md rounded-md p-5 min-w-[200px] w-full " >
                    <div className="w-full  ">
                        <label className="text-md " htmlFor="email">Email Address</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg  " required type="text" id="email" name="email" placeholder="email address" />
                    </div>
                    <button className="bg-green-400 hover:bg-green-600 flex items-center justify-center w-full p-3 rounded-lg cursor-pointer text-white " type="submit"> send email </button>
                </form>
        </div>
     );
}
 
export default ForgetPassword;