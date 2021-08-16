// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,name){
    let namesofDrivers = array.filter(function(user){
    return user.toLowerCase() === name.toLowerCase()
    });
    return namesofDrivers;
  }

  const fuzzyMatch = function(fuzzy,query){
      let fuzzyNames = fuzzy.filter(function(user){
          return user.substring(0,1) === query.substring(0,1)
      });
      return fuzzyNames;
  }
  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(fuzz,user){
    const fuzz2 = fuzz.filter(function(drive){
      if (drive.name===user){
        return drive
      }
    });
    return fuzz2
  }