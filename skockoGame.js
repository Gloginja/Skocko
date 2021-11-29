var tryFields = [];
var randomCombination = [];


const Symbol = {
    Skocko: 1,
    Club: 2,
    Ace: 3,
    Heart: 4,
    Diamond: 5,
    Star:6
  };

  function setRandomCombination()
  {
      for(let i = 0; i < 4; i++)
      {
        randomCombination.push(Math.floor((Math.random() * 6) + 1));
      }
  }
  
  