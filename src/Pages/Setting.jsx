import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Utilities/Context"
import { toast } from "react-toastify"
import { auth } from "../Utilities/Firebase"
import Navbar from "../components/NavBar"
import emailjs from '@emailjs/browser'
const Setting = ()=>{
    const {myCamp,handleUpdate} = useContext(AppContext)
    const [email,setEmail] = useState(auth.currentUser.email)
    const [feed,setFeed] = useState("")
    const [subject,setSubject] = useState("")
    const [name,setName] = useState("")
    const [load,setLoad] = useState(false)
    const [settingDelay,setSettingDelay] = useState(false)
    // const [curPassword,setCurPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [change,setChange] = useState(false)
    const handleSubmit = (e,email,newPassword)=>{
        e.preventDefault();
        handleUpdate(email,newPassword)        
    }
    let keyTemplate = {
        subject: subject,
        name: name,
        email: email,
        message: feed
    }

    const serviceId="service_p9xvhab"
    const templateId="template_5hk2hbq"
    const publicKey="WpVKGvWo3oQE711ha"
    const sendFeed = (e)=>{
        e.preventDefault();
        setTimeout(setLoad(true),1000);
        setTimeout(() => {
            setLoad(false)
            emailjs
        .send(serviceId, templateId, keyTemplate,publicKey)
        .then(
          (success) => {
            toast.success('SUCCESS!',success);
            setSubject("")
            setName("")
            setFeed("")
          },
          (error) => {
            toast.error('FAILED...', error.text);
          },
        );
        }, 5000);
        
    }
    useEffect(()=>{
        setTimeout(() => {
            setSettingDelay(false)
        }, 1000);
        setTimeout(() => {
            setSettingDelay(true)
            myCamp()
        }, 7000);
    },[])
    return (
        <div className={`${settingDelay ? "lg:grid relative lg:grid-cols-8 items-start justify-start w-full gap-5":"w-full"}`}>
            {settingDelay ? (
                <>
                    <Navbar />
                    <div className="lg:col-span-6 gap-y-5 items-center justify-center grid grid-cols-1 w-full p-3 h-[100dvh] [&::-webkit-scrollbar]:hidden scrollbar overflow-y-scroll relative">
                        <div className="flex w-full items-center p-5 absolute top-2 justify-between   ">
                            <p onClick={()=>setChange(false)} className=" cursor-pointer flex items-center justify-start ">Security</p>
                            <p onClick={()=>setChange(true)} className=" cursor-pointer flex items-center justify-start ">Feedback</p>
                        </div>
                        <div className="w-full my-5 flex items-center justify-center  ">
                        {change ? (
                            <form onSubmit={(e)=>sendFeed(e)} action="" className="flex flex-col items-start justify-between sm:shadow-md w-full mx-3 rounded-md sm:max-w-[400px] gap-5 p-3 h-[60%] " >
                                <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="enter email" value={email} type="email" />
                                <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="enter full name" value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                                <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" />
                                <textarea className="w-full p-5 rounded-md flex items-start h-[200px] overflow-y-scroll justify-start border [&::-webkit-scrollbar]:hidden scrollbar " placeholder="enter your feed back" value={feed} onChange={(e)=>setFeed(e.target.value)} type="text" />
                                <button className="bg-green-500 p-2 w-full rounded-md text-white flex items-center hover:bg-transition-all justify-center cursor-pointer uppercase " type="submit">submit feedback {load&&<div className="loaders"></div>} </button>
                            </form>    
                        ) :(
                        <form onSubmit={(e)=>handleSubmit(e,email,newPassword)} action="" className="flex flex-col sm:shadow-md items-start justify-between w-full mx-3 rounded-md sm:max-w-[400px] gap-5 p-5  " >
                            <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="enter email" value={email} type="email" />
                            {/* <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="enter current password" value={curPassword} onChange={(e)=>setCurPassword(e.target.value)} type="password" /> */}
                            <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="enter new password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type="password" />
                            <button className="bg-green-500 p-2 w-full rounded-md text-white flex items-center hover:bg-transition-all justify-center cursor-pointer " type="submit">update</button>
                        </form>
                        ) }
                        </div>
                    </div>
                </>
            ):(
                <div className="lg:grid relative lg:grid-cols-8 items-center justify-center w-full gap-5">
                    <Navbar />
                    <div className="lg:col-span-6 flex items-center justify-center [&::-webkit-scrollbar]:hidden scrollbar grid-cols-1 w-full h-[100dvh] overflow-y-scroll">
                        <div className="loader "></div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Setting