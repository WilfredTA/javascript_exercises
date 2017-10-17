/* 
  1000 lights
  
  Understand the problem:
    input: number
    Output: array of numbers
    
      Meaning of input: The number represents the quantity of 
        lights in an ordered row that can have one of two               states: on or off
        
      Meaning of output: The array containing the numbers of           the lights that are on.
      
      
      Rules: For n lights, there are n 'passthroughs'. On each each passthrough, starting at 1, every nth light is toggled (where n is incremented by 1 at each passthrough).
      
      All the lights are initially off, and are therefore all on after the 1st passthrough
      
      Test cases are provided
      
      Data Structure and Algorithm
      
      Primary operations are iteration and toggling.
      Since each light has two states, object is called for
      
      Algorithm:
      
        Get input number
        Create empty object
        populate object with a loop
        
        Set incrementer value
        loop from incrementer to n, toggling every incrementerth light
        
        Filter out off lights
        

*/


function lightsOn(switches) {
  var lights = {};
  var states = { off: 'on', on: 'off'};
  var on = [];
  
  for (var i = 1; i <= switches; i++) {
    lights[i] = 'off';
  };
  
  for (var i = 1; i <= switches; i++) {
    for(var everyth = i; everyth <= switches; everyth += i) {
      lights[everyth] = states[lights[everyth]];
    };
  };
  
  Object.keys(lights).forEach(function(lightNum) {
    if (lights[lightNum] === 'on') {
      on.push(Number(lightNum));
    };
  });
  return on;
};

console.log(lightsOn(5));
console.log(lightsOn(100));