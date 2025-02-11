import DetailInfo from '../components/DetailInfo'
import Navbar from '../components/NavBar';
import {useParams} from 'react-router-dom'
import {AppContext} from '../Utilities/Context'
import {useContext,useEffect} from 'react'

const DetailPage = () => {
    const {detailId} = useParams()
    const {fetchDetail} = useContext(AppContext)
    
    useEffect(()=>{
        fetchDetail(detailId)
    },[detailId])
    return(
        <div className="grid grid-cols-1 relative lg:grid-cols-8 items-start justify-start w-full gap-5 ">
            <div className="lg:col-span-2 ">
                <Navbar />
            </div>
            <div className="lg:col-span-6 [&::-webkit-scrollbar]:hidden scrollbar w-full h-[100dvh] overflow-y-scroll grid grid-cols-1">
                <DetailInfo />
            </div>
        </div>
    )
}
export default DetailPage;