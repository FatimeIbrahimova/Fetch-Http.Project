const row = document.querySelector(".row");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const select = document.querySelector("#select");
const title = document.querySelector("#title");
const story = document.querySelector("#story");
const submit = document.querySelector("#submit");
const trash = document.querySelectorAll(".btn");
const card = document.querySelector(".card");
const modal2 = document.querySelector(".modal2");
const buttonInfo = document.querySelectorAll(".button");


submit.addEventListener("click", () => {
    const data = {
        Name: name.value,
        Surname: surname.value,
        Title: title.value,
        Story: story.value
    }
})

fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {

        data.forEach(user => {
            row.innerHTML += `<div class="col-3 mb-3">
    <div class="card" data-id="${user.id}" style="width:15rem;">
    <div class="card-body">
    <h5 class="card-title"><span>Name:</span>${user.name}</h5>
    <p class="card-text"><span>Surname:</span>${user.surname}</p>
    <p><span>Title:</span>${user.title}</p>
    <p><span>Gender:</span>${user.gender}</p>
    <p><span>Story:</span>${user.story}</p>
    <button class="btn border"><i class="fa-solid fa-trash"></i></button>
    <button class="btn button border"><i class="fa-solid fa-info"></i></i></button>
    </div>
    </div>
    </div>`
            let infos = document.querySelectorAll(".fa-info");
            infos.forEach((info) => {
                info.addEventListener("click", (e) => {
                    console.log("clicked");
                    modal2.innerHTML = `
            <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`
                    let id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");

                    fetch(`http://localhost:3000/users/${id}`)
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data)
                        })
                })
            })
        });
    })


function postData(user) {
    fetch("http://localhost:3000/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json,text/plain,*/*',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then(json => console.log(json));
}


function deleteData(id) {
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => res.json())
        .then(json => console.log(json));
}

submit.addEventListener("click", () => {
    console.log("clicked");
    const data = {
        id: Math.floor(Math.random() * 100),
        name: name.value,
        surname: surname.value,
        title: title.value,
        story: story.value
    }
    postData(data)
})

trash.addEventListener("onclick", () => {
    console.log("clicked");
    const data = {
        id: Math.floor(Math.random() * 100),
        name: name.value,
        surname: surname.value,
        title: title.value,
        story: story.value
    }
    deleteData(data)
})


