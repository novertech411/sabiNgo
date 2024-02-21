import Image from "next/image";
import Event from "@/public/images/event.png";

function EvenCards() {
  return (
    <div className=" flex max-w-[650px] gap-2 max-h-[121px] rounded-lg shadow-md ">
      <Image className=" rounded-l-lg w-[121px]" src={Event} alt="" />
      <div className=" flex items-center py-4">
        <div className=" px-9 ">
          <h1 className="  mb-2 font-[600] text-[15px]">
            {" "}
            Use Hashtags To Support Online
          </h1>

          <p className="text-[14px]">
            JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM
          </p>
        </div>{" "}
        <div className="border-l-2 border-[#D0D0D0] px-9  ">
          {" "}
          <h1 className=" mb-2 font-[600] text-[15px]"> Event Location</h1>
          <p className="text-[14px]">Mitchell, 57301 United States</p>
        </div>
      </div>
    </div>
  );
}

export default EvenCards;
