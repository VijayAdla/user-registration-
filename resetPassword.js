async function resetPass(){
    const a=document.getElementById("currentPassword").value
    const b=document.getElementById("newPassword").value
    const c=document.getElementById("confirmPassword").value
    try{
        const response=await fetch("http://localhost:4000/user",
            {method:"GET"},
            {headers:{"content-type":"application/json"}})
        const user=await response.json()
        for(let i=0;i<user.length;i++){
            if(a===user[i].password && b===c){
                 try{
                    fetch("http://localhost:4000/user/" + user[i].id, {
                        method: "PUT",
                        headers: {'Content-Type': "application/json"},
                        body: JSON.stringify({ id:user[i].id,
                                               username:user[i].username,
                                               email:user[i].email,
                                               password: b ,
                                               role:user[i].role}) 
                    })  
                 }catch(error){
                    console.log(error)
                 }
            }else{
                console.log("")
            }
        }
    }catch(error){
        console.log(error)
    }
}