interface CarPriceProps {
  price: string | number;
}

export const CarPrice = ({ price }: CarPriceProps) => (
  <p className="flex mt-6 text-[32px] font-extrabold">
    <span className="self-start text-[14px] font-semibold">$</span>
    {price}
    <span className="self-end text-[14px] font-medium">/day</span>
  </p>
);
