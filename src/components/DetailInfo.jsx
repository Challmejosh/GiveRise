import { useContext } from "react";
import { AppContext } from "../Utilities/Context";
import { Link } from "react-router-dom";
const DetailInfo = ()=>{
    const {detail,detailLoad} = useContext(AppContext)    
    return(
        <div className="w-full grid iems-center justiy-center ">
            {detailLoad ? (
            <div className="flex w-full flex-col items-center justify-center gap-y-3 p-5 ">
                <p className="w-full flex items-center justify-start text-lg font-semibold  ">{detail.title}</p>
                <div className="w-full flex flex-col gap-y-3 items-start justify-center  ">
                    <p className="w-full flex items-center justify-start ">{detail.city},{detail.country}</p>
                    <p className="w-full flex items-center justify-start ">  {detail.date}</p>
                </div>
                <div className="w-full flex flex-col items-start justify-center  ">
                    <p className="w-full flex items-center justify-start text-lg font-semibold">Description</p>
                    <p className="w-full flex items-center justify-start ">{detail.description}</p>
                </div>
                <div className="w-full flex items-start justify-center flex-col ">
                    <p className="w-full flex items-center justify-start text-lg font-semibold">Campaign Information</p>
                    <p className="w-full flex items-center justify-start ">Funding Goals : {"\u20A6"} {detail.amount}</p>
                    <p className="w-full flex items-center justify-start "> Amount Raised : {"\u20A6"} 00 </p>
                </div>
                <div className="w-full flex flex-col items-start justify-center ">
                    <p className="w-full text-lg font-semibold">Important and impact of the Campaign</p>
                    <p className="w-full flex items-center justify-start ">{detail.impact}</p>
                </div>
                <div className="w-full flex flex-col items-start justify-center  ">
                    <p className="w-full text-lg font-semibold">Contact Information</p>
                    <p className="w-full flex items-center justify-start "> {detail.fullname}</p>
                    <p className="w-full flex items-center justify-start "> {detail.email}</p>
                    <p className="w-full flex items-center justify-start ">  {detail.phone}</p>
                </div>
                <div className=' flex items-center justify-center self-stretch w-full  '>
                    <img src={detail.image} alt="" className=" w-[200px] sm:w-[300px] h-[120px] object-cover rounded-lg " />
                </div>
                <Link to="/payment" className={`flex items-center justify-center bg-green-500 rounded-md cursor-pointer hover:bg-green-600 p-3 self-stretch w-full `}>
                    <p className="text-white text-center  "> Donate </p>
                </Link>
            </div>
            ):(
                <div className="w-full flex items-center justify-center   ">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    )
}
export default DetailInfo;