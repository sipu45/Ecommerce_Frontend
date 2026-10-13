import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import conatactImage from "../assets/sliders/contactus.png";


const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gray-50 bg-cover bg-center"
       style={{ backgroundImage: `url(${conatactImage})` }}>          
         <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
                Contact Us
                </h1>
                <p className="text-center text-gray-600 mb-6">
                We would love to hear from you! Please fill out the form below or contact us directly.
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Name
                        </label>
                        <input
                        type="text"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Message
                        </label>
                        <textarea
                        rows={4}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-150"
                    >
                        Send Message
                    </button>
                </form>

                    <div className="mt-8 text-center border-t pt-6">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Contact Information
                        </h2>
                        <div className="flex items-center justify-center mt-3 text-gray-600">
                            <FaPhone className="text-blue-500 mr-2" />
                            <span className="hover:underline hover:text-blue-600" >
                            +91 6371353644
                            </span>
                        </div>

                         <div className="flex items-center justify-center mt-3 text-gray-600">
                            <FaEnvelope className="text-blue-500 mr-2" />
                            <span className="hover:underline hover:text-blue-600" >
                            info@ecomsarvam.com
                            </span>
                        </div>

                        <div className="flex items-center justify-center mt-3 text-gray-600">
                            <FaMapMarkedAlt className="text-blue-500 mr-2" />
                            <span className="hover:underline hover:text-blue-600" >
                            761032 Mangalapur , Ganjam , Odisha
                            </span>
                        </div>
                    </div>
            </div>
    </div>
  );
};

export default Contact;