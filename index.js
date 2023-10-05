// Code your solution in this file!

// Return the first two drivers from an array of drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Return the last two drivers from an array of drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing two functions: returnFirstTwoDrivers and returnLastTwoDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function to multiply a fare by a given integer
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  // Create fareDoubler and fareTripler using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  // Select either the first two drivers or the last two drivers based on the provided function
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  // Example usage
  const drivers = ['driver1', 'driver2', 'driver3', 'driver4', 'driver5'];
  
  console.log(returnFirstTwoDrivers(drivers)); 
  console.log(returnLastTwoDrivers(drivers));  
  
  console.log(selectingDrivers[0](drivers)); 
  console.log(selectingDrivers[1](drivers)); 
  
  console.log(fareDoubler(10)); 
  console.log(fareTripler(10)); 
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  