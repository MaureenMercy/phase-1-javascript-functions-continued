function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  console.log(saturdayFun());  // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("read a book"));  // "This Saturday, I want to read a book!"

console.log(mondayWork());  // "This Monday, I will go to the office."
console.log(mondayWork("work from home"));  // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction());  // "You are !!!special!!!"
console.log(encouragingPromptFunction("amazing"));  // "You are !!!amazing!!!"

console.log(wrapAdjective("&&&")("fantastic"));  // "You are &&&fantastic&&&!"

