import { FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash } from "react-icons/fa";
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectUserChecOutAddress } from "../../store/actions";

const AddressList = ({ addresses, setSelectedAddress, setOpenAddressModal , setOpenDeleteModal}) => {
    const dispatch = useDispatch();
    const { selectedUserCheckOutAddres } = useSelector((state) => state.auth); // get selected user address from redux

    const handleAddressSelection = (addresses) => {
        dispatch(selectUserChecOutAddress(addresses));
    };

    const onEditButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenAddressModal(true);
    };

    const onDeleteButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenDeleteModal(true);
    };

    return (
        <div className="space-y-3.5">
            {addresses?.map((address) => {
                const isSelected = selectedUserCheckOutAddres?.addressId === address.addressId;

                return (
                    <div
                        key={address.id}
                        onClick={() => handleAddressSelection(address)}
                        className={`p-4 rounded-xl border cursor-pointer relative transition-all duration-200 select-none shadow-sm ${
                            isSelected
                                ? "bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20"
                                : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                        }`}
                    >
                        <div className="flex items-start">
                            <div className="space-y-1.5 text-sm text-slate-600 pr-16">
                                <div className="flex items-center gap-2">
                                    <FaBuilding size={14} className="text-slate-500 shrink-0" />
                                    <p className="font-semibold text-slate-800 text-base">{address.buildingName}</p>
                                    {isSelected && (
                                        <FaCheckCircle className="text-emerald-500 shrink-0" size={16} />
                                    )}
                                </div>

                                <div className="flex items-center gap-2">
                                    <FaStreetView size={15} className="text-slate-400 shrink-0" />
                                    <p className="text-slate-600">{address.street}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MdLocationCity size={16} className="text-slate-400 shrink-0" />
                                    <p className="text-slate-600">{address.city}, {address.state}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MdPinDrop size={16} className="text-slate-400 shrink-0" />
                                    <p className="font-medium text-slate-700">{address.pincode}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MdPublic size={16} className="text-slate-400 shrink-0" />
                                    <p className="text-slate-600">{address.country}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1.5 absolute top-3.5 right-3.5 z-10">
                            <button
                                type="button"
                                onClick={() => onEditButtonHandler(address)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                                title="Edit Address"
                            >
                                <FaEdit size={16} />
                            </button>

                            <button
                                type="button"
                                onClick={() => onDeleteButtonHandler(address)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                title="Delete Address"
                            >
                                <FaTrash size={15} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AddressList;