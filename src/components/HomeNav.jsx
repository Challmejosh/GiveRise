import { Link } from "react-router-dom";
// import {AppContext} from '../Utilities/Context'
// import {useContext} from 'react'
import Bar from "./bar";

const HomeNav = () => {
    // const {} = useContext(AppContext)
    return ( 
        <div className=" flex items-center w-full justify-between relative ">
            <div className={`sm:flex items-start w-full justify-between gap-3 transition-all hidden text-md `}>
                    <a href="#start">How to get started</a>
                    <a href="#works">How it works</a>
                    <Link to="/login">Get Started</Link>
            </div>
            <Bar />
        </div>
     );
}
 
export default HomeNav;