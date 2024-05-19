import React from "react";
import Image from "next/image";
function ForeignTravel(props) {
  const locationList = [
    {
      id: 1,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 2,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 3,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 4,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 5,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 6,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
    {
      id: 7,
      name: "Hòn Chồng Nha Trang",
      day: "Ngày 1 - 01/07/2024",
      counterPlace: "4 địa điểm tham quan",
      pricePerDay: "2.599.000đ / Ngày",
      imageUrl: "/ForeignTravelPict.png",
    },
  ];

  return (
    <div className="flex gap-4 w-11/12 items-center justify-center flex-col">
      <div className="flex">
        {locationList.map((locationItem, key) => {
          if (key < 3) {
            return (
              <div className="ForeignTravel flex flex-col rounded-2xl h-full">
                <Image
                  src={locationItem.imageUrl}
                  width={344}
                  height={240}
                  alt=""
                ></Image>
              </div>
            );
          }
        })}
      </div>
      <div className="flex">
        {locationList.map((locationItem, key) => {
          if (key > 3 && key < 7) {
            return (
              <div className="ForeignTravel flex flex-col rounded-2xl h-full">
                <Image
                  src={locationItem.imageUrl}
                  width={344}
                  height={240}
                  alt=""
                ></Image>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ForeignTravel;
