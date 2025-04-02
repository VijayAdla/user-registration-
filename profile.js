async function displayProfile(){
    let id=localStorage.getItem('Id')
    try{
        const response=await fetch("http://localhost:4000/user/" +id,
            {method:"GET"})
        const user=await response.json()
        // console.log(user)
        document.getElementById("profile-name").value=user.username
        document.getElementById("profile-email").value=user.email
        document.getElementById("profile-password").value=user.password
        document.getElementById("profile-role").value=user.role
        document.getElementById("profile-status").value=user.status
    }catch(error){
        console.log(error)
    }
}

displayProfile()