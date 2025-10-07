import { MoreHorizontal, Smile } from "lucide-react";
import React, {
  useState,
  useRef,
  useEffect,
  ButtonHTMLAttributes,
  forwardRef,
  SVGProps,
} from "react";
import { SendIcon } from "../assets/icon";

/* -------------------- MOCK DATA -------------------- */
const mockReels = [
  {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    username: "john_doe",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Check out this cool view!",
    likes: 120,
    comments: [
      {
        id: "c1",
        username: "sara_k",
        userAvatar: "https://randomuser.me/api/portraits/women/21.jpg",
        text: "Wow, amazing view! 😍",
      },
      {
        id: "c2",
        username: "mike_t",
        userAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "I wish I was there! 🌄",
      },
    ],
    music: "Cool Vibes - DJ Sample",
  },
  {
    id: "2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    username: "jane_smith",
    userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Amazing sunset 🌅",
    likes: 340,
    comments: [
      {
        id: "c3",
        username: "alex_k",
        userAvatar: "https://randomuser.me/api/portraits/men/76.jpg",
        text: "Sunsets are the best! 🌞",
      },
      {
        id: "c4",
        username: "lisa_r",
        userAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Beautiful colors! 🎨",
      },
      {
        id: "c5",
        username: "daniel_p",
        userAvatar: "https://randomuser.me/api/portraits/men/33.jpg",
        text: "Where is this place? 😍",
      },
    ],
    music: "Sunset Beats - Music Maker",
  },
  {
    id: "3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    username: "alex_k",
    userAvatar: "https://randomuser.me/api/portraits/men/76.jpg",
    description: "Fun at the beach 🏖️",
    likes: 250,
    comments: [
      {
        id: "c6",
        username: "emma_w",
        userAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
        text: "Looks like a fun day! 🌊",
      },
      {
        id: "c7",
        username: "ryan_h",
        userAvatar: "https://randomuser.me/api/portraits/men/29.jpg",
        text: "I love beach vibes! 🏄",
      },
      {
        id: "c8",
        username: "nina_l",
        userAvatar: "https://randomuser.me/api/portraits/women/63.jpg",
        text: "Wish I could join! 😎",
      },
    ],
    music: "Beach Party - DJ Waves",
  },
];

/* -------------------- ICONS -------------------- */
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const MessageCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

const Volume2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const VolumeX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="22" x2="16" y1="9" y2="15" />
    <line x1="16" x2="22" y1="9" y2="15" />
  </svg>
);



/* -------------------- UI COMPONENTS -------------------- */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95",
      outline: "border border-primary bg-transparent text-foreground hover:bg-accent active:scale-95",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-95",
      ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-95",
    };
    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10 p-0",
    };
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className || ""}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

