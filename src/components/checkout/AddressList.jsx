import { FaBuilding } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AddressList = ({addresses , setSelectedAddress , setOpenAddressModal}) => {
    const dispatch = useDispatch();
    const selectedUserAddress = addresses[2]; // for now we are assuming that user has selected first address. In future we will get this data from backend.


    const handleAddressSelectio = (address) => {

    }

  return (
    <div className="space-y-4">
        {addresses?.map((address) => (
            <div
                key={address.id}
                onClick={() => handleAddressSelectio(address)}
                className={`p-4 border rounded-md cursor-pointer relative ${
                    selectedUserAddress?.addressId === address.addressId
                     ? "bg-green-100" 
                     : "bg-white"
                }`}>


                    <div className="flex items-start">
                        <div className="space-y-1">
                            <div className="flex items-center`">
                                <FaBuilding size={14} className="mr-2 text-gray-600 "/>
                                <p className="font-semibold">{address.buildingName}</p>
                            </div>
                        </div>
                    </div>

            </div>
           ))}
    </div>
  )
}

export default AddressList;
