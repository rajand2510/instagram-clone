import { Routes } from "react-router";
import Sidebar from "../Components/Sidebar";
import HomePage from "./HomePage";
import { Route } from "react-router";
import Profile from "./Profile";
import NotFoundPage from "./NotFound";

const Main = () => {

  return (
    <div className="w-full h-full flex flex-row ">
      <Sidebar />
      <div className="lg:ml-[245px] w-full min-h-screen ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
   
      </div>
    </div>
  );
};

export default Main;
