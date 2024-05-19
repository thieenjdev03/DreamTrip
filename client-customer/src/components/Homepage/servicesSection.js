import React, { useEffect, useState } from "react";
import Image from "next/image";
import topBackgroundServicesContent from "../../../public/topBackgroundServicesContent.png";
function ServicesSection(props) {
  const [serviceSelected, setServiceSelected] = useState("SuggestTrip");
  return (
    <div>
      <div className="MainServicesContent">
        <div className="topMainServicesContent relative w-full flex justify-center">
          <Image
            src={topBackgroundServicesContent}
            width={996}
            height={100}
            alt=""
          ></Image>
          <div className="topContent_Heading absolute top-1 font-bold text-xl">
            Dịch Vụ Có Sẵn
          </div>
          <div className="ServicesOption absolute top-10 flex gap-4">
            <button
              onClick={() => {
                setServiceSelected("SuggestTrip");
              }}
              className="serviceItem  min-h[118px] bg-white px-4 py-2 rounded-3xl flex justify-center items-center gap-2"
            >
              <i>+</i>
              <span>Gợi Ý Lịch Trình</span>
            </button>
            <button
              onClick={() => {
                setServiceSelected("BuyPlaneTicket");
              }}
              className="serviceItem  min-h[118px] bg-white px-4 py-2 rounded-3xl flex justify-center items-center gap-2"
            >
              <i>+</i>
              <span>Vé Máy Bay</span>
            </button>
            <button
              onClick={() => {
                setServiceSelected("BuyCarTicket");
              }}
              className="serviceItem  min-h[118px] bg-white px-4 py-2 rounded-3xl flex justify-center items-center gap-2"
            >
              <i>+</i>
              <span>Vé Xe Khách</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
