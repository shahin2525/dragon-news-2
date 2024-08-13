import moment from "moment";

const Header = () => {
  return (
    <div>
      <h1>{moment().format("dddd MMMM DD YYYY")}</h1>
    </div>
  );
};

export default Header;
