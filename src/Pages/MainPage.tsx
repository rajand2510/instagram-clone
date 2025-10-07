import { Navigate, Routes, Route, useLocation } from "react-router";
import Sidebar from "../Components/Sidebar";
import HomePage from "./HomePage";
import Profile from "./Profile";
import NotFoundPage from "./NotFound";
import { ProfilePost } from "../Components/ProfilePost";
import { ProfileReel } from "../Components/ProfileReel";
import { ProfilePostTag } from "../Components/ProfilePostTag";
import SavedPost from "../Components/SavedPost";
import ExploreGrid from "./ExploreGrid";
import Message from "./Message";
import InboxSidebar from "../Components/MessagePage/InboxSidebar";
import RequestSidebar from "../Components/MessagePage/RequestSidebar";
import Text from "../Components/MessagePage/Text";
import HiddenRequest from "../Components/MessagePage/HiddenRequest";
import InstagramStories from "./Story";

import ReelsWrapper  from "./ReelsWrapper";


const Main = () => {
  const location = useLocation();
  const isMessages = location.pathname.startsWith("/messages");
  const isStories = location.pathname.startsWith("/stories");

  return (
    <div className="w-full h-full flex flex-row">
      {/* Hide sidebar for stories */}
      {!isStories && <Sidebar />}
      
      <div
        className={`w-full min-h-screen ${
          isStories 
            ? "" 
            : isMessages 
            ? " md:ml-[73px]" 
            : "lg:ml-[245px] tablet:ml-[80px] md:ml-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExploreGrid />} />
           <Route path="/reels" element={<ReelsWrapper />} />
          {/* Stories Route */}
          <Route path="/stories/:username/:storyId" element={<InstagramStories />} />
          
          <Route path="/messages" element={<Message />}>
            <Route index element={<Navigate to="inbox" replace />} />
            <Route path="inbox" element={<InboxSidebar />}>
              <Route path="t/:id" element={<Text />} />
            </Route>
            <Route path="requests" element={<RequestSidebar />} />
            <Route path="requests/hidden" element={<HiddenRequest />} />
          </Route>
          
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