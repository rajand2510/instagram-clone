import React, { useEffect } from "react";
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
import Search from "./Search";
import useNavigationStore ,{TabName} from "../Store/useNavigationStore";



const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Zustand state and actions
  const {
    active,
    showNotifications,
    showSearch,
    showCreatePopup,
    showMorePopup,
    showMobileNotifications,
    setActive,
    openNotifications,
    closeNotifications,
    openSearch,
    closeSearch,
    toggleCreatePopup,
    toggleMorePopup,
    closeAllPopups,
    resetOverlays,
  } = useNavigationStore();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive("Home");
    else if (path.startsWith("/search")) setActive("Search");
    else if (path.startsWith("/explore")) setActive("Explore");
    else if (path.startsWith("/reels")) setActive("Reels");
    else if (path.startsWith("/messages")) setActive("Messages");
    else if (path.startsWith("/profile")) setActive("Profile");
    else setActive("");
  }, [location.pathname, setActive]);

  const handleClick = (name: TabName): void => {
    if (name === "Create") {
      toggleCreatePopup();
      return;
    }

    if (name === "More") {
      toggleMorePopup();
      return;
    }

    // Notifications
    if (name === "Notifications") {
      openNotifications();
      return;
    }

    // Search
    if (name === "Search") {
      openSearch();
      return;
    }

    // Close overlays when navigating to other tabs
    resetOverlays();

    // Normal navigation
    if (name === "Home") navigate("/");
    if (name === "Explore") navigate("/explore");
    if (name === "Reels") navigate("/reels");
    if (name === "Messages") navigate("/messages");
    if (name === "Profile") navigate("/profile");

    setActive(name);
  };

  const closeMobileNotifications = (): void => {
    closeNotifications();
  };

  const createPopupRef = useOutsideClick<HTMLDivElement>(() => {
    if (showCreatePopup) closeAllPopups();
  });

  const showNotificationRef = useOutsideClick<HTMLDivElement>(() => {
    if (showNotifications) closeNotifications();
  });

  const showSearchRef = useOutsideClick<HTMLDivElement>(() => {
    if (showSearch) closeSearch();
  });

  const morePopupRef = useOutsideClick<HTMLDivElement>(() => {
    if (showMorePopup) closeAllPopups();
  });

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed bg-white md:w-[73px] lg:w-[245px] md:min-w-[73px] lg:min-w-[245px] md:max-w-[73px] lg:max-w-[245px]">
        <div
          className={`h-screen overflow-y-auto sticky top-0 border-r border-gray-200 transition-all duration-300 
        ${
          showNotifications || showSearch
            ? "w-[73px] min-w-[73px] max-w-[73px]"
            : "w-full "
        }`}
        >
          {/* Logo */}
          {showNotifications || showSearch ? (
            <div className="pt-[36px] pb-[7px] pl-6">
              <InstagramIcon />
            </div>
          ) : (
            <div className="pt-[36px] md:pt-[36px] lg:pt-[41px] pl-6">
              {/* Show Instagram icon on tablet, full logo on desktop */}
              <div className="md:block lg:hidden">
                <InstagramIcon />
              </div>
              <div className="hidden lg:block">
                <Instagram />
              </div>
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
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
                Home
              </span>
            </div>

            <div
              onClick={() => handleClick("Search")}
              className="flex flex-row gap-4 py-3 rounded-lg px-3 hover:bg-gray-100 cursor-pointer"
            >
              {active === "Search" ? <SearchIconFill /> : <SearchIcon />}
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
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
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
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
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
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
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
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
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
                Notifications
              </span>
            </div>

            {/* Create */}
            <div
              onClick={() => handleClick("Create")}
              className="relative flex flex-row gap-4 py-3 rounded-lg px-3 hover:bg-gray-100 cursor-pointer"
            >
              <AddIcon />
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
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
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
                Profile
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full relative mt-[66px] flex flex-col px-3 gap-[8px]">
            <div
              onClick={() => handleClick("More")}
              className={`flex flex-row gap-4 py-3  ${
                showMorePopup ? "font-bold" : ""
              } rounded-lg px-3 hover:bg-gray-100 cursor-pointer`}
            >
              {showMorePopup ? <MoreIconFill /> : <MoreIcon />}
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
                More
              </span>
            </div>
            <div className="flex flex-row gap-4 py-3 rounded-lg px-3 hover:bg-gray-100 cursor-pointer">
              <MetaAi />{" "}
              <span
                className={`${
                  showNotifications || showSearch ? "hidden" : "md:hidden lg:block"
                }`}
              >
                Also from Meta
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Popups */}
        {showCreatePopup && (
          <div
            ref={createPopupRef}
            className="fixed md:left-16 lg:left-20 bottom-60 z-50 w-48 bg-white  rounded-lg drop-shadow-lg flex flex-col "
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
            className="fixed md:left-1 lg:left-5 bottom-35 z-50 w-64  bg-white rounded-2xl drop-shadow-lg flex flex-col"
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
          <Portal id="portal-root" className="my-portal-container ">
            <div
              ref={showNotificationRef}
              className="fixed  left-[73px] top-0 h-screen  shadow-[10px_0px_15px_-5px_rgba(0,0,0,0.1)] w-[400px] bg-white rounded-r-2xl border-r border-gray-200  overflow-y-auto z-50"
            >
              <Notification
                closeMobileNotifications={closeMobileNotifications}
              />
            </div>
          </Portal>
        )}

        {showSearch && (
          <Portal id="portal-root" className="my-portal-container ">
            <div
              ref={showSearchRef}
              className="fixed  left-[73px] top-0 h-screen  shadow-[10px_0px_15px_-5px_rgba(0,0,0,0.1)] w-[400px] bg-white rounded-r-2xl border-r border-gray-200  overflow-y-auto z-50"
            >
              <Search />
            </div>
          </Portal>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 ${
          showMobileNotifications ? "z-[60]" : "z-50"
        }`}
      >
        <div className="flex justify-around items-center py-2 px-4">
          <div
            onClick={() => handleClick("Home")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Home" ? <HomeFillIcon /> : <Home />}
          </div>

          <div
            onClick={() => handleClick("Explore")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Explore" ? <SearchIconFill /> : <SearchIcon />}
          </div>

          <div
            onClick={() => handleClick("Reels")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Reels" ? <ReelIconFill /> : <ReelIcon />}
          </div>

          <div
            onClick={() => handleClick("Messages")}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            {active === "Messages" ? <MessageIconFill /> : <MessageIcon />}
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

      {/* Mobile Notifications - Modified to not cover bottom navigation */}
      {showMobileNotifications && (
        <Portal id="portal-root" className="my-portal-container">
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-12 bg-white z-50 flex flex-col">
            <Notification closeMobileNotifications={closeMobileNotifications} />
          </div>
        </Portal>
      )}

      {/* Mobile Create Popup */}
      {showCreatePopup && (
        <div
          ref={createPopupRef}
          className="md:hidden fixed top-10 left-2/3 transform -translate-x-1/2 z-50 w-48 bg-white rounded-lg drop-shadow-lg flex flex-col"
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