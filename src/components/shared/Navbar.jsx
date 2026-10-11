import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className ="h-[70]px bg-custom-gradient text-white z-50 flexx items-center sticky top-0">
           <div className="lg:px-14 sm:px-8 px-4 w-full flex judtify-between">
                <Link to="/" className="flex items-center tet-2xl font-bold">
                    <FaStore className="mr-2 text-3xl"/>
                    <span className="font-[Poppins]">E-Shop</span>
                </Link>
           </div> 
        </div>
    );
}

export default Navbar;