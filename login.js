// index.html KI JS FILE H YE

let users  =  JSON.parse(localStorage.getItem('user'))
let showData = document.querySelector('#showData')


users.map((allUser)=>{

    // showData.innerHTML = ""
showData.innerHTML += `<div>
<h1> ${allUser.username} </h1>
<h1> ${allUser.email} </h1>
<h1> ${allUser.password} </h1>

</div>
`

})


console.log(users);



