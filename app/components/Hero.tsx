"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const carsSection = document.getElementById("discover");
    carsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero2.jpeg"
            width={700}
            height={700}
            alt="hero"
            className="object-contain w-full h-full"
          />

          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
