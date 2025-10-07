// mockReelsWithComments.ts
export const mockReels = [
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
