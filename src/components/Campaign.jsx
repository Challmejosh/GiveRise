import 'swiper/css'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import {AppContext} from '../Utilities/Context'
import {useContext} from 'react'
const Campaign = ()=>{
    const {mine,mineLoad} = useContext(AppContext)
    return(
        <div className="flex flex-col w-full items-start justify-center gap-3 ">
            <div className="flex items-center w-full justify-between ">
                <h1 className="font-semibold text-lg flex items-center justify-start ">My Campaign</h1>
                <Link to="/create_campaign" className="text-white bg-green-400 cursor-pointer p-3 rounded-md ">create campaign</Link>
            </div>
            {!mine || mine.length === undefined ? (
                <div className=" w-full p-3 flex items-center justify-center  ">
                    <div className="">You Haven't created an campaign</div>
                </div>
            ) :(
                <>
            {mineLoad ? (
            <Swiper loop={false} modules={[Navigation,Pagination]} spaceBetween={0} slidesPerView={2} pagination={{clickable:true}} autoplay={{delay: 1000 }} className="w-full " >
                    {mine.map((item,index) => (
                    <SwiperSlide key={index}  >
                       <Link to={`/detail/${item.id}`} className="flex items-center justify-center gap-3 ">
                           <div className="flex rounded-lg overflow-hidden relative flex-col items-center  justify-center w-[250px] h-[200px] col-span-2 p-4  ">
                               <img className="flex w-full rounded-md h-full object-cover  " src={item.image} alt="" />
                               <p className="absolute top-5 left-5 text-lg text-white "> Active </p>
                               <div className="flex items-center justify-between absolute bottom-2  ">
                                   <div className="flex items-center justify-start p-2 font-semibold text-xs text-white ">
                                       Target:{"\u20A6"}{item.amount}
                                   </div>
                                   <div className="flex text-white items-center justify-start p-2 font-semibold text-xs ">
                                       Raised : {"\u20A6"} 150.00
                                   </div>
                               </div>
                           </div>
                       </Link>
                    </SwiperSlide>
       
                    ))}
            </Swiper>
            ):(
                <div className="w-full flex items-center justify-center">
                    <div className="loader"></div>
                </div>
            )}
                    </>
                )}
        </div>
    )
}
export default Campaign;