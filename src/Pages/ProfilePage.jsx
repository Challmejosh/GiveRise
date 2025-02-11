import ProfileInfo from '../components/ProfileInfo'
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import Campaign from "../components/Campaign"
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../Utilities/Context';
const ProfilePage = () => {
    const {myCamp} = useContext(AppContext)
    const [profileDelay, setProfileDelay] = useState(false)
    useEffect(()=>{
        myCamp()
        setTimeout(() => {
            setProfileDelay(false)
        }, 1000);
        setTimeout(() => {
            setProfileDelay(true)
        }, 7000);
    },[])
    return ( 
            <div className={`${profileDelay? "lg:grid relative lg:grid-cols-8 items-start justify-start w-full gap-5": "w-full"}`}>
        {profileDelay ? (
            <>
                <Navbar />
                <div className="lg:col-span-6 gap-y-5 grid grid-cols-1 [&::-webkit-scrollbar]:hidden scrollbar w-full p-3 h-[100dvh] overflow-y-scroll">
                    <div className="flex items-center justify-between p-2 border-b bg-blue-100 border-b-[#F8F8F8] gap-3 ">   
                        <ProfileInfo />
                        <Link to="/setting" className="max-w-[200px] bg-green-500 rounded-md p-3 text-white ">edit profile</Link>
                    </div>
                    <div className="">
                        <Campaign />
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
     );
}
 
export default ProfilePage;