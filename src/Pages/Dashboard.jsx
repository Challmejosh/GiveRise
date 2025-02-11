import Overview from "../components/Overview";
import Campaign from "../components/Campaign";
import Allcampaign from "../components/AllCampaign";
import {useEffect,useState,useContext} from 'react';
// import {getDoc,getDocs,collection,doc} from 'firebase/firestore'
import {auth} from '../Utilities/Firebase'
import {AppContext} from '../Utilities/Context'
import Navbar from "../components/NavBar";

const Dashboard = () => {
    const {allCamp,myCamp} = useContext(AppContext)
    const [dashDelay, setDashDelay] = useState(false)
    const user = auth.currentUser
    useEffect(()=>{
        setTimeout(() => {
            setDashDelay(false)
        }, 1000);
        setTimeout(() => {
            setDashDelay(true)           
            myCamp()
            allCamp()
        }, 7000);
    },[user])
    return ( 
        <div className={`${dashDelay ? 'lg:grid relative lg:grid-cols-8 items-start justify-start w-full gap-5':"w-full"}`}>
            {dashDelay ? (
                <>
                    <Navbar />
                    <div className={`lg:col-span-6 [&::-webkit-scrollbar]:hidden scrollbar gap-y-5 grid grid-cols-1 w-full p-3 h-[100dvh] overflow-y-scroll `}>
                        <Overview />
                        <Campaign />
                        <Allcampaign />
                    </div>
                </>
            ):(
                <div className="lg:grid relative lg:grid-cols-8 items-center justify-center w-full gap-5">
                    <Navbar />
                    <div className="lg:col-span-6 flex items-center justify-center  grid-cols-1 w-full h-[100dvh] overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar">
                        <div className="loader "></div>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Dashboard;