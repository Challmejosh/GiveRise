import {Link} from 'react-router-dom'
import {useState,useContext} from 'react'
import { AppContext } from '../Utilities/Context'
const SignUpPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [delay,setDelay] = useState(false)
    const {signup} = useContext(AppContext)
    const handleSignUp = (e,email,password,firstName,lastName)=>{
        e.preventDefault();
        setTimeout(
            setDelay(false)
        , 1000);
        setTimeout(() => {
            setDelay(true)
            signup(email,password,firstName,lastName)
        }, 5000);
    }

    return ( 
        <div className="flex items-center justify-center w-full bg-transparent h-[100dvh]">
            <div className="flex flex-col sm:shadow-md bg-transparent sm:rounded-2xl  items-center justify-center gap-5 w-full sm:w-[500px] p-5 ">
                <div className="w-full flex items-start justify-center flex-col">
                    <h1 className="text-lg font-semibold flex items-center justify-center  ">Get Started</h1>
                    <h2 className="flex items-center justify-center">Start your fundraising journey</h2>
                </div>
                <form className="flex flex-col items-center justify-center w-full gap-3" onSubmit={(e)=>handleSignUp(e,email,password,firstName,lastName)} action="">
                    <div className="flex items-center justify-between w-full gap-x-3 ">
                        <div className="w-full">
                            <label className="text-md" htmlFor="firstname">First Name</label>
                            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg" required type="text" id="firstname" name="firstname" placeholder="first name" />
                        </div>
                        <div className="w-full">
                            <label className="text-md" htmlFor="lastname">Last Name</label>
                            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg" required type="text" id="lastname" name="lastnaame" placeholder="last name" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-md" htmlFor="`email">Email Address</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg" required type="text" id="email" name="email" placeholder="email" />
                    </div>
                    <div className="w-full">
                        <label className="text-md" htmlFor="`email">Gender</label>
                        <select className='flex w-full items-center justify-center border p-3 rounded-lg' name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="text-md" htmlFor="password">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg" required type="password" id="password" name="password" placeholder="password" />
                    </div>
                    <button className="bg-green-400 hover:bg-green-600 flex items-center justify-center w-full p-3 rounded-lg cursor-pointer text-white" type="submit"> create account {delay&&<p className="loaders"></p> } </button>
                </form>
                <div className="flex gap-x-1 items-center justify-start w-full " >
                    <p> Have an account already </p><Link to="/login" className="underline text-blue-600 ">login here</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpPage;