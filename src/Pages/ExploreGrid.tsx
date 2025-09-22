import React from "react";
import { posts } from "../Data/postsData";
import { MorePostIon, ReelIconFill } from "../assets/icon";
import { Search as SearchIcon, X } from "lucide-react";
import { suggestedPeople } from "../Data/suggestedPeople";

type ExploreItem = {
  id: number;
  src: string;
  type: "image" | "reel";
  likes: number;
  comments: number;
};

const allItems: ExploreItem[] = posts.map((p) => ({
  id: p.id,
  type: p.videoUrl ? "reel" : "image",
  src: p.videoUrl || p.imageUrl || "",
  likes: p.likes,
  comments: p.comments,
}));

const ExploreGrid: React.FC = () => {
  // build grid cells
  const reels = allItems.filter((i) => i.type === "reel");
  const images = allItems.filter((i) => i.type === "image");

  let reelIndex = 0;
  let imageIndex = 0;
  const cells: (ExploreItem & { tall?: boolean })[] = [];

  const getSmallItem = () => {
    if (imageIndex < images.length) return images[imageIndex++];
    if (reelIndex < reels.length) return reels[reelIndex++];
    return null;
  };

  while (imageIndex < images.length || reelIndex < reels.length) {
    for (let i = 0; i < 2; i++) {
      const item = getSmallItem();
      if (item) cells.push(item);
    }
    if (reelIndex < reels.length) {
      cells.push({ ...reels[reelIndex++], tall: true });
    }
    for (let i = 0; i < 2; i++) {
      const item = getSmallItem();
      if (item) cells.push(item);
    }

    if (reelIndex < reels.length) {
      cells.push({ ...reels[reelIndex++], tall: true });
    }
    for (let i = 0; i < 2; i++) {
      const item = getSmallItem();
      if (item) cells.push(item);
    }
    for (let i = 0; i < 2; i++) {
      const item = getSmallItem();
      if (item) cells.push(item);
    }
  }

  // search state
  const [searchValue, setSearchValue] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  const dummyResults = [
    {
      id: 1,
      username: "dummy_user1",
      fullName: "Dummy User One",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      username: "dummy_user2",
      fullName: "Dummy User Two",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      username: "dummy_user3",
      fullName: "Dummy User Three",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const showSuggestions = focused && !searchValue;
  const showDummyResults = searchValue.length > 0;
  const showOverlay = showSuggestions || showDummyResults;

  return (
    <>
      {/* Container with tablet width constraints */}
      <div className="w-full md:max-w-[600px] lg:max-w-[978px] lg:w-[978px] mx-auto relative  md:px-6 lg:px-0">
        {/* mobile and tablet search bar when no overlay */}
        {!showOverlay && (
          <div className="block lg:hidden bg-[#f4f4f4] sticky top-0 left-0 right-0 z-30 -mx-4 md:-mx-6 px-4 py-2">
            <div className="flex items-center space-x-2 px-4">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  className="w-full placeholder:text-sm pl-9 pr-3 py-0.5 border rounded-md bg-white border-gray-400"
                  type="text"
                  placeholder="Search"
                  onFocus={() => setFocused(true)}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* full-screen overlay when searching */}
        {showOverlay && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col">
            {/* search bar stays visible inside overlay */}
            <div className="bg-[#f4f4f4] px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    className="w-full placeholder:text-sm pl-9 pr-3 py-0.5 border rounded-md bg-white border-gray-400"
                    type="text"
                    placeholder="Search"
                    autoFocus
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSearchValue("");
                    setFocused(false);
                  }}
                  className="text-sm font-semibold text-blue-700"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* scrollable results below */}
            <div className="overflow-y-auto flex-1">
              {showSuggestions && (
                <>
                  <div className="flex flex-row mt-4 justify-between items-center px-4">
                    <h3 className="font-semibold text-sm">Recent</h3>
                    <button className="text-sm font-semibold text-blue-700">
                      Clear All
                    </button>
                  </div>
                  <div className="py-2">
                    {suggestedPeople.map((person) => (
                      <div
                        key={person.id}
                        className="pl-5 pr-7 py-2 flex flex-row justify-between items-center"
                      >
                        <div className="flex flex-row">
                          <img
                            className="w-12 h-12 rounded-full border-gray-200 border-2"
                            src={person.profilePic}
                            alt={person.username}
                          />
                          <span className="flex flex-col pl-3">
                            <h5 className="font-semibold text-sm">
                              {person.username}
                            </h5>
                            <h5 className="text-sm text-gray-400">
                              {person.fullName}
                            </h5>
                          </span>
                        </div>
                        <div>
                          <span className="">
                            <X strokeWidth={1.8} color="#4e4e4e" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {showDummyResults && (
                <div className="py-2">
                  {dummyResults.map((res) => (
                    <div
                      key={res.id}
                      className="pl-5 pr-8 py-2 flex flex-row justify-between items-center hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="flex flex-row">
                        <img
                          className="w-12 h-12 rounded-full border-gray-200 border-2"
                          src={res.profilePic}
                          alt={res.username}
                        />
                        <span className="flex flex-col pl-3">
                          <h5 className="font-semibold text-sm">{res.username}</h5>
                          <h5 className="text-sm text-gray-400">{res.fullName}</h5>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop sticky space */}
        <div className="hidden lg:block h-8 bg-white sticky top-0 left-0 right-0 z-1"></div>

        {/* grid - responsive for tablet with appropriate gaps */}
        <div className="mt-0 md:mt-8 grid grid-cols-3 gap-[2px] md:gap-1">
          {cells.map((item, idx) => (
            <div
              key={item.id + "-" + idx}
              className={`relative overflow-hidden group ${
                item.tall ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: item.tall ? "1/2" : "1/1" }}
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  className="w-full h-full object-cover"
                  alt=""
                />
              )}
              {item.type === "reel" && (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="metadata"
                  ref={(el) => {
                    if (el) el.currentTime = 0;
                  }}
                  onMouseEnter={(e) => {
                    const vid = e.currentTarget;
                    vid.currentTime = 0;
                    vid.play();
                  }}
                  onMouseLeave={(e) => {
                    const vid = e.currentTarget;
                    vid.pause();
                    vid.currentTime = 0;
                  }}
                />
              )}

              <div className="absolute top-2 right-2 text-white drop-shadow-md z-20">
                {item.type === "reel" ? (
                  <ReelIconFill />
                ) : (
                  <MorePostIon className="w-6 h-6" />
                )}
              </div>

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-6 text-white text-sm font-semibold">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10c0 3.866-3.582 7-8 7a8.962 8.962 0 01-3.464-.696L2 17l.696-4.536A8.962 8.962 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                    </svg>
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreGrid;