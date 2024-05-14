import React from "react";
import "../styles/main.css";

function Header(props) {
  return (
    <div className="w-full h-28 flex justify-center items-center">
      <div className="Header h-14 flex flex-row gap-6">
        <div className="Header_Logo w-44 text-blue-800 font-bold	">
          DreamTrip
        </div>
        <div className="Header_NavBar flex flex-row w-full rounded-xl gap-14 justify-center items-center">
          <a className="Header_NavItem">Trang Chủ</a>
          <a className="Header_NavItem">Liên Hệ</a>
          <a className="Header_NavItem">Về Chúng Tôi</a>
          <a className="Header_NavItem">Tạo Lộ Trình</a>
          <a className="Header_NavItem">Ưu Đãi</a>
        </div>
        <div className="Header_AuthSection">
          <button className="PrimaryButton p-2 rounded-lg text-white">
            Đăng Nhập / Đăng Ký
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
