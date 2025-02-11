import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Utilities/Context";
import {FaTimes} from 'react-icons/fa'

const Sidebar = () => {
    const {logout,handleBar} = useContext(AppContext)
    return ( 
        <div className='w-full relative flex flex-col justify-between items-start p-2 h-full gap-y-5'>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex text-white items-center justify-end lg:hidden ">
              <FaTimes onClick={handleBar} size={34} className="cursor-pointer lg:hidden " />
            </div>
            <div className=" w-full text-white flex flex-col">
                <Link className="p-3 flex items-center justify-start rounded-[999px] hover:bg-[#dbdddf] text-lg " to="/dashboard" >Dashboard</Link>
                <Link className="p-3 flex items-center justify-start rounded-[999px] hover:bg-[#dbdddf] text-lg " to="/campaign" >Campaign</Link>
                <Link className="p-3 flex items-center justify-start rounded-[999px] hover:bg-[#dbdddf] text-lg " to="/profile">Profile</Link>
                <Link className="p-3 flex items-center justify-start rounded-[999px] hover:bg-[#dbdddf] text-lg " to="/setting">Setting</Link>
            </div>
          </div>
          <div className="w-full text-white cursor-pointer p-2 " onClick={()=>logout()} >Log out</div>
        </div>
     );
}
 
export default Sidebar;