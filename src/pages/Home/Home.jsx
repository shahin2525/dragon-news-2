import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Breaking from "./Breaking";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Breaking></Breaking>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 border">
          <h1>news coming soon</h1>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default Home;
