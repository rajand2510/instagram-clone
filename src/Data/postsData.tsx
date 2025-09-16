// postsData.ts
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
    caption:
      "India and Israel have signed a historic Bilateral Investment Agreement (BIA) in New Delhi. The pact, signed by Finance Minister Nirmala Sitharaman and Israel’s Finance Minister Bezalel Smotrich, aims to boost trade, safeguard investments, ensure transparency, and provide investor protection with an independent dispute resolution mechanism.",
  },
  {
    id: 2,
    user: {
      username: "tech.videos",
      avatar: "https://i.pravatar.cc/64?img=11",
    },
    timeAgo: "2h",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // sample mp4
    likes: 1120,
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
    caption:
      "Massive afforestation drive begins in the Amazon region with volunteers planting over a million trees in just two weeks. A step toward combating climate change and restoring biodiversity.",
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
    caption:
      "Historic moment in football as an underdog team wins the international championship for the first time. Fans across the globe celebrate the stunning upset.",
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
    caption:
      "Minimalist interior design trend continues to dominate 2025. Designers highlight sustainable materials and multipurpose furniture as key elements of the movement",
  },
];
