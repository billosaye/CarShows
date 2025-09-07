import Image from "next/image";

interface CarSpecsProps {
  transmission: string;
  drive: string;
  highway_mpg: number;
}

export const CarSpecs = ({ transmission, drive, highway_mpg }: CarSpecsProps) => (
  <div className="flex group-hover:invisible w-full justify-between text-grey">
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
      <p className="text-[14px] leading-[17px]">
        {transmission === "a" ? "Automatic" : "Manual"}
      </p>
    </div>
    <div className="car-card__icon">
      <Image src="/tire.svg" width={20} height={20} alt="seat" />
      <p className="car-card__icon-text">{drive.toUpperCase()}</p>
    </div>
    <div className="car-card__icon">
      <Image src="/gas.svg" width={20} height={20} alt="seat" />
      <p className="car-card__icon-text">{highway_mpg || 'N/A'} MPG</p>
    </div>
  </div>
);
