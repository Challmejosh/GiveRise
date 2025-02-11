import emailjs from '@emailjs/browser'
import {useState} from 'react';
import { toast } from 'react-toastify'; 
const Contact = () => {
    const [name,setName] = useState("")
    const [subject,setSubject] = useState("")
    const [feed,setFeed] = useState("")
    const [load,setLoad] = useState(false)
    let keyTemplate = {
        subject: subject,
        name: name,
        message: feed
    }

    const serviceId="service_p9xvhab"
    const templateId="template_z8vym07"
    const publicKey="WpVKGvWo3oQE711ha"
    const sendFeed = (e)=>{
        e.preventDefault();
        setTimeout(setLoad(true),1000);
        setTimeout(() => {
            setLoad(false)
            emailjs
        .send(serviceId, templateId, keyTemplate,publicKey)
        .then(
          (success) => {
            toast.success('SUCCESS!',success);
            setSubject("")
            setName("")
            setFeed("")
          },
          (error) => {
            toast.error('FAILED...', error.text);
          },
        );
        }, 5000);
        
    }
    return ( 
        <div className="flex items-center justify-center w-full ">
            <form onSubmit={(e)=>sendFeed(e)} action="" className="flex flex-col items-start justify-between sm:shadow-md w-full mx-3 rounded-md sm:max-w-[400px] gap-5 p-3 h-[60%] " >
                        <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="enter full name" value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                        <input className="w-full p-3 rounded-md flex items-center justify-start border " placeholder="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" />
                        <textarea className="w-full p-5 rounded-md [&::-webkit-scrollbar]:hidden scrollbar flex items-start h-[200px] overflow-y-scroll justify-start border " placeholder="enter your message" value={feed} onChange={(e)=>setFeed(e.target.value)} type="text" />
                        <button className="bg-green-500 p-2 w-full rounded-md text-white flex items-center hover:bg-transition-all justify-center cursor-pointer uppercase " type="submit">contact us {load&&<div className="" >loading...</div>} </button>
                    </form>
        </div>
     );
}
 
export default Contact;