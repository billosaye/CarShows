"use client";

import { useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { CustomButtton } from "../Index";
import CarDetails from "../CarDetails";
import { CarHeader } from "./components/CarHeader";
import { CarPrice } from "./components/CarPrice";
import { CarImage } from "./components/CarImage";
import { CarSpecs } from "./components/CarSpecs";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { make, model, year, transmission, drive, cylinders, highway_mpg } = car;
  const carRent = calculateCarRent(cylinders, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <CarHeader make={make} model={model} />
      <CarPrice price={carRent} />
      <CarImage />
      <div className="relative flex w-full mt-2">
        <CarSpecs 
          transmission={transmission}
          drive={drive}
          highway_mpg={highway_mpg}
        />
        <div className="car-card__btn-container">
          <CustomButtton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
