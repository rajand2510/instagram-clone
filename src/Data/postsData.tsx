import { Post } from "../Types/type";

export const posts: Post[] = [
  {
    id: 1,
    user: {
      username: "startup.decoding",
      avatar: "https://i.pravatar.cc/64?img=10",
    },
    timeAgo: "1d",
    imageUrl:
      "https://images.unsplash.com/photo-1757452608866-0b9c2f3e2d6b?q=80&w=687&auto=format&fit=crop",
    likes: 725,
    comments: 140,
    caption:
      "India and Israel have signed a historic Bilateral Investment Agreement (BIA) in New Delhi...",
  },
  {
    id: 2,
    user: {
      username: "tech.videos",
      avatar: "https://i.pravatar.cc/64?img=11",
    },
    timeAgo: "2h",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 1120,
    comments: 78,
    caption:
      "Check out this quick video demo of our new product in action! 🚀",
  },
  {
    id: 3,
    user: {
      username: "green.planet",
      avatar: "https://i.pravatar.cc/64?img=15",
    },
    timeAgo: "5h",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=687&auto=format&fit=crop",
    likes: 980,
    comments: 256,
    caption:
      "Massive afforestation drive begins in the Amazon region with volunteers...",
  },
  {
    id: 4,
    user: {
      username: "world.sports",
      avatar: "https://i.pravatar.cc/64?img=20",
    },
    timeAgo: "8h",
    imageUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=687&auto=format&fit=crop",
    likes: 2300,
    comments: 520,
    caption:
      "Historic moment in football as an underdog team wins the international championship...",
  },
  {
    id: 5,
    user: {
      username: "design.daily",
      avatar: "https://i.pravatar.cc/64?img=25",
    },
    timeAgo: "12h",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=687&auto=format&fit=crop",
    likes: 430,
    comments: 63,
    caption:
      "Minimalist interior design trend continues to dominate 2025...",
  },

  // 👇 extra 10 posts
  {
    id: 6,
    user: {
      username: "travel.junkie",
      avatar: "https://i.pravatar.cc/64?img=30",
    },
    timeAgo: "3h",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 780,
    comments: 102,
    caption: "Sunrise time-lapse over the Himalayas 🏔️",
  },
  {
    id: 7,
    user: {
      username: "food.lovers",
      avatar: "https://i.pravatar.cc/64?img=31",
    },
    timeAgo: "6h",
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=687&auto=format&fit=crop",
    likes: 1450,
    comments: 305,
    caption: "Delicious Italian pasta freshly cooked 🍝",
  },
  {
    id: 8,
    user: {
      username: "urban.explorer",
      avatar: "https://i.pravatar.cc/64?img=32",
    },
    timeAgo: "10h",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 560,
    comments: 88,
    caption: "Exploring abandoned subway tunnels 🚇",
  },
  {
    id: 9,
    user: {
      username: "art.gallery",
      avatar: "https://i.pravatar.cc/64?img=33",
    },
    timeAgo: "15h",
    imageUrl:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=687&auto=format&fit=crop",
    likes: 1920,
    comments: 421,
    caption: "New modern art installation in downtown 🎨",
  },
  {
    id: 10,
    user: {
      username: "fitness.freak",
      avatar: "https://i.pravatar.cc/64?img=34",
    },
    timeAgo: "1d",
    imageUrl:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=687&auto=format&fit=crop",
    likes: 870,
    comments: 189,
    caption: "Morning workout vibes at the beach 🏖️💪",
  },
  {
    id: 11,
    user: {
      username: "tech.reviews",
      avatar: "https://i.pravatar.cc/64?img=35",
    },
    timeAgo: "2d",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 1320,
    comments: 254,
    caption: "Hands-on with the latest smartphone 🔥",
  },
  {
    id: 12,
    user: {
      username: "nature.wonders",
      avatar: "https://i.pravatar.cc/64?img=36",
    },
    timeAgo: "3d",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=687&auto=format&fit=crop",
    likes: 2180,
    comments: 507,
    caption: "Misty forests after the rain 🌳☔",
  },
  {
    id: 13,
    user: {
      username: "music.vibes",
      avatar: "https://i.pravatar.cc/64?img=37",
    },
    timeAgo: "4d",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 990,
    comments: 177,
    caption: "Behind the scenes at the music festival 🎶",
  },
  {
    id: 14,
    user: {
      username: "pet.world",
      avatar: "https://i.pravatar.cc/64?img=38",
    },
    timeAgo: "5d",
    imageUrl:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=687&auto=format&fit=crop",
    likes: 3100,
    comments: 640,
    caption: "Cutest puppies at the shelter 🐶",
  },
  {
    id: 15,
    user: {
      username: "cinema.clips",
      avatar: "https://i.pravatar.cc/64?img=39",
    },
    timeAgo: "6d",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    likes: 860,
    comments: 130,
    caption: "A sneak peek of our upcoming short film 🎬",
  },
];
