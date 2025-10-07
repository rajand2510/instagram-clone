import { useState } from "react";
import {
  Heart,
  Image,
  Mic,
  Smile,
  Sticker,
  MoreVertical,
  CornerUpLeft,
} from "lucide-react";
import { useParams } from "react-router-dom";

import { suggestedPeople } from "../../Data/suggestedPeople";
import { CallIcon, InfoIcon, VideoIcon } from "../../assets/icon";
interface ChatMessageProps {
  text: string;
  fromMe: boolean;
  showProfile?: boolean;
  reactions?: string[];
  profilePic?: string;
  onAddReaction: (emoji: string) => void;
}

interface ChatMessageProps {
  text: string;
  fromMe: boolean;
  showProfile?: boolean;
  reactions?: string[];
  profilePic?: string;
  onAddReaction: (emoji: string) => void;
  isPickerOpen: boolean;
  onTogglePicker: () => void;
}

export const ChatMessage = ({
  text,
  fromMe,
  showProfile = true,
  reactions = [],
  profilePic,
  onAddReaction,
  isPickerOpen,
  onTogglePicker,
}: ChatMessageProps) => {
  const availableReactions = ["❤️", "😂", "😮", "😢", "😡", "👍"];

  const handleReactionClick = (emoji: string) => {
    onAddReaction(emoji);
    onTogglePicker();
  };

  return (
    <div className="my-1">
      <div
        className={`flex items-end group relative ${
          fromMe ? "justify-end" : "justify-start"
        }`}
      >
        {!fromMe && showProfile && (
          <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0 mr-2 mb-1 overflow-hidden">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {!fromMe && !showProfile && <div className="w-7 mr-2" />}

        <div className="flex flex-col max-w-lg">
          <div
            className={`flex items-center ${
              fromMe ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className={`relative ${reactions.length > 0 ? "mb-2" : ""}`}>
              <div
                className={`px-4 py-[7px] rounded-2xl text-[15px] ${
                  fromMe
                    ? "bg-blue-500 text-white rounded-br-md"
                    : "bg-[#efefef] text-black rounded-bl-md"
                }`}
              >
                {text}
              </div>

              {reactions.length > 0 && (
                <div
                  className={`absolute -bottom-[14px] ${
                    fromMe ? "right-1" : "left-1"
                  } flex items-center bg-[#efefef] border-2 border-white rounded-full px-2 py-0.5`}
                >
                  <span className="text-sm leading-none">{reactions[0]}</span>
                </div>
              )}

              {isPickerOpen && (
                <div
                  className={`absolute ${
                    fromMe ? "right-0" : "left-0"
                  } -top-12 bg-white  rounded-full shadow-[0_0_6px_2px_rgba(0,0,0,0.1)] px-3 py-2 flex items-center space-x-0 z-10`}
                >
                  {availableReactions.map((emoji, idx) => (
                    <button
                      key={idx}
                      className="text-3xl  hover:scale-125 transition-transform leading-none"
                      onClick={() => handleReactionClick(emoji)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity ${
                fromMe ? "mr-2" : "ml-2"
              }`}
            >
              <button
                className="hover:bg-gray-100 rounded p-0.5"
                onClick={onTogglePicker}
              >
                <Smile className="w-4 h-4 text-gray-600" />
              </button>
              <button className="hover:bg-gray-100 rounded p-0.5">
                <CornerUpLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="hover:bg-gray-100 rounded p-0.5">
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChatDateDividerProps {
  text: string;
}

export const ChatDateDivider = ({ text }: ChatDateDividerProps) => (
  <div className="flex items-center justify-center my-4">
    <div className="flex justify-center items-center w-full">
      <span className="mx-3 font-semibold text-xs text-gray-500 whitespace-nowrap">
        {text}
      </span>
    </div>
  </div>
);

interface Message {
  text: string;
  fromMe: boolean;
  reactions?: string[];
  id: number;
}

const Text = () => {
  const [openReactionPickerId, setOpenReactionPickerId] = useState<
    number | null
  >(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello 👋", fromMe: false, reactions: [], id: 1 },
    { text: "How are you?", fromMe: false, reactions: [], id: 2 },
    { text: "Hi there!", fromMe: true, reactions: [], id: 3 },
    { text: "Hello 👋", fromMe: false, reactions: [], id: 4 },
    { text: "How are you?", fromMe: false, reactions: [], id: 5 },
  ]);
  const [focused, setFocused] = useState(false);
  const { id } = useParams<{ id: string }>();
  const user = suggestedPeople.find((u) => u.id === Number(id));

  if (!user)
    return (
      <div className="flex h-full justify-center items-center">
        Instagram User{" "}
      </div>
    );
  const handleAddReaction = (messageId: number, emoji: string) => {
    setMessages(
      messages.map((msg) => {
        if (msg.id === messageId) {
          // Replace previous reaction with new one
          return { ...msg, reactions: [emoji] };
        }
        return msg;
      })
    );
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      {
        text: message,
        fromMe: true,
        reactions: [],
        id: messages.length + 1,
      },
    ]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Determine if profile should be shown (only on first message or after sender change)
  const shouldShowProfile = (index: number) => {
    if (messages[index].fromMe) return false;
    if (index === 0) return true;
    return messages[index - 1].fromMe !== messages[index].fromMe;
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      {/* Header */}
      <div className="flex flex-row justify-between border-b border-gray-200 items-center py-2 px-5">
        <div className="pr-7 py-2 flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img
              className="w-12 h-12 rounded-full border-gray-200 border-2"
              src={user.profilePic}
              alt={user.username}
            />
            <span className="flex flex-col pl-3 justify-center">
              <h5 className="text-sm font-semibold">{user.fullName}</h5>
              <h5 className="text-xs text-gray-400">{user.lastActive}</h5>
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button className="hover:opacity-70">
            <CallIcon />
          </button>
          <button className="hover:opacity-70">
            <VideoIcon />
          </button>

          <button className="hover:opacity-70">
            <InfoIcon />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col justify-between flex-1 overflow-y-auto px-5 py-3">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            className="w-24 h-24 rounded-full border-gray-200 border-2"
            src={user.profilePic}
            alt={user.username}
          />
          <span className="flex flex-col">
            <h5 className="uppercase text-lg font-semibold pt-2">
              {user.fullName}
            </h5>
            <h5 className="text-sm text-gray-500">
              {user.username} ⋅ Instagram
            </h5>
          </span>
          <button className="text-sm mt-5 bg-[#f0f2f5] font-semibold rounded-lg px-3 py-[6px] hover:bg-gray-300">
            View profile
          </button>
        </div>

        {/* Messages */}
        <div className="flex flex-col">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={msg.id}
              text={msg.text}
              fromMe={msg.fromMe}
              showProfile={shouldShowProfile(idx)}
              reactions={msg.reactions}
              profilePic={user.profilePic}
              onAddReaction={(emoji) => handleAddReaction(msg.id, emoji)}
              isPickerOpen={openReactionPickerId === msg.id}
              onTogglePicker={() =>
                setOpenReactionPickerId(
                  openReactionPickerId === msg.id ? null : msg.id
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full px-5 py-4">
          <div className="flex items-center border border-gray-200 rounded-full px-3 py-2 transition-all">
            <Smile className="w-6 h-6 mr-2 cursor-pointer hover:opacity-70" />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyPress}
              rows={1}
            />
            {focused && message.trim().length > 0 ? (
              <button
                className="text-blue-700 text-sm font-semibold px-2 hover:text-blue-800"
                onMouseDown={(e) => e.preventDefault()} // <– keeps focus on textarea
                onClick={handleSendMessage}
              >
                Send
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <Mic className="w-6 h-6 cursor-pointer hover:opacity-70" />
                <Image className="w-6 h-6 cursor-pointer hover:opacity-70" />
                <Sticker className="w-6 h-6 cursor-pointer hover:opacity-70" />
                <Heart className="w-6 h-6 cursor-pointer hover:opacity-70" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
