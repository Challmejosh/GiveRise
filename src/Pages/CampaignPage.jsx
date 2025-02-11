import Navbar from "../components/NavBar";
import {AppContext} from '../Utilities/Context'
import {useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const CampaignPage = () => {
    const {allCamp,allLoad,all} = useContext(AppContext)
    const [count,setCount] = useState(8)
    const [campDelay,setCampDelay] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setCampDelay(false)
        }, 1000);
        setTimeout(() => {
            setCampDelay(true)
            allCamp()
        }, 7000);
    },[])
    return ( 
        <div className={`${campDelay ? "grid relative lg:grid-cols-8 items-center justify-center gap-5 ":"w-full"}`}>
        {campDelay ? (
            <>
                <Navbar />
                    <div className="col-span-6 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar h-[100dvh] w-full">
                        <div className="flex w-full items-center justify-end ">
                            <Link to="/create_campaign" className="p-5 w-[200px]  ">
                                <p className="bg-green-400 p-3 rounded-md text-white cursor-pointer  "> + create campaign</p>
                            </Link>
                        </div>
                        {allLoad ? (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full item-center justify-center">
                                {!all ? (
                                    <div className="">
                                        No Campaign found
                                    </div>
                                ):(
                                    <>
                                    {all.slice(0, count).map((item,index) =>(
                                        <div key={index} className=" h-[300px] shadow-sm rounded-md p-3 w-full flex flex-col overflow-hidden items-start justify-between gap-3">
                                            <img src={item.image} className="w-full rounded-lg " alt="" />
                                            <Link to={`/detail/${item.id}`} className="flex flex-col w-full p-3">
                                                <p className="font-semibold text-lg ">{item.title}</p>
                                                <p className=" text-md w-fit line-clamp-2 flex flex-wrap ">{item.description}</p>
                                                <div className="flex items-center w-full justify-end ">
                                                    <p className="font-semibold">{"\u20A6"}{item.amount}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            )}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center w-full text-lg text-center ">
                            Loading...
                            </div>
                        )}
                        <div className="flex w-full my-5 items-center justify-center">
                            <p onClick={()=>setCount(prev => prev + 8)} className="w-[200px] flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-md text-center p-3 text-white cursor-pointer ">see more</p>
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
 
export default CampaignPage;