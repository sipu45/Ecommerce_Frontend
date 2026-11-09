import { useForm } from "react-hook-form";
import InputField from "../shared/inputField";
import { FaAddressCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Spinners from "../shared/Spinners";
import { addUpdateUserAddress } from "../../store/actions";
import toast from "react-hot-toast";

// form related information will be added here in the future
const AddAddressForm = ({ address , setOpenAddressModal}) => {
    
    const dispatch = useDispatch();
    const {btnLoader} = useSelector((state) => state.errors);
     const {
            register,
            handleSubmit,
            formState :{errors},
        } = useForm({
            mode : "onTouched",
        });


        const onSaveAddressHandler = async(data) => {
            if(address?.address.id)
             console.log("Save Address Click");
             dispatch(addUpdateUserAddress(
                        data,
                        toast,
                        address?.addressId,
                        setOpenAddressModal,
                ));
                
        }

  return (
     <div className="">
                <form
                    onSubmit={handleSubmit(onSaveAddressHandler)}
                    className="">
                        <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                            <FaAddressCard className="mr-2 text-2xl" />
                            <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                                Add Address
                            </h1>
                        </div>
                 <hr className="flex flex-col gap-4 "/>
                    <div className="flex flex-col gap-3 mt-2">
                        <InputField
                            label="Building Name"
                            required
                            id="buildingName"
                            type="text"
                            message="Building Name is required"
                            placeholder="Enter your Building name"
                            register={register}
                            errors={errors}
                            />

                            <InputField
                            label="City"
                            required
                            id="city"
                            type="text"
                            message="City is required"
                            placeholder="Enter your City"
                            register={register}
                            errors={errors}
                            />

                            <InputField
                            label="State"
                            required
                            id="state"
                            type="text"
                            message="State is required"
                            placeholder="Enter your State"
                            register={register}
                            errors={errors}
                            />

                            <InputField
                            label="Pincode"
                            required
                            id="pincode"
                            type="text"
                            message="Pincode is required"
                            placeholder="Enter your Pincode"
                            register={register}
                            errors={errors}
                            />

                            <InputField
                            label="Street"
                            required
                            id="street"
                            type="text"
                            message="Street is required"
                            placeholder="Enter your Street"
                            register={register}
                            errors={errors}
                            />

                            <InputField
                            label="Country"
                            required
                            id="country"
                            type="text"
                            message="Country is required"
                            placeholder="Enter your Country"
                            register={register}
                            errors={errors}
                            />
                    </div>

                    <button
                        disabled={btnLoader}
                        className="text-white bg-custom-blue px-4 py-2 rounded-md mt-4 disabled:cursor-not-allowed cursor-pointer"
                        type="submit">
                            {btnLoader ?(
                                <>
                                   <Spinners />  Loading...
                                </>
                            ) : (
                                <>Save</>
                            )}   
                    </button>

                </form>
        </div>
  )
}

export default AddAddressForm
