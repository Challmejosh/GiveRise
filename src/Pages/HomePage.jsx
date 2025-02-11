import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Contact from "../components/Contact";
import {useEffect,useState, useContext } from "react";
import { AppContext } from "../Utilities/Context";
import {FaTimes,FaHandsHelping,FaPeopleCarry,FaGraduationCap,FaExclamationTriangle,FaDollarSign,FaHospital,FaUserTie} from 'react-icons/fa'
import Allcampaign from '../components/AllCampaign'
const HomePage = () => {
    const {homeBar,handleHomeBar,allCamp} = useContext(AppContext)
    const [homeDelay, setHomeDelay] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setHomeDelay(false)
        }, 1000);
        setTimeout(() => {
            setHomeDelay(true)
        }, 7000);
        allCamp()
    },[])
    const category = [
        {color: "bg-blue-300",name: "Charity",icon: <FaHandsHelping size={24} className="text-green-400" />,},
        {color: "bg-pink-300",name: "Community",icon: <FaPeopleCarry size={24} className="text-green-400" />,},
        {color: "bg-red-300",name: "Academic",icon: <FaGraduationCap size={24} className="text-green-400" />,},
        {color: "bg-orange-300",name: "Disaster",icon: <FaExclamationTriangle size={24} className="text-green-400" />,},
        {color: "bg-green-300",name: "Business",icon: <FaDollarSign size={24} className="text-green-400" />,},
        {color: "bg-purple-300",name: "Legal",icon: <FaUserTie size={24} className="text-green-400" />,},
        {color: "bg-yellow-300",name: "Medical",icon: <FaHospital size={24} className="text-green-400" />,},
    ]
    return ( 
        <div className=" relative flex flex-col gap-y-5 ">
            {homeDelay ? (

                <>   
                        <div className="w-full bg-white z-10 fixed top-0 grid grid-cols-2 items-center justify-between p-5 shadow-lg">
                            <div className="text-2xl font-semibold text-green-400 " >GiveRise</div>
                            <HomeNav />
                        </div>
                        <div className="w-full mt-[90px] h-[400px]  flex items-center justify-center  ">
                            <img src="/Hero-section.webp" className="w-full h-full object-cover " alt="" />
                        </div>
                        <Allcampaign />
                        <div id="start" className="flex flex-col items-center justify-start w-full  ">
                            <h1 className="my-3 flex items-center justify-start w-full p-3 font-semibold ">Start Your Campaign in just three steps</h1>
                            <div className="mx-1.5 flex flex-col sm:flex-row items-center justify-center gap-3 text-md ">
                                <div className="p-5 border rounded-md border-green-400 hover:translate-y-[-12px] transition-all bg-blue-100 cursor-pointer w-full sm:h-[350px] flex flex-col sm:items-center lg:justify-start lg:item-start items-start justify-center md:min-h-[250px] lg:h-[250px] ">
                                    <li className="">Sign up and set up your campaign in minutes</li>
                                    <li className="">Add a compelling title description, and a goal amount</li>
                                    <li className="">
                                        Upload images or videos to tell your story
                                    </li>
                                    <p className=""><span className="font-semibold">Tips : </span> The more details you provide, the better </p>
                                </div>
                                <div className="p-5 border rounded-md border-green-400 hover:translate-y-[-12px] transition-all bg-blue-100 cursor-pointer w-full sm:h-[350px] flex flex-col sm:items-center lg:justify-start lg:item-start items-start justify-center md:min-h-[250px] lg:h-[250px] ">
                                    <li className="">Share Your Campaign on social media, email, and messaging apps</li>
                                    <li className="">Engage with backers and update them on your progress</li>
                                    <li className="">Encourage supporters to spread the word</li>
                                    <p className=""><span className="font-semibold">Tips : </span> Your network is your biggest asset-get them involved!</p>
                                </div>
                                <div className="p-5 border rounded-md border-green-400 hover:translate-y-[-12px] transition-all bg-blue-100 cursor-pointer w-full sm:h-[350px] flex flex-col sm:items-center lg:justify-start lg:item-start items-start justify-center md:min-h-[250px] lg:h-[250px] ">
                                    <li className="">Collect donations securely through multiple payment options</li>
                                    <li className="">Withdraw funds quickly and easily.</li>
                                    <li className="">Keep supporters updated on how their contributions make a difference</li>
                                    <p className=""><span className="font-semibold">Tips : </span> No goal is too big or small_eery contribution counts</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-center flex-col gap-10 mx-auto static p-5 sm:flex-row sm:flex-wrap ">
                            {category.map((item,index)=>(
                                <div key={index} className={`w-[300px] sm:w-[350px] bg-blue-300 flex items-center flex-col relative justify-center rounded-md h-[100px] shadow-md p-5 ${item.color} `}>
                                    <p className='flex items-center justify-center '>{item.name}</p>
                                    <p className="absolute text-center bottom-[-30px] bg-white p-5 rounded-full shadow-sm ">{item.icon}</p>
                                </div>
                            ))}
                            <Contact />
                        </div>
                        <div className={`${homeBar ? "fixed z-10 top-0 h-[100px] shadow-lg bg-white w-full flex sm:hidden gap-5 p-5 items-center justify-between transition-all  ":"flex lg:hidden items-start w-full justify-between gap-3 transition-all absolute top-[-300px]"} `}>
                            <div className="flex flex-col items-center justify-between w-full ">
                                <a href="#start">How to get started</a>
                                <a href="#works">How it works</a>
                                <Link to="/login">Get Started</Link>
                            </div>
                            <FaTimes size={24} className="cursor-pointer" onClick={handleHomeBar} />
                        </div>
                </>
            ):(
                <div className="lg:grid relative lg:grid-cols-8 items-center justify-center w-full gap-5">
                    <div className="lg:col-span-8 flex items-center justify-center [&::-webkit-scrollbar]:hidden scrollbar grid-cols-1 w-full h-[100dvh] overflow-y-scroll">
                        <div className="loader "></div>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default HomePage;