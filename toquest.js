/**--------------------retrive Data from JSON file --------------*/
const xReq = new XMLHttpRequest();
xReq.open("GET", "./quest.json");

let maxcounter = 0;
var counter = 0;
let correct = "";
/**--------------------Defenation of html objects --------------*/
var mainDev = document.getElementById("main");
let quest = document.getElementById("quest");
let button = document.getElementById("button");
let alert = document.getElementById("alert");
/**---------------------------------------------- --------------*/
//------------Here you can use the Data------------------------->
xReq.onload = function () {
  let quest = document.getElementById("quest");
  let xdata = JSON.parse(xReq.responseText);
  correct = xdata[counter]["correct"];
  maxcounter = xdata.length;
  quest.innerHTML = `<h2>${xdata[counter].q}</h2>`;

  for (
    let index = 0;
    index < Object.keys(xdata[counter].answer).length;
    index++
  ) {
    let s = index + 1;
    let xx = `${xdata[counter].answer["a" + s]}`;
    mainDev.innerHTML += `<input type="radio"value=${xx}
   name="ans" class='opt' id=${["a" + s]}> ${xx}</input> <br>`;
  }
  //-------------------------------------------------------------->
};
//  send the Data----------------------------------------------->
xReq.send();
//  send the Data----------------------------------------------->
let result = 0;
button.onclick = function () {
  let a1 = document.getElementById("a1");
  let alla=document.getElementsByClassName("opt")
  console.log(alla[0].checked)
  
for (let index = 0; index < alla.length; index++) {
  if (alla[index].checked && alla[index].value.toLowerCase() == correct.toLowerCase()) {
    result++;
    console.log(result);
  } else {
    console.log("not correct");
  }
  
}
  if(counter<maxcounter-1){
    counter++;
 
  }else{
    

 
console.log(mainDev.innerHTML)
  document.write( `<center><div style="width:30%;border: dimgray 1px solid;margin-top:20px;padding:40px; box-shadow: gray 1px 1px;"><h1>THE RESULT</h1></cernter> <hr>
    <ul style="color:green; text-align: left;"><li>RESULT = ${parseInt((result/maxcounter)*100)}% </li>

    <li>ALL   QUESTIONS = ${maxcounter}</li>
    <li>WRONG    ANSWER=${maxcounter - result}</li>
    <li>CORRECT  ANSWER =${result}</li></ul>`)
    
  }


  mainDev.innerHTML = "";
  quest.innerHTML = "";
  xReq.onload();
};
