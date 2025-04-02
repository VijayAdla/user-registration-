// registration data storage


async function sendingRequest(){
    const userName=document.getElementById("username").value
    const emailField=document.getElementById("email").value
    const passwordField=document.getElementById("pass").value
    const roleField=document.getElementById("role1").value
    try{
        if(userName.length<=0){
            alert("Please enter details!!")
        } else{
            const response=await fetch("http://localhost:4000/user",{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({username:userName,
                                     email:emailField,
                                     password:passwordField,
                                     role:roleField})})
            alert("registration is successful!")
            location.reload()
        }           
    }catch(error){
        console.log(error)
    }

}

// this is for the login page email and verification of password
async function verification(){
    const email=document.getElementById("nameEntry").value
    const password=document.getElementById("passEntry").value
    try{
        
        const response=await fetch("http://localhost:4000/user",
            {method:"GET"})
        const user=await response.json()
        // console.log(email)
        for(let i=0;i<=user.length;i++){
           if(email===user[i].email && password===user[i].password){
               localStorage.setItem('Email',email)
               localStorage.setItem('Password',password)
               localStorage.setItem('role',user[i].role)
               window.location.href="./display.html"
           }else{
            document.getElementById("incorrect").innerHTML="Incorrect Username or Password"
           }
        }
       }catch(error){
        console.log(error)
    }
}



//here we are going to write code for the reset password 

async function resetPass(){
    

}






