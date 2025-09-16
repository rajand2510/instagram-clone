import { useEffect, useState } from "react";
import {
  AddIcon,
  ExploreIcon,
  HomeFillIcon,
  Instagram,
  MessageIcon,
  MetaAi,
  MoreIcon,
  NotificationsIcon,
  ReelIcon,
  SearchIcon,
  NotificationsIconFill,
  MessageIconFill,
  ReelIconFill,
  ExploreIconFill,
  SearchIconFill,
  Home,
  InstagramIcon,
  AddPostIcon,
  AiIcon,
  MoreIconFill,
} from "../assets/icon";
import Profile from "../assets/images/profile.png";
import { useOutsideClick } from "../Hooks/useOutsideClick";
import Notification from "./Notification";
import Portal from "../Hooks/Portal";
import { useLocation, useNavigate } from "react-router";

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showMorePopup, setShowMorePopup] = useState(false);
  const [showMobileNotifications, setShowMobileNotifications] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;

    if (path === "/") setActive("Home");
    else if (path.startsWith("/search")) setActive("Search");
    else if (path.startsWith("/explore")) setActive("Explore");
    else if (path.startsWith("/reels")) setActive("Reels");
    else if (path.startsWith("/messages")) setActive("Messages");
    else if (path.startsWith("/profile")) setActive("Profile");
    else setActive(""); // default
  }, [location.pathname]);


