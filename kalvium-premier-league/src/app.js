//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
return [managerName,managerAge, currentTeam, trophiesWon] 
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation([defender, midfield, forward]){
  
  if((defender===undefined)|| (midfield===undefined)){
    return null;
  }
  else{
    let obj = {
      defender:defender,
      midfield:midfield,
      forward:forward
    }
    return obj
  }

  }
  


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
let arr = [];
for(let i =0; i<players.length; i++){
  if(players[i].debut===year){
    arr.push(players[i]);
  }
}
return arr;

}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let arr = [];
  for(let i =0; i<players.length; i++){
    if(players[i].position===position){
      arr.push(players[i]);
    }
  }
  return arr;
  
  }
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let arr = [];
  for(let i =0; i<players.length; i++){
    for(let j=0; j<players[i].awards.length;j++){
    if(players[i].awards[j].name===awardName){
      arr.push(players[i]);
      break
    }
  }
  }
  return arr;
  
  }
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let arr = [];
  for(let i =0; i<players.length; i++){
    let count = 0;
    for(let j=0; j<players[i].awards.length;j++){

    if(players[i].awards[j].name===awardName){
      
      count+=1
    }
  }
  if(count===noOfTimes){
    arr.push(players[i]);
  }
  }
  return arr;
  
  }
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let arr = [];
  for(let i =0; i<players.length; i++){
    for(let j=0; j<players[i].awards.length;j++){
    if(players[i].awards[j].name===awardName && players[i].country===country ){
      arr.push(players[i]);
      break
    }
  }
  }
  return arr;
  
  }
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let arr = [];
  for(let i=0; i<players.length;i++){
    if(players[i].awards.length>=noOfAwards && players[i].team===team && players[i].age<age){
      arr.push(players[i]);
    }
  }
  return arr;
  }
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  return players.sort((a,b)=>
    b.age - a.age
  )
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
 let arr = []
 for(let i=0; i<players.length; i++){
  if(players[i].team===team){
    arr.push(players[i])
  }
 }
 arr.sort((a,b)=>
 b.awards.length-a.awards.length)
 return arr;
}