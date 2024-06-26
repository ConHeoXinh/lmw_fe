import React from "react";

const TitlePage = ({ title, rightComponent, ...props }) => {
  return (
    <>
      <div className="flex flex justify-between items-center mb-[40px] mt-[10px] ">
        <h3 className="font-bold text-xl">{title}</h3>
        {rightComponent}
      </div>
    </>
  );
};

export default TitlePage;
