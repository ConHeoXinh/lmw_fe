import React from "react";
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">
          Xin lỗi chúng tôi không tìm thấy nội dung mà bạn cần
        </p>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundComponent;
