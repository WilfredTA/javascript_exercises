/* A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to just those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word as a string, and returns true if it can spell the argument passed in from the set of blocks, false otherwise. You can consider the letters to be case insensitive when you apply the rules.

*/

function isBlockWord(word) {
  var blocks = {'BO': 0, 'XK': 0, 'DQ': 0, 'CP': 0,
              'NA': 0, 'GT': 0, 'RE' : 0, 'FS' : 0,
              'JW' : 0, 'HU' : 0, 'VI' : 0, 'LY' : 0, 
              'ZM' : 0};
  
  var block_duos = Object.keys(blocks);
  
  for (var i = 0; i < word.length; i++){
    block_duos.some(function(duo) {
      if (duo.match(word[i].toUpperCase())) {
       return blocks[duo] += 1;
      };
    });
  };
  
  if (block_duos.some(function(duo) {
    return blocks[duo] > 1;
    
  })) {
    return false;
  } else {
    return true;
  };
 
  
};



isBlockWord('BATCH'); // true
isBlockWord('BUTCH'); // false
isBlockWord('jest');  // true
isBlockWord('floW');  // true
isBlockWord('APPLE'); // false
isBlockWord('apple'); // false
isBlockWord('apPLE'); // false
isBlockWord('Box');   // false