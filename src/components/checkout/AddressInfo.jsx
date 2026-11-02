import { FaAddressBook } from "react-icons/fa";
import Skeleton from "../shared/Skeleton";


export const AddressInfo = () => {
    // User have a list of addresses that  user has against his account.
    // User can select any address from the list or can add a new address. 
    // If user select an address then that address will be used for the order delivery.
    //  If user add a new address then that address will be added to the list of addresses and will be used for the order delivery.

    const noAddressExist = true; // for now we are assuming that user has no address. In future we will get this data from backend.
    const isLoading = false; // for now we are assuming that user has no address. In future we will get this data from backend.
  return (
    <div className="pt-4">
        {noAddressExist  ? (
            <div>
               <div className="p-6 rounded-lg ma-w-md mx-auto flex flex-col items-center justify-center">
                    <FaAddressBook size={50} className="text-gray-500 mb-4" />
                    <h1 className="mb-2 text-slate-900 text-center font-semibold text-2xl">
                       No Address Yet
                    </h1>
                    <p className="mb-6 text-slate-800 text-center ">
                       Please add your address to complete purchase.
                    </p>
               </div>
            </div>
        ) : (
            <div className="relative p-6 rounded-lg max-w-md mx-auto">
                <h1 className="text-slate-800 text-center font-bold text-2xl">
                    Select Address
                </h1>

           { isLoading ? (
                <div className="py-4 px-8 ">
                     <Skeleton />
                </div> 
            ) : (
                <div className="space-y-4 pt-6">
                    <p>Address List here...</p>
                </div>
            )}     
            </div>
        )}
    </div>
  );
}

export default AddressInfo;