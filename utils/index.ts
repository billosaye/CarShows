import { NHTSAResponse, NHTSAMake, NHTSAModel, CarProps } from "@/types";

// NHTSA API Base URL
const NHTSA_BASE_URL = "https://vpic.nhtsa.dot.gov/api";

// Fetch all makes from NHTSA API
export async function fetchAllMakes(): Promise<NHTSAMake[]> {
  try {
    const response = await fetch(`${NHTSA_BASE_URL}/vehicles/GetAllMakes?format=json`);
    const data: NHTSAResponse<NHTSAMake> = await response.json();
    return data.Results;
  } catch (error) {
    console.error("Error fetching makes:", error);
    return [];
  }
}

// Fetch models for a specific make
export async function fetchModelsForMake(make: string): Promise<NHTSAModel[]> {
  try {
    const response = await fetch(`${NHTSA_BASE_URL}/vehicles/GetModelsForMake/${make}?format=json`);
    const data: NHTSAResponse<NHTSAModel> = await response.json();
    return data.Results;
  } catch (error) {
    console.error(`Error fetching models for ${make}:`, error);
    return [];
  }
}

// Generate realistic car specifications based on make/model
function generateCarSpecs(make: string, model: string, makeId: number, modelId: number): Partial<CarProps> {
  // Vehicle classes based on model names
  const getVehicleClass = (model: string): string => {
    const modelLower = model.toLowerCase();
    if (modelLower.includes('q') || modelLower.includes('x')) return 'SUV';
    if (modelLower.includes('a') || modelLower.includes('s') || modelLower.includes('rs')) return 'Sedan';
    if (modelLower.includes('tt') || modelLower.includes('r8')) return 'Coupe';
    return 'Sedan';
  };

  // Generate realistic specifications
  const vehicleClass = getVehicleClass(model);
  const isLuxury = ['audi', 'bmw', 'mercedes', 'lexus', 'porsche'].includes(make.toLowerCase());
  const isElectric = model.toLowerCase().includes('e-') || model.toLowerCase().includes('electric');
  
  return {
    class: vehicleClass,
    cylinders: isElectric ? 0 : Math.floor(Math.random() * 6) + 4, // 4-8 cylinders
    displacement: isElectric ? 0 : Math.floor(Math.random() * 3) + 2, // 2-4L
    drive: ['fwd', 'rwd', 'awd'][Math.floor(Math.random() * 3)],
    fuel_type: isElectric ? 'electricity' : 'gas',
    transmission: Math.random() > 0.3 ? 'a' : 'm', // 70% automatic
    year: Math.floor(Math.random() * 9) + 2015, // 2015-2023
    city_mpg: isElectric ? 0 : Math.floor(Math.random() * 20) + 15, // 15-35 mpg
    highway_mpg: isElectric ? 0 : Math.floor(Math.random() * 15) + 25, // 25-40 mpg
    body_style: vehicleClass,
    price_range: isLuxury ? 'luxury' : 'standard'
  };
}

// Main function to fetch cars using NHTSA API
export async function fetchCars(limit: number = 50): Promise<CarProps[]> {
  try {
    // Get popular makes (subset of your existing manufacturers)
    const popularMakes = ['Audi', 'BMW', 'Mercedes-Benz', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia'];
    const cars: CarProps[] = [];
    
    for (const make of popularMakes) {
      if (cars.length >= limit) break;
      
      const models = await fetchModelsForMake(make);
      
      // Take up to 5 models per make
      const selectedModels = models.slice(0, 5);
      
      for (const modelData of selectedModels) {
        if (cars.length >= limit) break;
        
        const specs = generateCarSpecs(make, modelData.Model_Name, modelData.Make_ID, modelData.Model_ID);
        
        const car: CarProps = {
          make: modelData.Make_Name,
          model: modelData.Model_Name,
          make_id: modelData.Make_ID,
          model_id: modelData.Model_ID,
          ...specs
        } as CarProps;
        
        cars.push(car);
      }
      
      // Add delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}


export const calculateCarRent = (cylinders: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const cylinderFactor = 5; // Additional rate per cylinder
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on cylinders and age
  const cylinderRate = cylinders * cylinderFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + cylinderRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
