import React from "react";
import Image from "next/image";
function LocationItem() {
  const locationList = [
    {
      id: 1,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/Day1_Image.jpg",
    },
    {
      id: 2,
      name: "Tháp Bà Ponagar",
      day: "Ngày 2 - 02/07/2024",
      counterPlace: "3 địa điểm tham quan",
      pricePerDay: "2.199.000đ / Ngày",
      imageUrl: "/Day2_Image.jpg",
    },
    {
      id: 3,
      name: "Vinpearl Land Nha Trang",
      day: "Ngày 3 - 03/07/2024",
      counterPlace: "5 địa điểm tham quan",
      pricePerDay: "3.299.000đ / Ngày",
      imageUrl: "/Day3_Image.jpg",
    },
    {
      id: 4,
      name: "Dốc Lết Ninh Hòa",
      day: "Ngày 4 - 04/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.799.000đ / Ngày",
      imageUrl: "/Day4_Image.jpg",
    },
  ];

  return (
    <div className="flex gap-4 w-[96%] items-center justify-center">
      {locationList.map((locationItem, key) => {
        if (key < 4) {
          return (
            <div className="LocationItem w-1/4 flex flex-col rounded-2xl h-full">
              <Image
                src={locationItem.imageUrl}
                width={300}
                height={190}
                alt=""
              ></Image>
              <div className="textSection px-4 flex flex-col gap-1 mt-2">
                <div className="Item_LocationOnMap">
                  <i>+</i>
                  <span>{locationItem.name}</span>
                </div>
                <div className="Item_Location_Day1_title">
                  {locationItem.day}
                </div>
                <div className="Item_Location_Day1_CounterPlace">
                  {locationItem.counterPlace}
                </div>
                <div className="Item_Location_Day1_PricePerDay">
                  {locationItem.pricePerDay}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default LocationItem;
