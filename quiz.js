const div = document.querySelector("#quiz");
function renderQuestion(sawal){
   
    div.innerHTML = `
    <p>${sawal[0].question.text}</p>
    <ul>
   <li>${sawal[0].incorrectAnswers[0]}</li>
   <li>${sawal[0].incorrectAnswers[1]}</li>
   <li>${sawal[0].incorrectAnswers[2]}</li>

    </ul>
    <button onclick = 'next()'>Next</button>
 
    `


} 
const getQuestions = async () => {
  try {
    const data = await fetch("https://the-trivia-api.com/v2/questions");
    const response = await data.json();
    console.log(response);


    renderQuestion(response);


  } catch (error) {
    console.log("error===>", error);
  }
};

getQuestions();