const navigate = useNavigate();
  const handleClick = (name: string) => {
    if (name === "Create") {
      setShowCreatePopup(!showCreatePopup);
      return;
    }

    // Toggle More popup
    if (name === "More") {
      setShowMorePopup(!showMorePopup);
      return;
    }

    if (name === "Notifications") {
      setShowNotifications(true);
      setShowMobileNotifications(true);

      return;
    } else {
      setShowNotifications(false);
      setShowMobileNotifications(false);
    }

    if (name === "Home") navigate("/");
    if (name === "Search") navigate("/search");
    if (name === "Explore") navigate("/explore");
    if (name === "Reels") navigate("/reels");
    if (name === "Messages") navigate("/messages");
    if (name === "Profile") navigate("/profile");

    setShowCreatePopup(false);
    setShowMorePopup(false);
  };

  const handleMoreClick = () => {
    setShowMorePopup(!showMorePopup);
  };

  const closeMobileNotifications = () => {
    setShowMobileNotifications(false);
    setActive("Home");
  };
  const createPopupRef = useOutsideClick<HTMLDivElement>(() => {
    if (showCreatePopup) setShowCreatePopup(false);
  });

  const showNotificationRef = useOutsideClick<HTMLDivElement>(() => {
    if (showNotifications) setShowNotifications(false);
  });
  const morePopupRef = useOutsideClick<HTMLDivElement>(() => {
    if (showMorePopup) setShowMorePopup(false);
  });
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed bg-white w-[245px] min-w-[245px] max-w-[245px]">
        <div
          className={`h-screen overflow-y-auto sticky top-0 border-r border-gray-200 transition-all duration-300 
        ${
          showNotifications ? "w-[73px] min-w-[73px] max-w-[73px]" : "w-full "
        }`}
        >
          {/* Logo */}
          {showNotifications ? (
            <div className="pt-[36px] pb-[7px] pl-6">
              <InstagramIcon />
            </div>
          ) : (
            <div className="pt-[41px] pl-6">
              <Instagram />
            </div>
          )}

          {/* Menu */}
          <div className="w-full mt-[35px] flex flex-col px-3 gap-[8px]">
            <div
              onClick={() => handleClick("Home")}
              className={`flex flex-row gap-4 py-3  ${
                active === "Home" ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {active === "Home" ? <HomeFillIcon /> : <Home />}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Home
              </span>
            </div>

            <div
              onClick={() => handleClick("Search")}
              className="flex flex-row gap-4 py-3 rounded-lg px-3 hover:bg-gray-100 cursor-pointer"
            >
              {active === "Search" ? <SearchIconFill /> : <SearchIcon />}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Search
              </span>
            </div>

            <div
              onClick={() => handleClick("Explore")}
              className={`flex flex-row gap-4 py-3  ${
                active === "Explore" ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {active === "Explore" ? <ExploreIconFill /> : <ExploreIcon />}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Explore
              </span>
            </div>

            <div
              onClick={() => handleClick("Reels")}
              className={`flex flex-row gap-4 py-3  ${
                active === "Reels" ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {active === "Reels" ? <ReelIconFill /> : <ReelIcon />}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Reels
              </span>
            </div>

            <div
              onClick={() => handleClick("Messages")}
              className={`flex flex-row gap-4 py-3  ${
                active === "Messages" ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {active === "Messages" ? <MessageIconFill /> : <MessageIcon />}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Messages
              </span>
            </div>

            <div
              onClick={() => handleClick("Notifications")}
              className={`flex flex-row gap-4 py-3  ${
                active === "Notifications" ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {active === "Notifications" ? (
                <NotificationsIconFill />
              ) : (
                <NotificationsIcon />
              )}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Notifications
              </span>
            </div>

            {/* Create */}
            <div
              onClick={() => handleClick("Create")}
              className="relative flex flex-row gap-4 py-3 rounded-lg px-3 hover:bg-gray-100 cursor-pointer"
            >
              <AddIcon />
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Create
              </span>
            </div>

            <div
              onClick={() => handleClick("Profile")}
              className={`flex flex-row gap-4 py-3  ${
                active === "Profile" ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              <span>
                <img
                  className={`w-[27px] border-2 rounded-full ${
                    active === "Profile" ? "border-black" : "border-gray-300"
                  }`}
                  src={Profile}
                  alt="profile"
                />
              </span>
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Profile
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full relative mt-[66px] flex flex-col px-3 gap-[8px]">
            <div
              onClick={() => handleMoreClick()}
              className={`flex flex-row gap-4 py-3  ${
                showMorePopup ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {showMorePopup ? <MoreIconFill /> : <MoreIcon />}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                More
              </span>
            </div>
            <div className="flex flex-row gap-4 py-3 rounded-lg px-3 hover:bg-gray-100 cursor-pointer">
              <MetaAi />{" "}
              <span className={`${showNotifications ? "hidden" : "block"}`}>
                Also from Meta
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Popups */}
        {showCreatePopup && (
          <div
            ref={createPopupRef}
            className="fixed left-20 bottom-60 z-50 w-48 bg-white  rounded-lg drop-shadow-lg flex flex-col "
          >
            <div className="flex items-center justify-between gap-2 py-3 px-3 rounded cursor-pointer">
              <span>Post</span> <AddPostIcon />
            </div>
            <div className="h-[1px] bg-gray-200"></div>
            <div className="flex items-center justify-between py-3  px-3 rounded cursor-pointer">
              <span>AI</span> <AiIcon />
            </div>
          </div>
        )}

        {showMorePopup && (
          <div
            ref={morePopupRef}
            className="fixed left-5 bottom-35 z-50 w-64  bg-white rounded-2xl drop-shadow-lg flex flex-col"
          >
            <div className="p-3">
              <div className="flex items-center gap-3 py-3 px-3 text-sm font-[400] hover:bg-gray-100 rounded-lg cursor-pointer">
                <InstagramIcon />
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-3 text-sm font-[400] hover:bg-gray-100 rounded-lg cursor-pointer">
                <InstagramIcon /> <span>Your Activity</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-3 text-sm font-[400] hover:bg-gray-100 rounded-lg cursor-pointer">
                <InstagramIcon /> <span>Saved</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-3 text-sm font-[400] hover:bg-gray-100 rounded-lg cursor-pointer">
                <InstagramIcon /> <span>Switch Appearance</span>
              </div>
            </div>
            <div className="h-[5px] bg-gray-100"></div>
            <div className="p-3">
              <div className="flex items-center gap-3 py-3 px-3 text-sm hover:bg-gray-100 rounded-lg font-[400] cursor-pointer">
                <span>Report a Problem</span>
              </div>
              <div className="flex items-center gap-3 py-3 px-3 text-sm hover:bg-gray-100 rounded-lg font-[400] cursor-pointer text-red-600">
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}

        {showNotifications && (
          <Portal id="portal-root" className="my-portal-container">
            <div
              ref={showNotificationRef}
              className="fixed  left-[73px] top-0 h-screen  shadow-[10px_0px_15px_-5px_rgba(0,0,0,0.1)] w-[400px] bg-white rounded-r-2xl border-r border-gray-200  overflow-y-auto"
            >
              <Notification
                closeMobileNotifications={closeMobileNotifications}
              />
            </div>
          </Portal>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2 px-4">
          <div
            onClick={() => handleClick("Home")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Home" ? <HomeFillIcon /> : <Home />}
          </div>

          <div
            onClick={() => handleClick("Search")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Search" ? <SearchIconFill /> : <SearchIcon />}
          </div>

          <div
            onClick={() => handleClick("Create")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            <AddIcon />
          </div>

          <div
            onClick={() => handleClick("Reels")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Reels" ? <ReelIconFill /> : <ReelIcon />}
          </div>

          <div
            onClick={() => handleClick("Notifications")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Notifications" ? (
              <NotificationsIconFill />
            ) : (
              <NotificationsIcon />
            )}
          </div>

          <div
            onClick={() => handleClick("Profile")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            <img
              className={`w-[24px] h-[24px] border-2 rounded-full ${
                active === "Profile" ? "border-black" : "border-gray-300"
              }`}
              src={Profile}
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* Mobile Notifications Full Screen */}
      {showMobileNotifications && (
        <Portal id="portal-root" className="my-portal-container">
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
            <Notification closeMobileNotifications={closeMobileNotifications} />
          </div>
        </Portal>
      )}

      {/* Mobile Create Popup */}
      {showCreatePopup && (
        <div
          ref={createPopupRef}
          className="md:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 w-48 bg-white rounded-lg drop-shadow-lg flex flex-col"
        >
          <div className="flex items-center justify-between gap-2 py-3 px-3 rounded cursor-pointer">
            <span>Post</span> <AddPostIcon />
          </div>
          <div className="h-[1px] bg-gray-200"></div>
          <div className="flex items-center justify-between py-3 px-3 rounded cursor-pointer">
            <span>AI</span> <AiIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
