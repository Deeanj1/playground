import React from "react";
import Username from "../reuseable/Username";
import Age from "../reuseable/Age";
import Card from "../reuseable/Card";
import myReact from "../../assets/react.svg";
import Button from "../reuseable/Button";

const Hero = () => {
  return (
    <div>
      <h1>This is the hero</h1>
      <Button title="Sign In" />
      <Button
        title="Create Free Account"
        bgColor="#123456"
        textColor="#ffffff"
      />
      <Username name="James" />
      <Age myAge={23} />
      <div className=" flex">
        <Card
          username="Jide"
          myimage={myReact}
          lastname="Kosoko"
          email="jide@gmail.com"
          address="John Bolu street Ikorodu"
        />
        <Card
          username="Shade"
          email="shade@gmail.com"
          address="Garage street Ikorodu"
        />
        <Card
          username="Williams"
          email="willi@gmail.com"
          address="Ikulanberu Street Ajegunle"
        />
      </div>
    </div>
  );
};

export default Hero;
