import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center">
      {/* Left Side: Contact Info */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-green-500" />
          <span>contact@dayasafari.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-500" />
          <span>+94778130444</span>
        </div>
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex items-center gap-4 ml-auto">
        <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
