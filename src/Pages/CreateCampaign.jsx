import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Utilities/Context";
import {FaCheck} from 'react-icons/fa'
import Navbar from "../components/NavBar";

const CreateCampaign = ()=>{
    const {createCamp,step,setStep,handleFile,setLoading,loading,file,setFile} = useContext(AppContext)
    const [fullName,setFullName] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [amount,setAmount] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [impact,setImpact] = useState('')
    const [country,setCountry] = useState('')
    const [city,setCity] = useState('')
    const [createDelay,setCreateDelay] = useState(false)


    const allCreate = async (e,title,description,fullName,amount,email,phone,country,impact,city,img)=>{
        e.preventDefault();
        if(step === "Basic Information"){            
                setLoading(true)
            setTimeout(()=>{
                setLoading(false)
                setStep("Campaign Information")
            },5000)
        }else if (step === "Campaign Information" ){
            setLoading(true)
            setTimeout(()=>{
            setLoading(false)
            setStep("Contact Information")
            },5000)
        }else if (step === "Contact Information" ){
            await createCamp(title,description,fullName,amount,email,phone,country,impact,city,img)
            setStep("success")
            setFile("")
            setCity("")
            setImpact("")
            setCountry("")
            setPhone("")
            setEmail("")
            setAmount("")
            setFullName("")
            setDescription("")
            setTitle("")
        }else{
            setLoading(true)
            setTimeout(()=>{
            setLoading(false)
            setStep("Basic Information")
            },5000)
        }
    }
    const goBack = ()=>{
        if(step === "Basic Information"){
            return
        }else if (step === "Campaign Information" ){
            setStep("Basic Information")
        }else if (step === "Contact Information" ){
            setStep("Campaign Information")
        }
    }
    useEffect(()=>{
        setTimeout(() => {
            setCreateDelay(false)
        }, 1000);
        setTimeout(() => {
            setCreateDelay(true)
        }, 5000);
    })
    return(
        <div className={`${createDelay ? " w-full relative grid lg:grid-cols-8 items-center justify-center gap-5 ":"w-full"}`}>
            {createDelay ? (

            <>
                <Navbar />
                <form onSubmit={(e)=>{
                    allCreate(e,title,description,fullName,amount,email,phone,country,impact,city,file)
                }}

                    className="lg:col-span-6 flex flex-col items-start justify-center sm:w-[600px] w-full p-3 sm:shadow-sm sm:rounded-lg  h-[100dvh] relative bg-transparent mx-3 gap-y-3  " >
                        {step === "Basic Information" ? (
                        <>     
                            <div className="grid w-full">
                                <label htmlFor="">Campaign Title</label>
                                <input required type="text" placeholder="Enter a Campaign Title" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md" value={title} onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div className="grid w-full">
                                <label htmlFor="">Campaign Country</label>
                                <input required type="text" placeholder="Enter Country" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md" value={country} onChange={(e)=>setCountry(e.target.value)} />
                            </div>
                            <div className="grid w-full">
                                <label htmlFor="">Campaign City</label>
                                <input required type="text" placeholder="Enter City" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md" value={city} onChange={(e)=>setCity(e.target.value)} />
                            </div>
                            <div className="grid w-full">
                                <label htmlFor="text-sm">Campaign Category</label>
                                <select required name="" id="" className="p-5 w-full flex items-center justify-start border rounded-md">
                                    <option value="" className="">Select a Category</option>
                                    <option value="" className="">Education</option>
                                    <option value="" className="">Health</option>
                                    <option value="" className="">Career</option>
                                    <option value="" className="">Community Development</option>
                                    <option value="" className="">Others</option>
                                </select>
                            </div>
                        </>
                        ) : step === "Campaign Information" ? (
                            <>
                                <div className="grid w-full">
                                    <label htmlFor="">Description</label>
                                    <input required type="text" placeholder="Enter a description" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md" value={description} onChange={(e)=>setDescription(e.target.value)} />
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="">Why is this campaign important to you? and is the impact it will make ? </label>
                                    <input required type="text" placeholder="Enter an impact of the campaign" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md" value={impact} onChange={(e)=>setImpact(e.target.value)} />
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="">Amount to be raised</label>
                                    <input required type="text" inputMode="numeric" title="number only" placeholder="2000" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="image">select an image</label>
                                    <input id="image" required onChange={(e)=>handleFile(e)} accept="/images/**" type="file" placeholder="" hidden name="file" className="p-5 w-full flex items-center justify-start border rounded-md" />
                                    {file && <img src={file} alt="" className="w-16 h-28 object-cover " /> }
                                </div>
                            </>
                        ) : step === "Contact Information" ? (
                            <>
                                <div className="grid w-full mt-10 ">
                                    <label htmlFor="text-sm">Full Name</label>
                                    <input required type="text" placeholder="Full Name" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md   " value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="text-sm">Email</label>
                                    <input required type="email" placeholder="Email" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md   " value={email} onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="text-sm">Phone Number</label>
                                    <input required type="text" inputMode="numeric" pattern="[0-9]" placeholder="Phone Number" id="" name="" className="p-5 w-full flex items-center justify-start border rounded-md   " value={phone} onChange={(e)=>setPhone(e.target.value)} />
                                </div>
                            </>
                        ) :(
                            <div className="flex items-center justify-center w-full ">
                                <FaCheck className="text-green-500" />
                            </div>
                        )}
                        <div className={step === "Contact Information" ? "flex item-center justify-center w-full " : step === "Basic Information" ? "flex items-center w-full justify-end  " : step === "Campaign Information" ? "flex items-center w-full justify-between" : "flex items-center justify-center w-full"  }>
                            <div onClick={goBack} className={`${step === "Basic Information"? "hidden" : step ==="Campaign Information" ? "w-[150px] flex items-center justify-center text-center text-white " : step === "Contact Information"? "absolute top-0 left-1 w-[150px] flex items-center justify-center text-center text-white " : "hidden" } bg-green-500 hover:bg-green-600 rounded-md p-3 `}>go back</div>

                            <button type="submit" className={step === "Contact Information" ? "bg-green-500 flex items-center justify-center text-center text-white cursor-pointer hover:bg-green-600 p-5 rounded-md w-full " : step === "Basic Information" ? " items-center justify-center text-center flex bg-green-500 text-white hover:bg-green-600 p-3 rounded-md w-[150px] cursor-pointer  " : step === "Campaign Information" ? " items-center justify-center text-center flex bg-green-500 text-white hover:bg-green-600 p-3 rounded-md w-[150px] cursor-pointer " : "bg-green-500 flex items-center justify-center text-center text-white cursor-pointer hover:bg-green-600 p-5 rounded-md w-full  " }>
                                
                            {step === "Basic Information" ? (
                                <div className="flex gap-3 items-center justify-center ">
                                    <p className="">proceed</p>
                                    {loading && <p className="loaders"></p> } 
                                </div>
                            ) : step === "Campaign Information" ? (
                                <div className="flex gap-3 items-center justify-center">
                                    <p className="">proceed</p>
                                    {loading && <p className=".loaders"></p> } 
                                </div>
                            ) : step === "Contact Information" ? (
                                <div className="flex gap-3 items-center justify-center">
                                    <p className="">create campaign</p>
                                    {loading && <p className="loaders"></p> } 
                                </div>
                            ) :(
                                <div className="flex gap-3 items-center justify-center">
                                    <p className="">success</p>
                                    {loading && <p className="loaders"></p> } 
                                </div>
                            ) }
                            </button>
                        </div>
                </form>
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
export default CreateCampaign;
