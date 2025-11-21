// Dummy fare calculation based on fixed rate per km
module.exports = (origin, destination) => {
  // TODO: Use real distance via Google Maps
  // Example: assume 10km
  const distance = 10;
  const ratePerKm = 2; // $2/km
  return distance * ratePerKm;
};