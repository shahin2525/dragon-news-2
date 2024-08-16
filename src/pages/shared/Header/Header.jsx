import moment from "moment";
import logo from "../../../assets/assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <h2 className="text-[18px] font-normal">
        Journalism Without Fear or Favour
      </h2>
      <h3>{moment().format("dddd MMMM DD YYYY")}</h3>
    </div>
  );
};

export default Header;
