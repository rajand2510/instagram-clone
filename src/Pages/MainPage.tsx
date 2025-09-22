import { Navigate, Routes } from "react-router";
import Sidebar from "../Components/Sidebar";
import HomePage from "./HomePage";
import { Route } from "react-router";
import Profile from "./Profile";
import NotFoundPage from "./NotFound";
import { ProfilePost } from "../Components/ProfilePost";
import { ProfileReel } from "../Components/ProfileReel";
import { ProfilePostTag } from "../Components/ProfilePostTag";
import SavedPost from "../Components/SavedPost";
import ExploreGrid from "./ExploreGrid";

const Main = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <div className="lg:ml-[245px] tablet:ml-[80px] md:ml-0 w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExploreGrid />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate to="post" replace />} />
            <Route path="post" element={<ProfilePost />} />
            <Route path="reels" element={<ProfileReel />} />
            <Route path="saved" element={<SavedPost />} />
            <Route path="tagged" element={<ProfilePostTag />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
