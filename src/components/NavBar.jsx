import { useContext } from "react"
import { AppContext } from "../Utilities/Context"
import Sidebar from "./SideBar"
import {FaBars} from 'react-icons/fa'

const Navbar = ()=>{
    const { handleBar,bar } = useContext(AppContext)
    return(
        <div className= "w-full z-10 h-full lg:col-span-2">
                <FaBars onClick={handleBar} className=" translate-1 cursor-pointer w-fit  lg:hidden" size={34} />
            <div className={`${bar?"h-[100dvh] bg-green-500 absolute left-[0px] w-[60%] top-0 z-10" : "h-[100dvh] absolute left-[-200px] "} transition-all absolute h-[100dvh] lg:static  p-3 bg-green-500  `}>
                <Sidebar />
            </div>
        </div>
    )
}
export default Navbar;