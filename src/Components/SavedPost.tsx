import { MorePostIon, ReelIconFill } from "../assets/icon";
import { posts } from "../Data/postsData";

const SavedPost = () => {
  const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60",
  ];

  return (
    <div className="w-full">
      <div className="flex justify-center md:justify-between items-center w-full pt-6 px-3 md:px-0">
        <p className="text-xs">Only you can see what you've saved</p>
        <button className="text-blue-700 text-sm font-semibold hover:underline hidden md:block">
          + New Collection
        </button>
      </div>

      <div className="hidden md:grid   px-14 md:px-0 md:grid-cols-3 gap-4 pt-4">
        {[1, 2, 3].map((box, index) => (
          <div
            key={box}
            className="relative aspect-square rounded-md overflow-hidden border border-gray-300"
          >
            {/* First square: 4-photo collage */}
            {index === 0 ? (
              <div className="grid grid-cols-2 absolute inset-0">
                {images.map((img, i) => (
                  <div key={i} className="aspect-square">
                    <img
                      src={img}
                      alt={`img-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Other squares: single full image */
              <img
                src={images[0]} // or choose different image if you like
                alt={`collection-${box}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-[#979797]" />

            {/* Label */}
            <span className="absolute bottom-2 left-2 text-[20px] text-white font-medium">
              Collection {box}
            </span>
          </div>
        ))}
      </div>
      <div className="grid md:hidden mt-5  grid-cols-3 gap-px">
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
    </div>
  );
};

export default SavedPost;
