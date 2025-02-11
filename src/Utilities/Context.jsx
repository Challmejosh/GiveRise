import {createContext, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, reauthenticateWithCredential, updateEmail,updatePassword, signInWithEmailAndPassword,signOut, EmailAuthProvider } from "firebase/auth";
import { auth, db } from "./Firebase";
import { doc, setDoc, collection, updateDoc, arrayUnion, getDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import {v4 as uuidv4} from 'uuid'

const AppContext = createContext();

const Context = ({children}) => {
    const [mine,setMine] = useState([])
    const [step,setStep] = useState('Basic Information')
    const [all,setAll] = useState([])
    const [file,setFile] = useState("")
    const [detail,setDetail] = useState([])
    const [profile,setProfile] = useState([])
    const [bar,setBar] = useState(false)
    const [mineLoad,setMineLoad] = useState(false)
    const [allLoad,setAllLoad] = useState(false)
    const [detailLoad,setDetailLoad] = useState(false)
    const [homeBar,setHomeBar] = useState(false)
    const [load,setLoad] = useState(5)
    const [loading,setLoading] = useState(false)

// Get campaign for each user that is log in and their details
const myCamp = async ()=>{
    try {
        const docRef = doc(db,"myCampaign",auth.currentUser.uid)
        const docProfRef = doc(db,"users",auth.currentUser.uid)
        const snapShot = await getDoc(docRef);
        const prof = await getDoc(docProfRef);
        const profData = prof.data()
        const data = snapShot.data().campaign
        setProfile(profData)
        if (!data){return}
        setTimeout(() => {
            setMine(data)
            setMineLoad(true)
        }, 5000);
    } catch (error) {
        toast.error(`connection failed ${error.message} `)
    }
}
 
// Get all campaign of all users 

const allCamp = async ()=>{
    try {
    const docRef = collection(db,"myCampaign")
    const snapShot = await getDocs(docRef)
    const data = snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))
    if(!data){return}
    setAll(data.map(item => item.campaign).flat())
    setAllLoad(true)
        
    } catch (error) {
        toast.error(`connection failed ${error.message}`)
    }
}
//sign up function
    const signup = async (email,password,firstName,lastName)=>{
        try {
            const res = await createUserWithEmailAndPassword(auth,email,password)
            const user = res.user;
            if(!user || !user.uid){
                toast.error("User is not available")
            }
            await setDoc(doc(db,"users",user.uid),{
                firstName:firstName.toLowerCase(),
                lastName:lastName.toLowerCase(),
                email,
                id: user.uid,
                lastSeen: new Date().toLocaleString()
            })
            await setDoc(doc(db,"myCampaign", user.uid),{
                campaign: {}
            })
            await setDoc(doc(db,"allCampaign"),{
                campaigns: {}  
            })
            myCamp()
        } catch (error) {
            toast.error(error.message)       
         }
    }  
    // login function
    const login = async (email,password)=>{
        try{
            await signInWithEmailAndPassword(auth,email,password)
            toast.success("logged in")
            
        }catch(error){
            toast.error(error.message)
        }
    }
    // log out function
    const logout = async ()=>{
        try {
            await signOut(auth)
            toast.success("signed out")
        } catch (error) {
            toast.error(error.message)        
        }
    }
    // function for creating campaign
    const createCamp = async (title,description,fullName,amount,email,phone,country,impact,city,img)=>{
        try {
            const uid = uuidv4()
            let info = {
                title: title,
                description: description,
                fullname: fullName,
                category: "",
                amount: amount,
                email,
                phone,
                country,
                impact,
                city,
                image: img,
                id: uid,
                date: new Date().toLocaleString()
            }
            const docRef = doc(db,"myCampaign",auth.currentUser.uid);
            await updateDoc(docRef, {
                campaign: arrayUnion(info)
            })
            toast.success("campaign created")
        } catch (error) {
            toast.error(error.message)
        }
    }
    // for get image file and sending it cloudinary
    const handleFile = async (e)=>{
        try {
         const img = e.target.files[0]
         if(!img){ return toast.error("File not selected") }
         if(img){
            const formData = new FormData()
            formData.append("file",img)
            formData.append("upload_preset","Crowdfunding")
            formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY )
            const getImage = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY}/image/upload`,{
            method: "POST",
            body: formData,
            })

            const data = await getImage.json()
            setFile(data.url)
         }
        }catch (error){
            toast.error(error.message)
        }
    }
    // for handling the general navigation bar
    const handleBar =()=>{
        try {
            setBar(prev => !prev)
        } catch (error) {
            toast.error("try reloading error occurred ")
            console.error(error.message)
        }
    }
    // for handling the homepage / landing page navigation bar
    const handleHomeBar = ()=>{
        setHomeBar(prev =>!prev)
    }
    // for handling all campaign pagination in the homepage and dashboard  
    const handleLoad = ()=>{
        setLoad(prev=> prev + 5)
    }

   
    const emailUpdate = async(email,password) => {
        try{
            const credential = EmailAuthProvider.credential(auth.currentUser.email,password);
            await reauthenticateWithCredential(auth.currentUser,credential).then(()=>toast("good"))
            updateEmail(auth.currentUser, email)
            .then(()=>{
                toast.success("email changed")
            }).catch(error =>
                console.error(error.message)
            )
            
        }catch(error){
            console.error(error.message)
        }
    }
    const passwordUpdate = async(password) => {
        try{
            updatePassword(auth.currentUser,password)
            .then(()=>{
                toast.success("password changed")
            }).catch(error =>
                toast.error(error.message)
            )
        }catch(error){
        console.log(error.message)
        }
    }
    const handleUpdate = async (email,password)=> {
        try{
            if(auth.currentUser){
                // await emailUpdate(email,currentPassword);
                await passwordUpdate(password);
                toast.success("profile updated")
            }
        }catch(error){
            toast.error(error.message)
        }
    }
    
   // function that takes the params parameter and fetch data from database then find the particular items id that matches the params and assign it to a use state
    const fetchDetail = async (detailId) => {
        try {
            const docRef = collection(db,"myCampaign")
            const snapShot = await getDocs(docRef)
            const data = snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))
            const filter = data.map(item=> item.campaign)
            const main = filter.flat().find(item=>item.id === detailId)
            setTimeout(() => {
                setDetailLoad(false)
            }, 1000);
            setTimeout(() => {
                setDetailLoad(true)
                setDetail(main)
            }, 5000);
        } catch (error) {
            toast.error(`reload can not connect `)
            console.error(error.message)
        }
    }

    return ( 
        <AppContext.Provider value={{signup,login,logout,createCamp,myCamp,allCamp,mine,all,detail,handleFile,setDetail,step,setStep,file,setFile,bar,setBar,handleBar,profile,homeBar,setHomeBar,handleHomeBar,load,setLoad,handleLoad,handleUpdate,passwordUpdate,emailUpdate,mineLoad,setMineLoad,setAllLoad,allLoad,detailLoad,setDetailLoad,fetchDetail,loading,setLoading}}>
            {children}
        </AppContext.Provider>
     );
}
Context.propTypes = {
    children: PropTypes.node.isRequired,
}
export {Context,AppContext};
