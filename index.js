// Code your solution here
function findMatching(drivers, searchString) {
    // Convert the search string to lowercase for case-insensitive matching
    const searchLower = searchString.toLowerCase();
  
    // Filter the drivers array to find matching names
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().includes(searchLower)
    );
  
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, query) {
    const matches = [];
  
    for (const driver of drivers) {
      if (driver.toLowerCase().startsWith(query.toLowerCase())) {
        matches.push(driver);
      }
    }
  
    return matches;
  }

  function matchName(drivers, query) {
    const matches = [];
  
    for (const driver of drivers) {
      if (driver.name.toLowerCase() === query.toLowerCase()) {
        matches.push(driver);
      }
    }
  
    return matches;
  }