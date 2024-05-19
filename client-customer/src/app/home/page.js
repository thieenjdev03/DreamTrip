"use client";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import peopleHero from "../../../public/peopleHero.png";
import downloadAppBanner from "../../../public/downloadAppBanner.png";
import ServicesSection from "../../components/Homepage/servicesSection";
import SuggestLocationList from "../../components/Homepage/suggestLocationList";
import ForeignTravel from "@/components/Homepage/ForeignTravel";
function page(props) {
  return (
    <div className="wrapper flex flex-col gap-10 justify-center items-center">
      <Header></Header>
      <div className="BannerLandingPage max-h-[680px] flex flex-row justify-center items-center px-20 w-11/12 ">
        <div className="BannerLandingPage_Left flex flex-col gap-4 w-3/5 h-full">
          <div className="Left_textSection  min-h-[220px]">
            <div className="textSection_PrimaryText">
              Turn Your Dream Come To Real Trip
            </div>
            <div className="textSection_SubText">
              Biến những chuyến đi ngỡ chỉ có trong mơ thành chuyến đi thực tế
            </div>
          </div>
          <div className="Left_EmailFormSection flex flex-col gap-3">
            <label className="EmailVoucherLabel" htmlFor="EmailVoucher ">
              Nhận thông báo mới nhất từ chúng tôi :
            </label>
            <div className="flex gap-2">
              <input
                className="EmailVoucherInput px-2"
                type="text"
                name="EmailVoucher"
                id="EmailVoucher"
                placeholder="Email của bạn"
              />
              <button className="p-2 PrimaryButton">
                <span>Xác Nhận</span>
              </button>
            </div>
          </div>
          <div className="DownloadAppButton">
            <Image
              src={downloadAppBanner}
              width={350}
              height={60}
              alt=""
            ></Image>
          </div>
        </div>
        <div className="BannerLandingPage_Right w-2/5 h-full flex justify-end items-end">
          <div className="BgHero">
            <Image
              className="HeroSection"
              src={peopleHero}
              width={500}
              height={500}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
      <ServicesSection></ServicesSection>
      <SuggestLocationList></SuggestLocationList>
      <ForeignTravel></ForeignTravel>
    </div>
  );
}

export default page;
