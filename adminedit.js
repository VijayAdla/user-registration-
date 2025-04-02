async function saveChanges(){
    let a=localStorage.getItem("userId")
    // console.log(a)
    const n=document.getElementById("userName").value
    const e=document.getElementById("Email").value
    const p=document.getElementById("password").value
    const r=document.getElementById("Role").value
    // console.log(n,e,p,r)
    try{
        const response=await fetch("http://localhost:4000/user/" +a,{
            method: "PUT",headers:{'Content-Type': "application/json"},
            body : JSON.stringify({ 
                             id:a,
                             username:n,
                             email:e,
                             password:p,
                             role:r}) 
            })
        window.alert("User details updated")
        window.location.href='./display.html'
    }catch(error){
        console.log(error)
    }
}

async function editClick(){
    const a=localStorage.getItem('userId')
    try{
        const response=await fetch("http://localhost:4000/user/" +a,
            {method:"GET"}
        )
        const user=await response.json()
        document.getElementById("userName").value=user.username
        document.getElementById("Email").value=user.email
        document.getElementById("password").value=user.password
        document.getElementById("Role").value=user.role
    }catch(error){
        
    }
}

editClick()






