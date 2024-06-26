import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyEmail = "info@abccompany.com";
  return (
    <footer className="py-8 px-4 sm:px-6 md:px-8 text-gray-300 bg-[#1B3764]">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-center text-white sm:text-left">
            LMS
          </h1>
          <div className="flex justify-center my-6 sm:justify-start">
            <a className="mr-4 hover:text-slate-400">
              <FaFacebookSquare size={30} />
            </a>
            <a className="mr-4 hover:text-slate-400">
              <FaInstagram size={30} />
            </a>
            <a className="mr-4 hover:text-slate-400">
              <FaTwitterSquare size={30} />
            </a>
            <a className="mr-4 hover:text-slate-400">
              <FaGithubSquare size={30} />
            </a>
          </div>
          <p className="text-sm">
            Hoà Lạc, Hà Nội. Công Ty Cổ Phần Phát Hành Sách LMS
            <br />
            LMS.com không hỗ trợ
            đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ
            Thống LMS trên toàn quốc.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-sm">
            <h6 className="text-2xl font-bold text-white">DỊCH VỤ</h6>
            <ul className="mt-4 text-gray-400">
              <li className="py-2">
                <Link to="/condition">Điều khoản sử dụng</Link>
              </li>
              <li className="py-2">
                <Link to="/policy">Chính sách bảo mật thông tin cá nhân</Link>
              </li>
              <li className="py-2">
                <Link to="/about">Giới thiệu LMS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm">
            <h6 className="text-2xl font-bold text-white">HỖ TRỢ</h6>
            <ul className="mt-4 text-gray-400">
              <li className="py-2">
                <Link to="/returnPolicy">Chính sách đổi - trả - hoàn tiền</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm">
            <h6 className="text-2xl font-bold text-white">LIÊN HỆ</h6>
            <ul className="mt-4 text-gray-400">
              <p className="py-2">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
              </p>
              <li className="py-2">Điện thoại: (+84) 123 456 789</li>
              <li className="py-2">Địa chỉ: Hoà Lạc, Hà Nội</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
