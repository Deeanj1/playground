import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-amber-200 w-80 h-40 p-5 m-7">
      <h2 className=" text-2xl">
        Name: {props.username} {props.lastname}{" "}
      </h2>
      <img src={props.myimage} alt="" />
      <i>Email: {props.email}</i>
      <p>Address: {props.address}</p>
    </div>
  );
};

export default Card;