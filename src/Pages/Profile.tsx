import { Bookmark, ChevronDown } from "lucide-react";
import { PostsIcon, ReelIcon, SettingsIcon, TagIcon } from "../assets/icon";
import ProfileIcon from "../assets/images/profile.png";
import { NavLink, Outlet } from "react-router";
import { reels } from "../Data/reelsData";

const Profile = () => {
  return (
    <>
      <div className="w-full h-12 md:hidden fixed top-0 left-0 right-0 bg-white z-50 flex items-center">
        {/* left icon */}
        <span className="pl-4">
          <SettingsIcon />
        </span>

        {/* center text */}
        <div className="absolute left-1/2 translate-x-[-50%] justify-center flex flex-row gap-2 items-center text-[16px] font-semibold">
          virtual_._vortex <ChevronDown size={17} />
        </div>
      </div>

      <div className="min-h-screen mt-8 md:mt-0 flex flex-col py-[30px] px-3 md:px-6 lg:px-3 items-center w-full md:max-w-[600px] lg:max-w-[978px] lg:w-[978px] mx-auto">
        <div className="flex md:justify-between w-full md:px-0 lg:px-0">
          {/* LEFT SECTION */}
          <div className="flex justify-center md:w-[calc(40%-20px)] lg:w-[calc(100%-624px)] md:justify-center lg:justify-center items-center md:mr-4 lg:mr-8">
            <div className="relative py-6">
              {/* NOTE BOX */}
              <div
                className="rounded-2xl md:rounded-xl bg-white w-16 h-10 absolute top-0 
                        left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 lg:left-8 lg:translate-x-0 shadow-lg flex justify-center items-center"
              >
                <span className="text-gray-500 text-[11px]">Note..</span>
              </div>
              {/* DECOR DOT 1 */}
              <div
                className="rounded-full bg-white w-2 h-2 absolute top-9 
                        left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 lg:left-12 lg:translate-x-0 shadow-lg"
              ></div>
              {/* DECOR DOT 2 */}
              <div
                className="rounded-full bg-white w-1 h-1 absolute top-11 
                        left-1/2 -translate-x-1/2 md:left-14 md:translate-x-0 lg:left-14 lg:translate-x-0 shadow-lg"
              ></div>
              {/* PROFILE IMAGE */}
              <img
                className="w-20 h-20 md:w-32 md:h-32 lg:w-38 lg:h-38 rounded-full border-gray-200 border-2"
                src={ProfileIcon}
                alt="profile"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-[60%] lg:w-[624px] pl-6 md:pl-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2">
              <h3 className="text-[20px] md:text-[20px] lg:text-[20px]">virtual_._vortex</h3>
              <span className="flex gap-2 md:ml-3 lg:ml-5 items-center">
                <button className="text-sm bg-[#f0f2f5] font-semibold rounded-lg px-3 md:px-3 lg:px-4 py-[6px] text-center">
                  Edit profile
                </button>
                <button className="text-sm bg-[#f0f2f5] font-semibold rounded-lg px-3 md:px-3 lg:px-4 py-[6px] text-center">
                  View archive
                </button>
                <span className="md:block hidden">
                  <SettingsIcon />
                </span>
              </span>
            </div>

            <div className="flex-row md:block hidden items-center mt-5 space-x-4 md:space-x-6 lg:space-x-10">
              <button className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-500">
                <span className="font-semibold text-black">6</span> posts
              </button>
              <button className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-500">
                <span className="font-semibold text-black">8</span> followers
              </button>
              <button className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-500">
                <span className="font-semibold text-black">17</span> following
              </button>
            </div>

            <h3 className="mt-4 text-sm font-semibold hidden md:block">
              Virtual Vortex
            </h3>
            <p className="text-sm mt-1 hidden md:block">
              Virtual Vortex 🚀 | Top 40 in XR Creator Hackathon 🏆 | AR
              Shopping Redefined 🛍️✨ | View & Place Products in AR 📱🕶️ |
              Innovating XR & eCommerce 🌍
            </p>
          </div>
        </div>
        
        <div className="w-full md:px-0 lg:px-0">
          <h3 className="text-sm font-semibold block md:hidden">
            Virtual Vortex
          </h3>
          <p className="text-sm mt-1 block md:hidden">
            Virtual Vortex 🚀 | Top 40 in XR Creator Hackathon 🏆 | AR Shopping
            Redefined 🛍️✨ | View & Place Products in AR 📱🕶️ | Innovating XR &
            eCommerce 🌍
          </p>
        </div>
        
        <div className="w-full flex  md:px-4 lg:px-10 gap-[1px] md:gap-3 lg:gap-9 mt-4 md:mt-8 lg:mt-10">
          <div className="flex flex-col items-center">
            <div
              className={`p-[3px] rounded-full bg-gradient-to-tr from-gray-300 to-gray-300`}
            >
              <div className="bg-white rounded-full p-[3px] relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=687&auto=format&fit=crop"
                  className="rounded-full w-[56px] h-[56px] md:w-14 md:h-14 lg:w-18 lg:h-18 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="mt-2 text-xs text-center truncate w-16 md:w-16 lg:w-24">
              Test
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`p-[3px] rounded-full bg-gradient-to-tr from-gray-300 to-gray-300`}
            >
              <div className="bg-white rounded-full p-[3px] relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=687&auto=format&fit=crop"
                  className="rounded-full w-[56px] h-[56px] md:w-14 md:h-14 lg:w-18 lg:h-18 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="mt-2 text-xs text-center truncate w-16 md:w-16 lg:w-24">
              Test
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`p-[3px] rounded-full bg-gradient-to-tr from-gray-300 to-gray-300`}
            >
              <div className="bg-white rounded-full p-[3px] relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=687&auto=format&fit=crop"
                  className="rounded-full w-[56px] h-[56px] md:w-14 md:h-14 lg:w-18 lg:h-18 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="mt-2 text-xs text-center truncate w-16 md:w-16 lg:w-24">
              Test
            </span>
          </div>
        </div>

        <div className="w-full md:hidden mt-7 border-t py-3 border-gray-300 pb-2">
          <div className="flex justify-center items-center gap-12">
            <button className="flex flex-col items-center text-gray-500 text-[16px]">
              <span className="font-semibold text-black">6</span>
              <span className="leading-none">posts</span>
            </button>

            <button className="flex flex-col items-center text-gray-500 text-[16px]">
              <span className="font-semibold text-black">8</span>
              <span className="leading-none">followers</span>
            </button>

            <button className="flex flex-col items-center text-gray-500 text-[16px]">
              <span className="font-semibold text-black">17</span>
              <span className="leading-none">following</span>
            </button>
          </div>
        </div>
        
        <div className="w-full border-b flex flex-row md:mt-10 lg:mt-14 justify-evenly border-gray-300">
          <NavLink
            to="post"
            className={({ isActive }) =>
              `py-3 px-3 md:px-4 lg:px-5 flex items-center ${
                isActive
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`
            }
          >
            <PostsIcon />
          </NavLink>
          {reels.length > 0 && (
            <NavLink
              to="reels"
              className={({ isActive }) =>
                `py-3 px-3 md:px-4 lg:px-5 flex items-center ${
                  isActive
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                }`
                }
            >
              <ReelIcon />
            </NavLink>
          )}
          <NavLink
            to="saved"
            className={({ isActive }) =>
              `py-3 px-3 md:px-4 lg:px-5 flex items-center ${
                isActive
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`
            }
          >
            <Bookmark />
          </NavLink>

          <NavLink
            to="tagged"
            className={({ isActive }) =>
              `py-3 px-3 md:px-4 lg:px-5 flex items-center ${
                isActive
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`
            }
          >
            <TagIcon />
          </NavLink>
        </div>
        <Outlet />
        
      </div>
      
      <div className="hidden lg:block">
        <div className="flex flex-wrap w-full px-32 justify-center items-center gap-x-6 gap-y-2 text-xs text-gray-500 mt-4 mb-4">
          <a href="#" className="hover:text-gray-700 transition-colors">
            Meta
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Jobs
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Help
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            API
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Locations
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Instagram Lite
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Meta AI
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Meta AI Articles
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Threads
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Contact Uploading & Non-Users
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Meta Verified
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;