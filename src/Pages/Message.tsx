import { Outlet, useLocation } from "react-router";
import { HiddenIcon, InboxIcon, RequestIcon } from "../assets/icon";
import Text from "../Components/MessagePage/Text";

const Message = () => {
  const location = useLocation();
  console.log(location.pathname);

  const isChatOpen = /^\/messages\/inbox\/t\/[^/]+$/.test(location.pathname);

  let rightContent;

  if (isChatOpen) {
    rightContent = <Text />;
  } else if (location.pathname === "/messages/inbox") {
    rightContent = (
      <div className="flex flex-col justify-center items-center text-center h-full ">
        <InboxIcon />
        <h3 className="text-[20px] pt-2">Your Massages</h3>
        <p className="text-gray-500 text-sm pt-1">
          Send a message to start a chat.
        </p>
        <button className="bg-[#4a5df9] text-white text-sm rounded-lg px-4 py-1.5 mt-4 font-semibold">
          Send Messages
        </button>
      </div>
    );
  } else if (location.pathname === "/messages/requests/hidden") {
    rightContent = (
      <div className="flex flex-col justify-center items-center text-center h-full ">
        <div className="p-6 rounded-full border-2 items-center flex justify-center ">
          <HiddenIcon />
        </div>
        <h3 className="text-[20px] pt-2">Hidden requests</h3>
        <p className="text-gray-500 text-sm pt-1 max-w-lg">
          These are message requests that may be offensive or unwanted.
        </p>
      </div>
    );
  } else if (location.pathname === "/messages/requests") {
    rightContent = (
      <div className="flex flex-col justify-center items-center text-center h-full ">
        <div className="p-6 rounded-full border-2 items-center flex justify-center ">
          <RequestIcon />
        </div>
        <h3 className="text-[20px] pt-2">Message requests</h3>
        <p className="text-gray-500 text-sm pt-1 max-w-lg">
          These messages are from people you've restricted or don't follow. They
          won't know you viewed their request until you allow them to message
          you.
        </p>
      </div>
    );
  } else {
    rightContent = (
      <div className="flex flex-col justify-center items-center text-center h-full ">
        <InboxIcon />
        <h3 className="text-[20px] pt-2">Your Massages</h3>
        <p className="text-gray-500 text-sm pt-1">
          Send a message to start a chat.
        </p>
        <button className="bg-[#4a5df9] text-white text-sm rounded-lg px-4 py-1.5 mt-4 font-semibold">
          Send Messages
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row h-screen">
      {/* left panel - hide on mobile if chat open */}
      <div
        className={`${
          isChatOpen ? "hidden md:block" : "block"
        } w-full md:w-[400px] h-screen border-r border-gray-200`}
      >
        <Outlet />
      </div>

      {/* right panel - full width on mobile when chat open */}
      <div
        className={`${
          isChatOpen ? "w-full md:w-[calc(100%-400px)]" : "hidden md:block w-[calc(100%-400px)]"
        }`}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default Message;
