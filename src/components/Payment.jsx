import {useContext, useState} from 'react'
import { PaystackButton } from 'react-paystack'
import { toast } from 'react-toastify'
import { AppContext } from '../Utilities/Context'
const Payment = () => {
    const {hidePayment} = useContext(AppContext)
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [amount,setAmount] = useState("")
    const [phone,setPhone] = useState("")

    const submit = ()=>{
        setName("")
        setEmail("")
        setAmount("")
        setPhone("")
        hidePayment()
    }
    const nu = undefined
    const success = ()=>{
        toast.success("Payment Paid")
        submit()
    }
    const cancel = ()=>{
        toast.error("Payment Cancelled")
        submit()
    }
    const error = ()=>{
        toast.error("Payment Failed")
        submit()
    }
    //TODO: hidden key
    const values = {
        // reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100,
        publicKey: import.meta.env.VITE_PAYSTACK,
        currency: "NGN",
        text: "Donate",
        onSuccess:()=> success(),
        onClose: ()=> cancel(),
        onError: ()=> error() 
    }
    return ( 
        <div className={`flex flex-col gap-3 items-center p-5 w-full justify-center`}>
            <div className="flex flex-col w-full ">
                <label htmlFor="name" className="">Full Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)}  id="name" placeholder="full Name" required type="text" className="w-full p-3 border rounded-md flex items-center justify-center " />
            </div>
            <div className="flex flex-col w-full ">
                <label htmlFor="email" className="">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="email" required type="email" className="w-full p-3 border rounded-md flex items-center justify-center" />
            </div>
            <div className="flex flex-col w-full ">
                <label htmlFor="amount" className="">Amount</label>
                <input value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount" pattern=' [0-9] ' inputMode='numeric' placeholder="amount" required type="number" className="w-full p-3 border rounded-md flex items-center justify-center" />
            </div>
            <div className="flex flex-col w-full ">
                <label htmlFor="" className="">Phone Number</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} id="amount" inputMode='numeric' pattern=' [0-9] ' placeholder="phone number" required type="tel" className="w-full p-3 border rounded-md flex items-center justify-center" />
            </div>
            {!email || !name || !amount || !phone || !nu && (
                <div className="flex w-full bg-green-500 rounded-md cursor-pointer  ">
                    <PaystackButton {...values} />
                </div>
            )}
        </div>
     );
}
 
export default Payment;