const Avatar = ({ src, alt, fallback, className }: AvatarProps) => {
  const [error, setError] = useState(false);
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-muted ${className || ""}`}>
      {src && !error ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-sm font-medium text-muted-foreground">
          {fallback || alt?.charAt(0).toUpperCase() || "?"}
        </span>
      )}
    </div>
  );
};

/* -------------------- COMPONENT 1: COMMENTS SECTION -------------------- */
interface Comment {
  id: string;
  username: string;
  userAvatar: string;
  text: string;
}

interface CommentsProps {
  comments: Comment[];
  isVisible: boolean;
  onClose: () => void;
}

const CommentsSection = ({ comments, isVisible, onClose }: CommentsProps) => {
  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[50vh] z-40 bg-white backdrop-blur-md p-4 flex flex-col rounded-t-2xl shadow-lg transform transition-transform duration-300 ease-out
        md:absolute md:bottom-0 md:right-10 md:left-auto md:w-80 md:h-[50vh] md:rounded-lg md:rounded-tr-none"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(100%)" }}
      onClick={handleClose}
    >
      <div className="flex flex-col flex-1 h-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex md:hidden w-full justify-center items-center">
          <span className="w-14 h-1 rounded-full mb-5 bg-gray-300"></span>
        </div>

        <h3 className="font-semibold md:font-bold mb-3 text-center">Comments</h3>

        <div className="flex-1 overflow-y-auto mb-2 pr-1">
          {comments.map((c) => (
            <div key={c.id} className="flex flex-col gap-1 mb-3">
              <div className="flex items-start gap-3">
                <Avatar
                  src={c.userAvatar}
                  alt={c.username}
                  fallback={c.username[0]}
                  className="h-8 w-8 border border-gray-300"
                />
                <div className="flex flex-col flex-1">
                  <span className="font-semibold flex justify-between text-sm">
                    <span>{c.username}</span>
                    <Heart className="h-3 w-3" />
                  </span>
                  <span className="text-sm">{c.text}</span>
                  <div className="flex gap-4 mt-1 text-xs text-gray-500">
                    <button className="flex font-semibold items-center gap-1">50 likes</button>
                    <button className="font-semibold">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full border border-gray-300">
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="You"
            fallback="Y"
            className="h-8 w-8"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full pl-2 bg-gray-100 rounded-full text-sm focus:outline-none text-gray-900"
          />
          <Smile className="h-6 w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

/* -------------------- COMPONENT 2: SINGLE REEL -------------------- */
interface ReelData {
  id: string;
  videoUrl: string;
  username: string;
  userAvatar: string;
  description: string;
  likes: number;
  comments: Comment[];
  music: string;
}

interface SingleReelProps {
  reel: ReelData;
  videoRef: (el: HTMLVideoElement | null) => void;
  isMuted: boolean;
  isLiked: boolean;
  isSaved: boolean;
  onMuteToggle: () => void;
  onVideoClick: () => void;
  onLike: () => void;
  onComment: () => void;
  onSave: () => void;
}

const SingleReel = ({
  reel,
  videoRef,
  isMuted,
  isLiked,
  isSaved,
  onMuteToggle,
  onVideoClick,
  onLike,
  onComment,
  onSave,
}: SingleReelProps) => {
  const ReelActions = ({ isMobile = false }) => (
    <div className="flex flex-col gap-6">
      <button onClick={onLike} className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <Heart
          className={`h-7 w-7 transition-colors ${
            isLiked ? "fill-red-500 text-red-500" : isMobile ? "text-white" : "text-foreground"
          }`}
        />
        <span className={`text-xs font-semibold ${isMobile ? "text-white" : ""}`}>{reel.likes}</span>
      </button>
      <button onClick={onComment} className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <MessageCircle className={`h-7 w-7 ${isMobile ? "text-white" : ""}`} />
        <span className={`text-xs font-semibold ${isMobile ? "text-white" : ""}`}>{reel.comments.length}</span>
      </button>
      <button className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <SendIcon color={isMobile ? "white" : "currentColor"} />
      </button>
      <button onClick={onSave} className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <Bookmark
          className={`h-7 w-7 transition-colors ${
            isSaved ? "fill-black text-black" : isMobile ? "text-white" : "text-foreground"
          }`}
        />
      </button>
      <button className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <MoreHorizontal className={`h-5 w-5 transition-colors ${isMobile ? "text-white" : ""}`} />
      </button>
    </div>
  );

  return (
    <div className="w-full h-full flex-shrink-0 relative">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="w-full h-full object-cover cursor-pointer"
        loop
        muted={isMuted}
        onClick={onVideoClick}
        playsInline
        autoPlay
      />

      <button
        onClick={onMuteToggle}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-500/60 transition-colors z-10"
      >
        {isMuted ? <VolumeX className="h-6 w-6 text-white" /> : <Volume2 className="h-6 w-6 text-white" />}
      </button>

      <div className="absolute bottom-0 pb-12 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 md:bottom-0">
        <div className="flex items-center gap-3 mb-3 text-white">
          <Avatar
            src={reel.userAvatar}
            alt={reel.username}
            fallback={reel.username[0]}
            className="h-10 w-10 border-2 border-primary"
          />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">
              {reel.username}
              <p className="text-xs text-muted-foreground text-white">♪ {reel.music}</p>
            </span>
            <Button variant="outline" size="sm" className="h-7 px-4 text-xs text-white">
              Follow
            </Button>
          </div>
        </div>
        <p className="text-sm mb-2 text-white">{reel.description}</p>
      </div>

      <div className="absolute bottom-20 right-4 md:hidden flex flex-col gap-6 z-20">
        <ReelActions isMobile={true} />
      </div>
    </div>
  );
};

/* -------------------- COMPONENT 3: MAIN REELS WRAPPER -------------------- */
const ReelsWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [scrollCooldown, setScrollCooldown] = useState(false);

  const currentReel = mockReels[currentIndex];
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setIsPlaying(true);
    setShowComments(false);
  }, [currentIndex]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.play().catch(() => {});
      } else {
        currentVideo.pause();
      }
    }
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex) {
        video?.pause();
      }
    });
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    const root = document.documentElement;
    const prevOverscroll = root.style.overscrollBehaviorY;
    root.style.overscrollBehaviorY = "none";
    return () => {
      root.style.overscrollBehaviorY = prevOverscroll;
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollCooldown) return;

      setScrollCooldown(true);
      setTimeout(() => setScrollCooldown(false), 500);

      if (e.deltaY > 0) {
        if (currentIndex < mockReels.length - 1) setCurrentIndex(currentIndex + 1);
      } else if (e.deltaY < 0) {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex, scrollCooldown]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        if (currentIndex < mockReels.length - 1) setCurrentIndex(currentIndex + 1);
      } else if (e.key === "ArrowUp") {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;
    const threshold = 100;
    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (deltaY < 0 && currentIndex < mockReels.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
    setTouchStartY(null);
  };

  const DesktopActions = () => (
    <div className="flex flex-col gap-6">
      <button onClick={() => setIsLiked(!isLiked)} className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <Heart className={`h-7 w-7 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-foreground"}`} />
        <span className="text-xs font-semibold">{currentReel.likes}</span>
      </button>
      <button onClick={() => setShowComments(!showComments)} className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <MessageCircle className="h-7 w-7" />
        <span className="text-xs font-semibold">{currentReel.comments.length}</span>
      </button>
      <button className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <SendIcon />
      </button>
      <button onClick={() => setIsSaved(!isSaved)} className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <Bookmark className={`h-7 w-7 transition-colors ${isSaved ? "fill-black text-black" : "text-foreground"}`} />
      </button>
      <button className="flex flex-col items-center gap-1 transition-all hover:scale-110">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  );

  return (
    <div className="relative h-full w-full flex justify-center bg-background pb-14 md:pb-0">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div
          className="relative w-full h-full md:w-[370px] md:h-[92vh] bg-card overflow-hidden shadow-2xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex flex-col h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            {mockReels.map((reel, index) => (
              <SingleReel
                key={reel.id}
                reel={reel}
                videoRef={(el) => {
                  videoRefs.current[index] = el;
                }}
                isMuted={isMuted}
                isLiked={isLiked}
                isSaved={isSaved}
                onMuteToggle={() => setIsMuted(!isMuted)}
                onVideoClick={() => setIsPlaying((prev) => !prev)}
                onLike={() => setIsLiked(!isLiked)}
                onComment={() => setShowComments(!showComments)}
                onSave={() => setIsSaved(!isSaved)}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-6 justify-end h-[92vh]">
          <DesktopActions />
        </div>
      </div>

      <CommentsSection
        comments={currentReel.comments}
        isVisible={showComments}
        onClose={() => setShowComments(false)}
      />
    </div>
  );
};

export default ReelsWrapper;