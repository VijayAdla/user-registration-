async function adminDisplay(){
    try{
        const response=await fetch("http://localhost:4000/user",
            {method:"GET"})
        const user=await response.json()
        let str=""
        let a=localStorage.getItem('role')
        let b=localStorage.getItem('Email')
        for(let i=0;i<user.length;i++){
            if(a=='Admin'){
                let str =`
                <tr>
                <td>${user[i].id}</td>
                <td><a href="./profile.html" onclick="profileCard('${user[i].id}')">${user[i].username}</a></td>
                <td>${user[i].email}</td>
                <td>${user[i].password}</td>
                <td>${user[i].role}</td>
                <td>Active</td>
                <td style="text-align:center"><a href="./adminedit.html"><i class="fa-solid fa-pen-to-square" onclick="adminEdit('${user[i].id}')"></i></a></td>
                <td style="text-align:center"><i class="fa-solid fa-trash delete" onclick="adminDelete('${user[i].id}')"></i></td>
                </tr>
                `
                document.getElementById("tableDisplay").innerHTML +=str
            }else if(a=='User' && b==user[i].email){
                let str =`
                <tr>
                <td>${user[i].id}</td>
                <td><a href="./profile.html" onclick="profileCard('${user[i].id}')">${user[i].username}</a></td>
                <td>${user[i].email}</td>              
                <td>${user[i].password}</td>
                <td>${user[i].role}</td>
                <td>Active</td>
                <td style="text-align:center"><a href="./adminedit.html"><i class="fa-solid fa-pen-to-square" onclick="adminEdit('${user[i].id}')"></i></a></td>
                <td style="text-align:center"><i class="fa-solid fa-trash delete" onclick="adminDelete('${user[i].id}')"></i></td>
                </tr>
                `
                document.getElementById("tableDisplay").innerHTML =str
            }
                
            }
        }catch(error){
        // console.log(error)
    }
}

adminDisplay()

async function adminDelete(id){
    try{
        const response=await fetch("http://localhost:4000/user/" +id,
            {method:'DELETE'})
        window.location.href="./display.html"
    }catch(error){
        console.log(error)
    }
}


async function filter() {
    const a=document.getElementById("filterName").value
    try{
       const response=await fetch("http://localhost:4000/user",
        {method:"GET"},
        {headers:{'content-type':"application/json"}})
        const user=await response.json()
        console.log(user)
        let str=""
        for(let i=0;i<=user.length;i++){
            if(a==user[i].username){
                let str =`
                <tr>
                <td>${user[i].id}</td>
                <td><a href="./profile.html" onclick="profileCard('${user[i].id}')">${user[i].username}</a></td>
                <td>${user[i].email}</td>               
                <td>${user[i].password}</td>
                <td>${user[i].role}</td>
                <td>Active</td>
                <td style="text-align:center"><a href="./adminedit.html"><i class="fa-solid fa-pen-to-square" onclick="adminEdit('${user[i].id}')"></i></a></td>
                <td style="text-align:center"><i class="fa-solid fa-trash" onclick="adminDelete('${user[i].id}')"></i></td>
                </tr>
                `
                document.getElementById("tableDisplay").innerHTML =str
            }else{
                console.log("")
            }
        }
        
    }catch(error){
        console.log(error)
    }
    
}


async function adminEdit(id){
    localStorage.setItem('userId',id)
}

async function profileCard(id){
    localStorage.setItem("Id",id)
    // console.log()
}









