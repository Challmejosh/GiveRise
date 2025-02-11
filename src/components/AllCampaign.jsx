import { useContext } from "react";
import { AppContext } from "../Utilities/Context";

const Allcampaign = () => {
    const {all,load,allLoad,handleLoad} = useContext(AppContext)
    return ( 
        <div id="works" className="p-5 w-full rounded-lg flex flex-col items-start justify-center gap-y-3  ">
            <h1 className="flex items-center justify-start text-lg font-semibold ">On-going campaigns</h1>
            <div className="w-full flex flex-col items-center  ">
                {allLoad ? (
                    <div className="flex w-full item-center justify-center  flex-col">
                        {all.slice(0, load).map((item,index) =>(
                            <div key={index} className="border-b border-b-gray-300 p-3 w-full flex gap-x-3">
                                <img src={item.image} className="w-[150px] " alt="" />
                                <div className="flex flex-col p-3">
                                    <p className="font-semibold text-lg ">{item.title}</p>
                                    <div className=" text-md w-fit line-clamp-2 flex flex-wrap ">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full text-lg text-center ">
                        <div className="loader"></div>
                    </div>
                )}
                <div onClick={handleLoad} className="flex items-center justify-center p-3 bg-green-400 rounded-md w-[150px] text-white text-center cursor-pointer my-3 ">Show More</div>
            </div>
        </div>
     );
}
 
export default Allcampaign;