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

// NHTSA API Response Types
export interface NHTSAMake {
  Make_ID: number;
  Make_Name: string;
}

export interface NHTSAModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface NHTSAResponse<T> {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: T[];
}

// Enhanced Car Interface (combining NHTSA data with generated specs)
export interface CarProps {
  // NHTSA Data
  make: string;
  model: string;
  make_id: number;
  model_id: number;
  
  // Generated/Estimated Specifications
  class: string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  transmission: string;
  year: number;
  city_mpg: number;
  highway_mpg: number;
  
  // Additional fields for enhanced experience
  image_url?: string;
  price_range?: string;
  body_style?: string;
}
