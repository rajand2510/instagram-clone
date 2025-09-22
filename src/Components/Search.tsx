import { useState } from "react";
import { suggestedPeople } from "../Data/suggestedPeople";
import { X } from "lucide-react";

const Search = () => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  // dummy search results with profile pictures
  const dummyResults = [
    {
      id: 1,
      username: "dummy_user1",
      fullName: "Dummy User One",
      profilePic:
        "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      username: "dummy_user2",
      fullName: "Dummy User Two",
      profilePic:
        "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      username: "dummy_user3",
      fullName: "Dummy User Three",
      profilePic:
        "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const showSuggestions = !value; 
  const showDummyResults = value; 

  return (
    <div className="hidden md:block items-center justify-between">
      <h1 className="text-2xl font-semibold px-6 py-[18px]">Search</h1>

      {/* Input */}
      <div
        className={`w-full relative px-4 mt-6 pb-6 ${
          showSuggestions ? "border-b border-gray-300" : ""
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search"
          className="bg-[#efefef] w-full py-2 rounded-lg pl-4 pr-8 outline-none placeholder:font-light"
        />

        {(focused || value) && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute top-1/2 right-5 -translate-y-6/5 
                 w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center"
          >
            <span className="text-[#efefef] text-xs font-bold">×</span>
          </button>
        )}
      </div>

      <div className="max-h-[calc(100vh-133px)] overflow-y-auto">
        {/* Suggested People */}
        {showSuggestions && (
          <>
            <div className="flex flex-row mt-5 justify-between items-center px-6">
              <h3 className="font-semibold">Recent</h3>
              <button className="text-sm font-semibold text-blue-700">
                Clear All
              </button>
            </div>
            <div className="py-2">
              {suggestedPeople.map((person) => (
                <div
                  key={person.id}
                  className="pl-5 pr-7  py-2 flex flex-row justify-between items-center"
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
                    <span className=" ">
                      <X strokeWidth={1.8} color="#4e4e4e"/>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Dummy search results */}
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
  );
};

export default Search;
