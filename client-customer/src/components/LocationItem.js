import React from "react";
import Image from "next/image";
function LocationItem(props) {
  const locationList = [
    {
      id: 1,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/Day1_Image.png",
    },
    {
      id: 2,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/Day1_Image.png",
    },
    {
      id: 3,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/Day1_Image.png",
    },
    {
      id: 4,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/Day1_Image.png",
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-center">
      {locationList.map((locationItem) => {
        return (
          <div className="LocationItem flex flex-col rounded-2xl h-full px-2">
            <Image
              src={locationItem.imageUrl}
              width={264}
              height={180}
              alt=""
            ></Image>
            <div className="textSection  px-2">
              <div className="Item_LocationOnMap">
                <i>+</i>
                <span>{locationItem.name}</span>
              </div>
              <div className="Item_Location_Day1_title">{locationItem.day}</div>
              <div className="Item_Location_Day1_CounterPlace">
                {locationItem.counterPlace}
              </div>
              <div className="Item_Location_Day1_PricePerDay">
                {locationItem.pricePerDay}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LocationItem;
