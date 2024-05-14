import React from "react";
import Image from "next/image";
import Day1_Image from "../../public/Day1_Image.png";
import LocationItem from "./LocationItem";
function suggestLocationList(props) {
  return (
    <div className="suggestLocationList px-12">
      <div className="suggestLocationList_title">Đề Xuất Lộ Trình</div>
      <div className="suggestLocationList_subTitle">
        Lộ trình có thể bạn sẽ thích tại Việt Nam.
      </div>
      <div className="LocationList w-full flex justify-center items-center py-6 bg-white">
        <div className="flex w-full ">
          <LocationItem></LocationItem>
        </div>
      </div>
    </div>
  );
}

export default suggestLocationList;
