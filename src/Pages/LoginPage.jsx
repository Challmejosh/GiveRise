import {AppContext} from '../Utilities/Context'
import { Link } from "react-router-dom";
import {useContext,useState} from "react"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [delay, setDelay] = useState(false)
    const {login} = useContext(AppContext)
    const handleLogin = (e,email,password) => {
        e.preventDefault();
        setTimeout(() => {
            setDelay(true)
            login(email,password)
        }, 5000);
        setTimeout(() => {
            setDelay(false)
            login(email,password)
        }, 1000);
    }
    return ( 
        <div className="flex items-center justify-center w-full bg-transparent h-[100dvh] ">
            <div className="flex flex-col sm:shadow-md bg-transparent sm:rounded-2xl  items-center justify-center gap-5 w-full sm:w-[500px] p-5 ">
                <div className="w-full flex items-start justify-center flex-col">
                    <h1 className="text-lg font-semibold w-full flex items-center justify-start ">Welcome back!</h1>
                    <p className="w-full flex items-center justify-start ">Login to begin your campaign and donation </p>
                </div>
                <form onSubmit={(e)=>handleLogin(e,email,password)} action="" className=" flex flex-col items-center justify-center w-full gap-3 " >
                    <div className="w-full  ">
                        <label className="text-md " htmlFor="email">Email Address</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg  " required type="text" id="email" name="email" placeholder="email address" />
                    </div>
                    <div className="w-full">
                        <label className="text-md " htmlFor="password">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="flex w-full items-center justify-center border p-3 rounded-lg " required type="password" id="password" name="password" placeholder="password" />
                    </div>
                    <button className="bg-green-400 hover:bg-green-600 flex items-center justify-center w-full p-3 rounded-lg cursor-pointer text-white " type="submit"> Login {delay&&<div className='loaders'></div>} </button>
                </form>
                <div className="">Don't have an account? <Link className="underline text-blue-600 " to="/signup"> create account </Link> </div>
                <div className="">
                    Don't remember your password <Link className="underline text-blue-600  " to="/password-reset">reset password</Link>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;