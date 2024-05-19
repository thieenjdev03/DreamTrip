import React from "react";
import Image from "next/image";
import LocationItem from "./LocationItem";
function suggestLocationList(props) {
  return (
    <div className="suggestLocationList flex flex-col gap-4 px-12 w-[75%]">
      <div className=" suggestLocationList_textSection flex flex-col">
        <div className="suggestLocationList_title">Đề Xuất Lộ Trình</div>
        <div className="suggestLocationList_subTitle">
          Lộ trình có thể bạn sẽ thích tại Việt Nam.
        </div>
      </div>
      <div className="LocationList flex">
        <div className="flex rounded-3xl py-3 MainShadowBox justify-center items-center bg-white">
          <LocationItem></LocationItem>
        </div>
      </div>
    </div>
  );
}

export default suggestLocationList;
