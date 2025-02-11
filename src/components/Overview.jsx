import { useContext } from "react";
import { AppContext } from "../Utilities/Context";

const Overview = () => {
    const {mine} = useContext(AppContext)
    return ( 
        <div className="w-full">
            <h1 className="font-semibold mb-3 text-lg flex w-full items-center justify-start ">Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-6 items-center gap-3 ">
                <div className="flex rounded-md relative flex-col items-center justify-center w-full h-[200px] sm:col-span-2 p-4 bg-blue-100 shadow  ">
                    <p className="absolute top-1 left-2 text-md font-semibold "> Total Donations 0 </p>
                </div>
                <div className="flex rounded-md relative flex-col items-center justify-center w-full h-[200px] sm:col-span-2 p-4 bg-blue-100 shadow  ">
                    <p className="absolute top-1 left-2 text-md font-semibold "> Total Campaign {mine.length} </p>
                </div>
                <div className="flex rounded-md relative flex-col items-center justify-center w-full h-[200px] sm:col-span-2 p-4 bg-blue-100 shadow  ">
                    <p className="absolute top-1 left-2 text-md font-semibold "> Total Donors 0 </p>
                </div>
            </div>
        </div>
     );
}
 
export default Overview;