import { ChevronLeft } from "lucide-react";
import { NotificationProps } from "../Types/type";
import { notificationsData } from "../Data/notificationsData";
const Notification = ({ closeMobileNotifications }: NotificationProps) => {
  return (
    <>
      <div className="hidden md:block  items-center justify-between  ">
        <h1 className="text-2xl font-bold px-6 py-[18px]">Notifications</h1>
      </div>
      <div className=" relative md:hidden border-b border-gray-300 flex items-center px-6 py-[10px] text-[16px] font-semibold">
        <div onClick={closeMobileNotifications} className="cursor-pointer">
          <ChevronLeft size={24} />
        </div>

        <span className=" absolute left-1/2 -translate-x-1/2 ">
          Notifications
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {notificationsData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`px-4 md:px-6 ${
              sectionIndex !== notificationsData.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <h3 className="text-[16px] font-bold pb-4 pt-2 md:pt-0 mt-2 md:mt-5">
              {section.section}
            </h3>

            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-row items-center gap-3 pb-4"
              >
                {/* Avatar(s) */}
                {item.users.length === 1 ? (
                  // single avatar
                  <img
                    className="w-11 h-11 rounded-full border-white border-2"
                    src={item.users[0]}
                    alt=""
                  />
                ) : (
                  // diagonal stacked avatars (max two)
                  <div className="relative w-11 h-11">
                    <img
                      src={item.users[0]}
                      alt="User 1"
                      className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src={item.users[1]}
                      alt="User 2"
                      className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                )}

                {/* Text */}
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        ))}
        
      </div>
    </>
  );
};

export default Notification;
