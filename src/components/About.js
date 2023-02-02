import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265033/Personal%20Portfolio%202/about-1_rqcvgh.jpg",
  img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/about-2_nmk24z.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p>
            I am a MERN stack developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my in-depth knowledge of the latest web development
            technologies and frameworks, I am able to create innovative
            solutions that meet the needs of my clients. Whether it's a simple
            website or a complex web application, I am committed to delivering
            high-quality work that exceeds expectations.
          </p>
          <p className="mt-10">
            In addition to my expertise in the MERN stack, I also have a strong
            background in UI design and animation. I am skilled in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
            I am also well-versed in using other design tools such as Adobe XD
            and Figma to create wireframes and mockups.
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
