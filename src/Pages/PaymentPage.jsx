import Navbar from "../components/NavBar";
import Payment from "../components/Payment";

const PaymentPage = () => {
    return ( 
        <div className="lg:grid relative lg:grid-cols-8 items-start justify-start w-full gap-5 ">
            <Navbar />
            <div className="lg:col-span-6 [&::-webkit-scrollbar]:hidden scrollbar gap-y-5 grid grid-cols-1 w-full p-3 h-[100dvh] overflow-y-scroll ">
                <Payment />
            </div>
        </div>
     );
}
 
export default PaymentPage;