import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/hero-1_wqyjkt.jpg",
  img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/hero-2_k6gwhp.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
