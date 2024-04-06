// Get the city name from the user
const cityName = prompt("Enter the city name: ");

// Function to open Google Earth and search for the city
function findCityOnGoogleEarth() {
  const googleEarthUrl = `https://earth.google.com/web/search/${encodeURIComponent(cityName)}`;
  window.open(googleEarthUrl, "_blank");
}

// Call the function
findCityOnGoogleEarth();