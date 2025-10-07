
import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router";
const HiddenRequest = () => {
   const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row gap-5 px-6 py-5 items-center">
       <span className="cursor-pointer" onClick={() => navigate(-1)}> <ArrowLeft /></span>
        <h3 className="text-2xl font-semibold">Hidden requests</h3>
      </div>
     
    </div>
  )
}

export default HiddenRequest