import React from "react";
import { navLinks } from "../constants";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, linkId, btnText }) => {
  const linkObject = navLinks.find((link) => link.id === linkId);

  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <a href={linkObject ? `#${linkObject.id}` : "/"} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" alt="arrow" />
      </a>
    </div>
  );
};

const HomeInfo = ({ currentStage }) => {
  const renderContent = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am<span className="font-semibold">Vishwa</span> 👋
        <br />
        A Software Engineer from Sri Lanka
      </h1>
    ),
    2: (
      <InfoBox
        text="Undergraduate Software Engineer at SLIIT Faculty of Computing"
        linkId="about"
        btnText="Learn more about me"
      />
    ),
    3: (
      <InfoBox
        text="Led multiple projects to success over the years. Curious about the impact?"
        linkId="work"
        btnText="Visit my portfolio"
      />
    ),
    4: (
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        linkId="contact"
        btnText="Let's talk"
      />
    ),
  };

  return <div>{renderContent[currentStage]}</div>;
};

export default HomeInfo;
