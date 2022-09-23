const database = [
      
      {
      	question:"How Many Skill have in English ?",
      	a:"4 Skills (Reading,Speaking,Listening,Writing)",
      	b:"5 Skills (Reading,Speaking,Listening,Writing,Thinking)",
      	c:"2 Skills (Reading,Speaking)",
      	d:"3 Skills (Reading,Speaking,Listening)",
      	correctanswer:"a"
      },
        {
      	question:"Who is the greatest king of Myanmar ?",
      	a:"Anawyahtar",
      	b:"Bayinnaung",
      	c:"Thibaw",     
        d:"Narathihape",
      	correctanswer:"b"
      },
        {
      	question:"How Many Population in Myanmar ?",
      	a:"60.1 billion", 
      	b:"77.1 billion",
      	c:"80.21 billion",
      	d: "50.41 billion",   	     	
      	correctanswer:"d"
      },
        {
      	question:"how many nationality in myanmar?",
      	a:"165",
      	b:"182",
      	c:"135",
      	d:"142",
      	correctanswer:"c"
      },
      {
        question:"Who is the most handsome in the world ?",
        a:"Thaw Khant",
        b:"Ko May Ko Toe",
        c:"Aung Yee Lin",
        d:"Lee Min-ho",
        correctanswer:"d"
      },
      {
        question:"Why you wanna be a Programmer?",
        a:"because of money",
        b:"because of hobby",
        c:"because of lazy",
        d:"My family forced me to become a Programmer Lol!",
        correctanswer:"a"
      },
      {
        question:"Why you need girlfriend?",
        a:"to play",
        b:"to get married",
        c:"to borrow moneys",
        d:"to become hero",
        correctanswer:"a"
      },
      {
        question:"Why Thaw Khant still living in Myanmar ? Can You Guess.",
        a:"No money,to go abroad",
        b:"because i love Myanmar",
        c:"Girlfriend not follow with me to go abroad",
        d:"My Mom not allowed me.",
        correctanswer:"a"
      },
      {
        question:"How do you think Thaw Khant face ?",
        a:"Handsome",
        b:"Super Handsome",
        c:"Super Super Handsome",
        d:"Super x 1000 Handsome",
        correctanswer:"d"
      },
      {
        question:"Why don't you click for PDF ?",
        a:"I am Dalan",
        b:"I love Myanmar soliders",
        c:"I am sittkway",
        d:"I hate Myanmar Peoples",
        correctanswer:"c"
      },
];


const getcontainer = document.querySelector('.container-fluid');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');
//console.log(getanswer);
var  geta_img = document.getElementById("a_img");
var getb_img = document.getElementById("b_img");
var getc_img = document.getElementById("c_img");
var getd_img = document.getElementById("d_img");
var getbtn = document.querySelector(".btn-primary");
// console.log(getd_img);

let currentidx = 0;
let score = 0;


 startquestion();


 function startquestion(){

 removeselects();
  const currentqes = database[currentidx];
 
  getquestion.textContent = currentqes.question;   // more smart than upper sir
  geta_img.textContent = currentqes.a;
  getb_img.textContent = currentqes.b;
  getc_img.textContent = currentqes.c;
  getd_img.textContent = currentqes.d;

}

function getsingleanswer(){

  let answer;
  // console.log(answer);


 // console.log(getanswers);

 getanswers.forEach(function(getanswer){
 // console.log(getanswer)

 if(getanswer.checked){
 //  console.log(getanswer.id);

 answer = getanswer.id;
 
 }

 });

// console.log(answer);

return answer;
};


getsingleanswer();

getbtn.addEventListener('click',function(){
  // console.log("i am working");

  const answer = getsingleanswer();

  // console.log(answer);

  if(answer){
   // console.log(answer);

   if(answer === database[currentidx].correctanswer){
    score ++;
   }

   currentidx++;

   // console.log(currentidx);

   if(currentidx < database.length){
    startquestion();
   }else{
     console.log(score);

   getcontainer.innerHTML = `
   <div class="boar" style="width:600px;margin-left:410px">
   <div style="border:1px solid #ddd; margin-top:100px;padding:30px 0px;box-shadow:0px 0px 10px rgba(0,0,0,0.5)">
   <img class="pha" src="./final.gif" width:200px style="margin-bottom:20px;margin-left:190px;"/>
    <h3 class"ts" style="color:#000;text-align:center;margin-bottom:20px;font-size:25px;">Total Score :<span style="color:green;font-weight:bold;font-size:30px"> ${score*10}%</span></h3>
    <h5 style="color:#000;text-align:center;margin-bottom:20px;">You answered correctly at ${score} / ${database.length} questions.</h5>
    <button class="butt" type="button" onclick="abc()" style="border: none;
          padding: 10px 15px;
          background: steelblue;
          color: #fff;
          font-weight: bold;
          border-radius:50px;
          font-size: 14px;
          letter-spacing: 1px;
          position: relative;
          margin-left:170px;
          " 
          >Click for More Challenges</button> 
    </div>
    </div
   `;
   }






  }else{
   window.alert("Choose One Answer");
  }

});



function removeselects(){
getanswers.forEach(function(getanswer){
    return getanswer.checked = false;
});
}

// let clicktimes = 0;

// function doubleclick(){                        // double click features

//   if(clicktimes === 0){
//     clicktimes = Date.now();   // for miliseconds bal sir

//   }else{

//     if((new Date().getTime() - clicktimes) < 1000){
//      // console.log("hola mosa");
//         location.reload();
//       clicktimes = 0;
//     }else{
//       // clicktimes = new Date().getTime();
//       clicktimes = Date.now();
//     }
//   }

function abc(){
  window.location.href = "./game2.html";
}