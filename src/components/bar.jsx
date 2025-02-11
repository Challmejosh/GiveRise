import {FaTimes,FaBars} from 'react-icons/fa'
import {AppContext} from '../Utilities/Context'
import { useContext } from 'react'

const Bar = ()=>{
    const {handleHomeBar,homeBar} = useContext(AppContext)
    return (
        <div  className={`flex cursor-pointer sm:hidden w-full items-center p-3 justify-end `}>
                {homeBar ? (
                    <FaTimes onClick={handleHomeBar} size={24} className=" sm:hidden flex cursor-pointer "/>
                ):(
                    <FaBars onClick={handleHomeBar} size={24} className=' flex cursor-pointer sm:hidden' />
                )}
        </div>
    )
}
export default Bar;