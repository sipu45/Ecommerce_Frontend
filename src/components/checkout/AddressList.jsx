import { useDispatch } from "react-redux";

const AddressList = ({addresses , setSelectedAddress , setOpenAddressModal}) => {
    const dispatch = useDispatch();


  return (
    <div className="space-y-4">
        {addresses?.map((address) =>{
            <div
                key={address.id}
                onClick={() => handleAddressSelectio(address)}
                className={`p-4 border rounded-md cursor-pointer relative ${
                    
                }`}>

            </div>
            })}
    </div>
  )
}

export default AddressList
