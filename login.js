// index.html KI JS FILE H YE

let users  =  JSON.parse(localStorage.getItem('user'))
let showData = document.querySelector('#showData')




console.log(users);


// let loginBtn= document.querySelector('.login-btn')

let loginForm  = document.querySelector(".login-form")


let loginName = document.querySelector('.login-name')

let loginEmail = document.querySelector('.email')

let loginPassword = document.querySelector('.password')


loginForm.addEventListener("submit" , (event)=>{
    event.preventDefault()
 
let match = users.filter((persons)=> persons.email ===loginEmail.value)

if(match.length ===0){
    alert('email does not exit signup first')
}

else{
    console.log(match[0].password);
    match[0].password ===loginPassword.value ? alert('sucess login') 
  ( window.location ='quiz.html')
    
    :   
    (alert("incorect password"))
}

})



// login function












