import { FaAddressBook } from "react-icons/fa";
import Skeleton from "../shared/Skeleton";
import { useState } from "react";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";


export const AddressInfo = () => {
    // User have a list of addresses that  user has against his account.
    // User can select any address from the list or can add a new address. 
    // If user select an address then that address will be used for the order delivery.
    //  If user add a new address then that address will be added to the list of addresses and will be used for the order delivery.

    const noAddressExist = true; // for now we are assuming that user has no address. In future we will get this data from backend.
    const isLoading = false; // for now we are assuming that user has no address. In future we will get this data from backend.


    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");


    const addNewAddressHandleer = () => {
        // This function will be called when user click on "Add Address" button.
        // In future we will show a modal to add new address.
        setSelectedAddress("");
        setOpenAddressModal(true);
        console.log("Add New Address Clicked");
    }
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

                    <button
                         onClick={addNewAddressHandleer}
                        className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        Add Address
                    </button>
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


        <AddressInfoModal
            open={openAddressModal}
            setOpen={setOpenAddressModal}>
                 <AddAddressForm /> 
        </AddressInfoModal>

         {/* children is a special prop in react that represent the content that pass between opening and closing tags of the component. In this case, the content between opening and closing tags of AddressInfoModal component is AddAddressForm component. So, AddAddressForm component will be rendered inside AddressInfoModal component. */}
    </div>
  );
}

export default AddressInfo;