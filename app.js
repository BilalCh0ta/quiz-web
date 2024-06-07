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


// show all values on console
    console.log(fullName.value);
    console.log(email.value);
    console.log(password.value);



// push all values on userData array


if(isEmailRegistered(email)){
    alert("this email is already use")
}

else{
    userData.push(
        {username : fullName.value,
            email : email.value,
            password : password.value
        })
}



// console.log(userData);

})


function isEmailRegistered(email) {
    return userData.includes(email.value);
}



signBtn.addEventListener('click',()=>{
window.location = 'index.html'
localStorage.setItem('user', JSON.stringify(userData))

})