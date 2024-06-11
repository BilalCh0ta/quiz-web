//extra variables
let div = document.querySelector('#quiz')

let index = 0

let nextBtn =document.getElementById('next')

let questionKiArray =[]

let result = 0;

let totalMarks = 0;




//function to shuffle the option array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  


//function to show question and option on screen

function showQuestion(Ques) {

if(index < questionKiArray.length ){
    let mixOption = [
        ...Ques[index].incorrectAnswers,
        Ques[index].correctAnswer
      ]
  
  
  div.innerHTML += `
  
  <p> Q${index +1} : ${Ques[index].question.text}</p>
  <ul>
  
  
  ${shuffleArray(mixOption).map((options)=>
      ` <li>
        <input type="radio" name="choice" class="choice" id=${options} value=${options}><label for=${options}>${options}</label>
        </li>`
  
  
  )}
  
  </ul>
  `
}
else{
    console.log('question completed');
    window.location = "result.html"
    localStorage.setItem("result",JSON.stringify({ totalMarks, result}));
}
}



//next ka  button jis pr click kre tu aik aik kerke question aai aain

nextBtn.addEventListener('click' , ()=>{
    const choice = document.querySelectorAll(".choice");

    div.innerHTML = ''
    choice.forEach((item) => {
        if (item.checked) {
          if (item.nextSibling.innerHTML === questionKiArray[index].correctAnswer) {
            result += 10;
          }
        }
      });
    index +=1
    showQuestion(questionKiArray)
})








//calling api (using fetch() and execute fetch() by async await)
async function questions(){
let response = await fetch("https://the-trivia-api.com/v2/questions")
questionKiArray =await response.json()
console.log(questionKiArray);
totalMarks = questionKiArray.length * 10;
showQuestion(questionKiArray)




}


//call kr diya questions wala function
questions()






















