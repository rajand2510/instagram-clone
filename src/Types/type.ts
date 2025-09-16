export type NotificationProps = {
  /** function to close the mobile notifications */
  closeMobileNotifications: () => void;
};

// types.ts
// Types/type.ts
export type Post = {
  id: number;
  user: {
    username: string;
    avatar: string;
  };
  timeAgo: string;
  imageUrl?: string;   // make image optional
  videoUrl?: string;   // new optional field
  likes: number;
  caption: string;
};

// types.ts
export interface SuggestedPerson {
  id: number;
  username: string;
  fullName: string;
  profilePic: string;
  isFollowing: boolean;
}
