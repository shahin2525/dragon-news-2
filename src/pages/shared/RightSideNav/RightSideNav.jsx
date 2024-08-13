import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/assets/qZone1.png";
import qZone2 from "../../../assets/assets/qZone2.png";
import qZone3 from "../../../assets/assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h1>Login with</h1>

        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4">
        <h1>Find us on</h1>

        <a className="flex rounded-t-lg border p-4 items-center ">
          <FaFacebook className="mr-4" />
          <span> Facebook</span>
        </a>
        <a className="flex rounded-x-lg border p-4 items-center ">
          <FaTwitter className="mr-4" />
          <span>Twitter</span>
        </a>
        <a className="flex rounded-b-lg border p-4 items-center ">
          <FaInstagram className="mr-4" />
          <span> Instagram</span>
        </a>
      </div>
      <div>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
