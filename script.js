const use = document.getElementById("name")

fetch("http://localhost:3000/user").then(user => {
    user.forEach(element => {
    if(user.name === use.value){
        console.log(user.name);
    }        
    });
})