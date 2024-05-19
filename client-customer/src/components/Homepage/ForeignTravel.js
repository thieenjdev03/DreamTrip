import React from "react";
import Image from "next/image";
function ForeignTravel(props) {
  const locationList = [
    {
      id: 1,
      countryName: "Việt Nam",
      counterPlace: 10000,
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 2,
      countryName: "Thái Lan",
      counterPlace: 8500,
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 3,
      countryName: "Nhật Bản",
      counterPlace: 15000,
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 4,
      countryName: "Hàn Quốc",
      counterPlace: 12000,
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 5,
      countryName: "Pháp",
      counterPlace: 14000,
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 6,
      countryName: "Úc",
      counterPlace: 9000,
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 7,
      countryName: "Hoa Kỳ",
      counterPlace: 16000,
      imageUrl: "/ForeignTravelPict.png",
    },
  ];

  function formatNumber(number) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(number);
  }
  return (
    <div className="flex flex-col w-[75%] gap-4 px-12">
      <div>
        <div className=" suggestLocationList_textSection flex flex-col">
          <div className="suggestLocationList_title">Du Lịch Quốc Tế</div>
          <div className="suggestLocationList_subTitle">
            Du lịch quốc tế có thể bạn sẽ thích.
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-11/12 items-center justify-center flex-col">
        <div className="flex">
          {locationList.map((locationItem, key) => {
            if (key < 3) {
              return (
                <div className="ForeignTravel flex flex-col rounded-2xl h-full">
                  <div className="ImageContainer relative">
                    <Image
                      src={locationItem.imageUrl}
                      width={344}
                      height={240}
                      alt=""
                    ></Image>
                    <div className="textSection absolute top-8 left-12 flex flex-col text-white font-bold 	">
                      <span className="text-4xl countryName drop-shadow-lg">
                        {locationItem.countryName}
                      </span>
                      <span className="counterPlace text-l drop-shadow-lg">
                        {formatNumber(locationItem.counterPlace)} địa điểm tham
                        quan
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex">
          {locationList.map((locationItem, key) => {
            if (key >= 3 && key < 6) {
              return (
                <div className="ForeignTravel flex flex-col rounded-2xl h-full">
                  <div className="ImageContainer relative">
                    <Image
                      src={locationItem.imageUrl}
                      width={344}
                      height={240}
                      alt=""
                    ></Image>
                    <div className="textSection absolute top-8 left-12 flex flex-col text-white font-bold 	">
                      <span className="text-4xl countryName drop-shadow-lg">
                        {locationItem.countryName}
                      </span>
                      <span className="counterPlace text-l drop-shadow-lg">
                        {locationItem.counterPlace} địa điểm tham quan
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ForeignTravel;
