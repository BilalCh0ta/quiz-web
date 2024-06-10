// register.html KI JS FILE H YE 


let signBtn = document.querySelector('.sign-btn')

let form  = document.getElementById("form")


let fullName = document.querySelector('.full-name')

let email = document.querySelector('.email')

let password = document.querySelector('.password')


let userData = []
let person = JSON.parse(localStorage.getItem('user'));
if(person === null){
    userData= [];
}else{
    userData= person;
    console.log(person)
}



form.addEventListener('submit' , (event)=>{
event.preventDefault()



// regmail problem solution (agar aik email dubara user to alert show kerde k dubara use nhi ker sakte)
let checksEmail = userData.some((items) => items.email === email.value)

if(!checksEmail){
    userData.push(
        {username : fullName.value,
            email : email.value,
            password : password.value
        })
alert("signup successfully")

        }
        
        else{
            alert("this email is already use")
        }





})









signBtn.addEventListener('click',()=>{
window.location = 'index.html'
localStorage.setItem('user', JSON.stringify(userData))

})