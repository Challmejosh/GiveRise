import { useNavigate, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DetailPage from './Pages/DetailPage'
import Dashboard from './Pages/Dashboard';
import CampaignPage from './Pages/CampaignPage'
import CreateCampaign from './Pages/CreateCampaign';
import {useEffect} from 'react';
import HomePage from './Pages/HomePage';
import { auth } from './Utilities/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import ProfilePage from './Pages/ProfilePage';
import Setting from './Pages/Setting';
import ForgetPassword from './Pages/ForgottenPassword';
import PaymentPage from './Pages/PaymentPage';
// import {setItems,getItems} from './Utilities/LocalStorage'


function App() {
  const navigate = useNavigate()
 
  useEffect(()=>{
    try{
     onAuthStateChanged(auth, async (user)=>{
        if(user){
          // setItems("user",user)
          navigate('/dashboard')
          // getItems(user)
        }else{
        navigate("/")
      }
    })
    
  }catch(error){
    toast.error(error.message)
  }
},[])
  return (
    <div className=''>
      <ToastContainer />
      <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/create_campaign" element={<CreateCampaign />} />
          <Route path="/detail/:detailId"  element={<DetailPage />} />
          <Route path="/profile"  element={<ProfilePage />} />
          <Route path="/setting" element={<Setting />}/>
          <Route path="password-reset" element={<ForgetPassword />} />
          <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  )
}

export default App;
