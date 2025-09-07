import Image from "next/image";

export const CarImage = () => (
  <div className="relative w-full h-40 my-3 object-contain">
    <Image
      src="/hero.png"
      alt="car model"
      fill
      priority
      className="object-contain"
    />
  </div>
);
