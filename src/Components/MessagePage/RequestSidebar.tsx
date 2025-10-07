import { ArrowLeft, ChevronRight } from "lucide-react";
import { HiddenIcon1 } from "../../assets/icon";
import { useNavigate } from "react-router";

const RequestSidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row gap-5 px-6 py-5 items-center">
       <span className="cursor-pointer" onClick={() => navigate(-1)}> <ArrowLeft /></span>
        <h3 className="text-2xl font-semibold">Message requests</h3>
      </div>
      <div onClick={() => navigate("/messages/requests/hidden")} className="hover:bg-[#f5f5f5] flex flex-row justify-between py-2 items-center px-6">
        <div  className="flex flex-row gap-3 items-center">
          <div className="w-14 h-14 items-center flex justify-center rounded-full bg-[#eaeaea]"><HiddenIcon1/></div>
          <h3 className="text-sm font-[400]">Hidden Requests</h3>
        </div>
        <ChevronRight strokeWidth="1"/>
      </div>
    </div>
  );
};

export default RequestSidebar;
