/* Write a function that processes the following movie release data 

  newReleases is input
  Output: The function should generate an array of objects
  that contain only the id and title key/value pairs
  
  Rules:
    1. Keep only the releases that have both id and title data present
    2. Keep only the id and title data for each release
    
    
    Steps:
      First, filter objects that have both title and id
      Transform filtered objects to only have title and id
      
      With the given data set, return value should be:
      
      [ { id: 70111470, title: 'Die Hard' },
      { id: 675465, title: 'Fracture' } ]


*/


function processReleaseData(releases) { 
  var filtered = releases.filter(function(object) {
    return (object['id'] && object['title'])
      
  });

 return filtered.map(function(object) { 
    return { 'id': object['id'], 'title': object['title'] };
  });
};


var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));