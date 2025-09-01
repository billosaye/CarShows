export interface CustomButttonProps {
  title: string;
  containerStyles?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit" | "reset";
  rightIcon?: string;
  isDisabled?: boolean;
  textStyles?: string;
  
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  class: string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  transmission: string;
  year: number;
  city_mpg: number;
}
