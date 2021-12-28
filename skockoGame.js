var tryFields = [];
var randomCombination = [];
var result = [];
var row = 0;
var selectClick = new Audio("rsc/Music/click.mp3");
var end = false;

window.onload = onStartUp();

function onStartUp()
{
  setRandomCombination();
}


function setRandomCombination()
{
    for(let i = 0; i < 4; i++)
    {
      randomCombination.push(Math.floor((Math.random() * 6) + 1));
    }
}

function add(symbol)
{
  click();
  if(tryFields.length<4)
  {
    document.getElementById("field" + row + tryFields.length).src="rsc/Images/"+ symbol.id + ".png";
    tryFields.push(getSymbolNumber(symbol.id));
  }
}


function getSymbolNumber(symbol)
{
  switch(symbol)
  {
    case "skocko" : return 1;
    case "club" : return 2;
    case "ace" : return 3;
    case "heart" : return 4;
    case "diamonds" : return 5;
    case "star" : return 6;
  }
}

function getSymbolName(Number)
{
  switch(Number)
  {
    case 1 : return "skocko";
    case 2 : return "club";
    case 3 : return "ace";
    case 4 : return "heart";
    case 5 : return "diamonds";
    case 6 : return "star";
  }
}

function click()
{
  selectClick.play();
}

function deleteField(field)
{
  click();
  if(("field" + row + (tryFields.length - 1) == field.id) && tryFields.length > 0) 
  {
    tryFields.pop();
    field.src = "rsc/Images/empty.png";
  }
}

function tryCombination(t)
{
  click();
  
  if(t.id == "try" + row)
  {
      if(tryFields.length==4)
      {
          check(randomCombination);
          tryFields = [];
          row++;
      }
      else
      {
        alert("Please insert the whole combination!");
      }
  }
}

function check(r)
{
    let first = [1,1,1,1];
    let second = [1,1,1,1];
    result = [];
    for(let i = 0 ; i < 4; i++)
    {
        if(r[i]==tryFields[i])
        {
            first[i]=0;
            second[i]=0;
            result.push("hit1");
        }
    }

    for(let i = 0 ; i < 4; i++)
    {
        if(first[i]==1)
        {
            for(let j = 0; j < 4; j++)
            {
                if(second[j]==1)
                {
                    if(tryFields[i]==r[j])
                    {
                        first[i]=0;
                        second[j]=0;
                        result.push("hit2");
                        break;
                    }
                }
            }
        }
    }

    for(let j = 0; j < result.length; j++)
    {
        document.getElementById("tryfield" + row + j).src="rsc/Images/" + result[j] + ".png";
    }


    let numberOfHit1 = 0;

    for(let i = 0; i < 4; i++)
    {
      if(result[i]=="hit1") numberOfHit1++;
    }

    if(numberOfHit1==4) {alert("You won!"); writeAnwser(); end = true;}
}

function writeAnwser()
  {
    
      for(let i = 0; i < 4; i++)
      {
        document.getElementById("result" + i).src="rsc/Images/" + getSymbolName(randomCombination[i]) + ".png";
      }
  }