
    const Add = ()=>{
        var area = document.getElementById("writeToDo");
        var users = document.getElementById("inputInput").value;
       area.innerHTML += '<p>${users}</p>' ;

       document.getElementById("inputInput").value = "";
    }

    