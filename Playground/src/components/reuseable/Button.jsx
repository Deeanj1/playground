import React from "react";

const Button = ({ title, bgColor, textColor }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
        }}
        className=" py-3 px-[21px] bg-amber-500 m-10 hover:bg-amber-600"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;