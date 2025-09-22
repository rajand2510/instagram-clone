import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Smile,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  AddIcon,
  CommentIcon,
  Instagram,
  NotificationsIcon,
  NotificationsIconFill,
  SendIcon,
} from "../assets/icon";
import Profile from "../assets/images/profile.png";
import useNavigationStore from "../Store/useNavigationStore";
import myStoryImg from "../assets/images/profile.png";
import { Post } from "../Types/type";
import { posts } from "../Data/postsData";
import { suggestedPeople } from "../Data/suggestedPeople";

const defaultStories = [
  {
    id: 1,
    name: "test",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    isUser: false,
  },
  {
    id: 2,
    name: "alex",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    isUser: false,
  },
  {
    id: 3,
    name: "maya",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80&auto=format&fit=crop",
    isUser: false,
  },
  {
    id: 4,
    name: "leo",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop",
    isUser: false,
  },
  {
    id: 5,
    name: "rachel",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    isUser: false,
  },
];

const HomePage = () => {
  // Zustand state and actions
  const { active, toggleCreatePopup, openNotifications } = useNavigationStore();

  const myStory = {
    id: "my-story",
    name: "Your story",
    avatar: myStoryImg,
    isUser: true,
  };

  const items = [myStory, ...defaultStories];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [expandedPosts, setExpandedPosts] = useState<Record<number, boolean>>(
    {}
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollButtons();

    const handleScroll = () => {
      checkScrollButtons();
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (el.scrollLeft > maxScroll) el.scrollLeft = maxScroll;
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScrollButtons);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full px-0 md:px-4 lg:px-[126px]">
      {/* Mobile header always full width - Updated with Zustand */}
      <div className="w-full h-12 md:hidden fixed top-0 left-0 right-0 bg-white z-50 flex justify-between pt-2 px-4 items-center text-[16px] font-semibold">
        <span>
          <Instagram />
        </span>
        <div className="flex flex-row gap-4 items-center">
          {/* Create Post Button with Zustand */}
          <span
            onClick={toggleCreatePopup}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <AddIcon />
          </span>

          {/* Notifications Button with Zustand */}
          <span
            onClick={openNotifications}
            className={`cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors ${
              active === "Notifications" ? "bg-blue-100" : ""
            }`}
          >
            {active === "Notifications" ? (
              <NotificationsIconFill />
            ) : (
              <NotificationsIcon />
            )}
          </span>
        </div>
      </div>

      <style></style>
      <div className=" pt-10 md:pt-5 w-full justify-center flex flex-row">
        <div className="w-full md:w-[630px] lg:w-[630px]">
          <div className="w-full md:w-[630px] lg:w-[630px] px-2 sm:px-4 md:px-0 pt-5 md:mt-0 relative">
            <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

            {/* Left scroll button */}
            <span className="hidden lg:block">
              <button
                onClick={() => scroll("left")}
                className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none ${
                  canScrollLeft ? "flex" : "hidden"
                }`}
                aria-label="Scroll stories left"
              >
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
            </span>

            {/* Stories */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full gap-x-[2px] sm:gap-x-2"
              role="list"
              aria-label="Stories carousel"
            >
              {items.map((s) => (
                <button
                  key={s.id}
                  role="listitem"
                  className={`snap-start flex-none w-24 sm:w-24 focus:outline-none m-0 p-0 ${
                    s.isUser ? "block lg:hidden" : ""
                  }`}
                  aria-label={`Open ${s.name}'s story`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-[3px] rounded-full bg-gradient-to-tr ${
                        s.isUser
                          ? "from-gray-300 to-gray-300"
                          : "from-yellow-400 via-pink-500 to-purple-600"
                      }`}
                    >
                      <div className="bg-white rounded-full p-[3px] relative">
                        <img
                          src={s.avatar}
                          alt={`${s.name} avatar`}
                          className="rounded-full w-18 h-18 sm:w-[74px] sm:h-[74px] object-cover"
                          loading="lazy"
                        />
                        {s.isUser && (
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCreatePopup();
                            }}
                            className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-full px-[4px] pb-[1px] cursor-pointer hover:bg-gray-800 transition-colors"
                          >
                            +
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="mt-2 text-xs text-center truncate w-24 sm:w-24">
                      {s.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right scroll button */}
            <span className="hidden lg:block">
              <button
                onClick={() => scroll("right")}
                className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none ${
                  canScrollRight ? "flex" : "hidden"
                }`}
                aria-label="Scroll stories right"
              >
                <ChevronRight className="w-4 h-4 text-[#00000042]" />
              </button>
            </span>
          </div>

          <div className="w-full justify-self-center-safe ml-none md:ml-6 lg:ml-11 mt-3 md:mt-8 md:w-[580px] lg:w-[468px] flex flex-col">
            <div className="flex flex-col w-full gap-4">
              {posts.map((post: Post) => {
                const isExpanded = !!expandedPosts[post.id]; // safe boolean

                return (
                  <div key={post.id} className="md:p-0">
                    {/* User Info */}
                    <div className="flex flex-row items-center justify-between px-2 md:px-0">
                      <span className="flex flex-row items-center text-sm gap-1">
                        <img
                          className="w-9 h-9 rounded-full border-white border-2"
                          src={post.user.avatar}
                          alt={post.user.username}
                        />
                        <h3 className="font-semibold">{post.user.username}</h3>
                        <span className="text-gray-400">•</span>
                        <p className="text-gray-500">{post.timeAgo}</p>
                        <span className="text-gray-400">•</span>
                        <button className="text-blue-700 font-semibold">
                          Follow
                        </button>
                      </span>
                    </div>

                    {/* Image/Video */}
                    <div className="w-full pt-2">
                      <div
                        className="relative overflow-hidden aspect-[4/5]"
                        onClick={post.videoUrl ? toggleMute : undefined}
                      >
                        {post.videoUrl ? (
                          <>
                            <video
                              ref={videoRef}
                              src={post.videoUrl}
                              className="w-full h-full object-cover"
                              autoPlay
                              loop
                              muted={muted}
                              playsInline
                            />
                            {/* mute/unmute button */}
                            <button
                              onClick={toggleMute}
                              className="absolute bottom-3 right-3 bg-black/50 rounded-full p-2 text-white"
                            >
                              {muted ? (
                                <VolumeX
                                  size={15}
                                  fill="white"
                                  stroke="white"
                                />
                              ) : (
                                <Volume2
                                  size={15}
                                  fill="white"
                                  stroke="white"
                                />
                              )}
                            </button>
                          </>
                        ) : (
                          <img
                            className="w-full h-full object-cover"
                            src={post.imageUrl}
                            alt=""
                          />
                        )}
                      </div>
                    </div>

                    {/* Icons */}
                    <div className="flex flex-row justify-between items-center pt-2 px-3 md:px-0">
                      <span className="flex flex-row gap-5">
                        <NotificationsIcon />
                        <CommentIcon />
                        <SendIcon />
                      </span>
                      <span>
                        <Bookmark />
                      </span>
                    </div>

                    {/* Likes */}
                    <span className="font-semibold px-3 md:px-0 pt-2 text-sm">
                      {post.likes} likes
                    </span>

                    <div className="px-3 md:px-0">
                      <p
                        className={`text-sm ${
                          isExpanded ? "" : "line-clamp-3"
                        }`}
                      >
                        <span className="font-[600] text-sm mr-1">
                          {post.user.username}
                        </span>
                        {post.caption}
                      </p>
                      <button
                        onClick={() => toggleExpand(post.id)}
                        className="text-gray-500 text-sm mt-1"
                      >
                        {isExpanded ? "" : "more"}
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm px-3 md:px-0">
                      View all 213 Comments
                    </p>
                    <div className="pb-2 w-full border-b border-gray-300 px-3 md:px-0 flex justify-between">
                      <input
                        className="focus:outline-none placeholder:text-sm"
                        placeholder="Add a comment..."
                        type="text"
                      />
                      <button className="text-gray-500 cursor-pointer">
                        <Smile size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar - Hidden on mobile and tablet, shown on desktop */}
        <div className="w-[383px] pl-[60px] hidden lg:block pt-4">
          <div className="px-4 flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <img
                className="w-11 h-11 rounded-full border-gray-200 border-2"
                src={Profile}
              />
              <span className="flex flex-col pl-3">
                <h5 className="font-semibold text-sm">virtual_._vortex</h5>
                <h5 className="text-sm text-gray-400">Virtual Vortex</h5>
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600">
                Switch
              </span>
            </div>
          </div>
          <div className="flex flex-row mt-5 justify-between items-center py-1 px-4">
            <h3 className="text-sm font-semibold text-gray-500">
              Suggested for you
            </h3>
            <button className="text-xs font-semibold">See All</button>
          </div>
          <div className="py-2">
            {suggestedPeople.map((person) => (
              <div
                key={person.id}
                className="px-4 py-2 flex flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <img
                    className="w-11 h-11 rounded-full border-gray-200 border-2"
                    src={person.profilePic}
                    alt={person.username}
                  />
                  <span className="flex flex-col pl-3">
                    <h5 className="font-semibold text-sm">{person.username}</h5>
                    <h5 className="text-sm text-gray-400">{person.fullName}</h5>
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600">
                    Follow
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 space-x-1">
            <a className="text-xs text-gray-300 inline hover:underline">
              About
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Help
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Press
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · API
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Jobs
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Privacy
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Terms
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Locations
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Language
            </a>
            <a className="text-xs text-gray-300 inline hover:underline">
              · Meta Verified
            </a>
          </div>
          <div className="px-4 pt-4 space-x-1">
            <a className="text-xs text-gray-300 inline hover:underline">
              © 2025 INSTAGRAM FROM META
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
