interface CarHeaderProps {
  make: string;
  model: string;
}

export const CarHeader = ({ make, model }: CarHeaderProps) => (
  <div className="car-card__content">
    <h2 >{make} {model}</h2>
  </div>
);
