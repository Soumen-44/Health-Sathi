import { FaUserDoctor } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
const Features = () => {
  return (
  <div className="row justify-content-evenly item-color ">
    <div className="col-2 item-box">
       <FaUserDoctor /> Dr Consultation
    </div>

    <div className="col-2 item-box">
      <FaCommentDots /> Chat With Doctor
    </div>

    <div className="col-2 item-box">
       <FaVideo /> Video Call
    </div>

    <div className="col-2 item-box">
       <FaAmbulance /> Emergency Support
    </div>

    
  </div>
)
};
export default Features;
