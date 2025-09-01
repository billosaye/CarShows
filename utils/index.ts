export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "ae97327548msh786fbc6089ea127p12d795jsn47207069e303",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi",
    { headers }
  );

  const result = await response.json();
  return result;
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
