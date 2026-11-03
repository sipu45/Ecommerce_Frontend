import { useForm } from "react-hook-form";
import InputField from "../shared/inputField";
import { FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import Spinners from "../shared/Spinners";

// form related information will be added here in the future
const AddAddressForm = () => {
    

    const {btnLoader} = useSelector((state) => state.errors);
     const {
            register,
            handleSubmit,
            reset,
            formState :{errors},
        } = useForm({
            mode : "onTouched",
        });


        const onSaveAddressHandler = async(data) => {
        console.log("Login Click");
    }

  return (
     <div className="">
                <form
                    onSubmit={handleSubmit(onSaveAddressHandler)}
                    className="">
                        <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                            <FaAddressCard className="mr-2 text-2xl" />
                            <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl tet-2xl font-bold">
                                Add Address
                            </h1>
                        </div>
                <hr className="mt-2 mb-5 text-black "/>
                    <div className="flex flex-col gap-3">
                        <InputField
                            label="UserName"
                            required
                            id="username"
                            type="text"
                            message="UserName is reuired"
                            placeholder="Enter your name"
                            register={register}
                            errors={errors}
                            />

                            <InputField
                            label="Password"
                            required
                            id="password"
                            type="password"
                            message="Password is reuired"
                            placeholder="Enter your password"
                            register={register}
                            errors={errors}
                            />
                    </div>

                    <button
                        disabled={btnLoader}
                        className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
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
