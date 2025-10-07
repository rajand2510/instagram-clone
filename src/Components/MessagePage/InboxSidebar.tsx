import { ChevronDown, ChevronLeft, Edit, Search } from "lucide-react";
import { useRef, useState } from "react";
import ProfileIcon from "../../assets/images/profile.png";
import { suggestedPeople } from "../../Data/suggestedPeople";
import { NavLink } from "react-router-dom";
const MessagesLayout = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  return (
    <div className="flex flex-col">
      {/* Sidebar Header */}
      <div className="flex flex-row justify-between pt-9 px-6 pb-3">
        <span className="flex items-center gap-1 justify-center flex-row">
          <h3 className="text-[20px] font-bold">virtual_._vortex</h3>
          <ChevronDown size={16} />
        </span>
        <button>
          <Edit />
        </button>
      </div>
      <div className="w-full relative flex items-center gap-2 px-4 pb-3">
        {isFocused && (
          <button
            type="button"
            onClick={() => {
              setIsFocused(false);
            }}
            className=""
          >
            <ChevronLeft size={30} className="" />
          </button>
        )}

        <div className="relative flex-1">
          {/* Search icon when not focused */}
          {!isFocused && (
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          )}

          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`bg-[#f5f5f5] w-full py-2 rounded-lg 
            ${!isFocused ? "pl-9" : "pl-4"} pr-4 
            outline-none `}
          />
        </div>
      </div>
      <div className="pl-7">
       <div className="relative pt-8">
  {/* NOTE BOX */}
  <div
    className="rounded-2xl md:rounded-xl bg-white w-16 h-10 absolute top-0 
                left-4 md:left-5 lg:left-1 shadow-lg flex justify-center items-center"
  >
    <span className="text-gray-500 text-[11px]">Note..</span>
  </div>

  {/* DECOR DOT 1 */}
  <div
    className="rounded-full bg-white w-2 h-2 absolute top-9 
                left-7 md:left-12 lg:left-4 shadow-lg"
  ></div>

  {/* DECOR DOT 2 */}
  <div
    className="rounded-full bg-white w-1 h-1 absolute top-11 
                left-9 md:left-14 lg:left-6 shadow-lg"
  ></div>

  <img
    className="w-[74px] h-[74px] rounded-full border-gray-200 border-2"
    src={ProfileIcon}
    alt="profile"
  />
  <p className="text-xs text-gray-500 px-3">Your note</p>
</div>

      </div>
      <div className="flex flex-row pt-4 justify-between px-6 items-center">
        <span className=" font-bold">Messages</span>
        <NavLink
          to="/messages/requests"
          className="text-sm font-semibold text-gray-500 "
        >
          Requests
        </NavLink>
      </div>
      <div className="py-2">
        {suggestedPeople.map((person) => (
          <NavLink
            key={person.id}
            to={`/messages/inbox/t/${person.id}`} // Updated route here
            className={({ isActive }) =>
              `pl-5 pr-7 hover:bg-[#f5f5f5] py-2 flex flex-row justify-between items-center ${
                isActive ? "bg-[#e0e0e0]" : ""
              }`
            }
          >
            <div className="flex flex-row">
              <img
                className="w-14 h-14 rounded-full border-gray-200 border-2"
                src={person.profilePic || ProfileIcon}
                alt={person.username}
              />
              <span className="flex flex-col pl-3 justify-center gap-1">
                <h5 className="text-sm">{person.fullName}</h5>
                <h5 className="text-xs text-gray-400">{person.lastActive}</h5>
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessagesLayout;
