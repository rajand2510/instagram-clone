import { MorePostIon, NoPostIcon, ReelIconFill } from "../assets/icon";
import { posts } from "../Data/postsData";

export const ProfilePost = () => {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <NoPostIcon />
        <span className="font-extrabold text-[30px]">No Photos</span>
        <p className="text-sm mt-2">
          When you share photos, they will appear on your profile.
        </p>
        <button className="text-blue-700 font-semibold mt-5 text-sm hover:underline">
          Share your first photo
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-px">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative aspect-[4/5] bg-black group overflow-hidden"
        >
          {post.videoUrl ? (
            <video
              src={post.videoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
          )}

          {/* top-right icon */}
          <div className="absolute top-2 right-2 text-white drop-shadow-md w-5 h-5 z-20">
            {post.videoUrl ? (
              <ReelIconFill className="w-full h-full" />
            ) : (
              <MorePostIon className="w-full h-full" />
            )}
          </div>

          {/* overlay layer shown on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-6 text-white text-sm font-semibold">
              {/* replace with your actual like/comment counts */}
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-white"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-white"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.962 8.962 0 01-3.464-.696L2 17l.696-4.536A8.962 8.962 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                </svg>
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
