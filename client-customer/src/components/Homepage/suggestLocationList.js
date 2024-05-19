import React from "react";
import Image from "next/image";
import LocationItem from "./LocationItem";
function suggestLocationList(props) {
  return (
    <div className="suggestLocationList px-12">
      <div className="suggestLocationList_textSection flex flex-col">
        <div className="suggestLocationList_title">Đề Xuất Lộ Trình</div>
        <div className="suggestLocationList_subTitle">
          Lộ trình có thể bạn sẽ thích tại Việt Nam.
        </div>
      </div>
      <div className="LocationList  justify-center flex  py-6">
        <div className="flex min-w-[75%] rounded-3xl py-5 MainShadowBox justify-center items-center bg-white">
          <LocationItem></LocationItem>
        </div>
      </div>
    </div>
  );
}

export default suggestLocationList;
