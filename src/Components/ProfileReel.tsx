import { reels } from "../Data/reelsData";

export const ProfileReel = () => {
  return (
    <div className="grid grid-cols-4 gap-px">
      {reels.map((reel) => (
        <div
          key={reel.id}
          className="relative bg-black aspect-[9/16] overflow-hidden group"
        >
          {/* video */}
          <video
            src={reel.videoUrl}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          />

          {/* always show views at bottom-left */}
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zm0 11a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
            <span>{reel.views}</span>
          </div>

          {/* hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-6 text-white font-semibold">
              {/* likes */}
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span>{reel.likes}</span>
              </div>

              {/* comments */}
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.962 8.962 0 01-3.464-.696L2 17l.696-4.536A8.962 8.962 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                </svg>
                <span>{reel.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
