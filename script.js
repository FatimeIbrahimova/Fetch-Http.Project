 const row=document.querySelector(".row");
 const name=document.querySelector("#name");
 const surname=document.querySelector("#surname");
 const select=document.querySelector("#select");
 const title=document.querySelector("#title");
 const story=document.querySelector("#story");
const submit=document.querySelector("#submit");

submit.addEventListener("click",()=>{
    const data ={
        Name:name.value,
        Surname:surname.value,
        Title:title.value,
        Story:story.value
    }
})

fetch("http://localhost:3000/users")
.then((res)=>res.json())
.then((data)=>{

data.forEach(user=>{
    row.innerHTML+=`<div class="col-3 mb-3">
    <div class="card" data-id="${user.id}" style="width:15rem;">
    <div class="card-body">
    <h5 class="card-title"><span>Name:</span>${user.name}</h5>
    <p class="card-text"><span>Surname:</span>${user.surname}</p>
    <p><span>Title:</span>${user.title}</p>
    <p><span>Gender:</span>${user.gender}</p>
    <p><span>Story:</span>${user.story}</p>
    <button class="rounded-0"><i class="fa-solid fa-trash"></i></button>
    <button><i class="fa-solid fa-info"></i></i></button>
    </div>
    </div>
    </div>`

    let infos = document.querySelectorAll(".fa-info");
    infos.forEach((info)=>{
        info.addEventListener("click",(e)=>{
            let id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");

            fetch(`http://localhost:3000/users/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
            })
        })
    })
});
})