export type NotificationProps = {
  /** function to close the mobile notifications */
  closeMobileNotifications: () => void;
};

// types.ts
// Types/type.ts
export interface Post {
  id: number;
  user: {
    username: string;
    avatar: string;
  };
  timeAgo: string;
  imageUrl?: string;
  videoUrl?: string;
  likes: number;
  comments: number; // 👈 new
  caption: string;
}


// types.ts
export interface SuggestedPerson {
  id: number;
  username: string;
  fullName: string;
  profilePic: string;
  isFollowing: boolean;
    lastActive?: string; 
}

// Types/type.ts
export interface Reel {
  id: number;
  videoUrl: string;
  thumbnail: string;
  views: number;     
  likes: number;     
  comments: number;  
}
