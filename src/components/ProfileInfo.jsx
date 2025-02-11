import {AppContext} from '../Utilities/Context'
import {useContext} from 'react'

const ProfileInfo = ()=>{
    const {profile} = useContext(AppContext)
 
    return (
        <div className="w-full ">
            {profile ? (
                <>
            <h1 className="text-2xl font-semibold text-center ">{`${profile.firstName} ${profile.lastName}`}</h1>
            <h2 className="text-center " >Joined {profile.lastSeen} </h2>
                </>
            ):(
                <div className="flex w-full items-center justify-center">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    )
}
export default ProfileInfo;