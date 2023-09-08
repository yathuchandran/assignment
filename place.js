const tickets = {
    Kiev: 'Prague',
    Zurich: 'Amsterdam',
    Prague: 'Zurich',
    Amsterdam: 'Barcelona', // Corrected Barcelona to Amsterdam
    Berlin: 'Amsterdam',
    Paris: 'Skopje',
    Skopje: 'Paris',
  };
  
  const route = [];
  let currentCity = 'Kiev';
  const visitedCities = new Set(); // To track visited cities
  
  while (tickets[currentCity] && !visitedCities.has(currentCity)) {
    visitedCities.add(currentCity);
    route.push(currentCity);
    currentCity = tickets[currentCity];
  }
  
  if (visitedCities.has(currentCity)) {
    // If we encounter a visited city again, it means there's a loop.
    console.log('Error: There is a loop in the tickets.');
  } else {
    route.push(currentCity);
    console.log('Route:', route.join(' -> '));
  }
  