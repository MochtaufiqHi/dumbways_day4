alert("Assalamualaikum")

// save the result object into an empty array
let blogs = []

function getBlog(event){
  // handle event it so doesn't refresh form onsubmit
  event.preventDefault()

  // handle input from form blog html
  let projectName = document.getElementById("projectName").value
  let description = document.getElementById("description").value
  let startDate = document.getElementById("start-date").value
  let endDate = document.getElementById("end-date").value
  let nodeJs = document.getElementById("nodeJs").value
  let reactJs = document.getElementById("reactJs").value
  let nextJs = document.getElementById("nextJs").value
  let typescript = document.getElementById("typescript").value
  let image = document.getElementById("inputBlog").files

  // maybe to handle object biner/blob so the image can be displayed
  image = URL.createObjectURL(image[0])
  // Handle result from form, and include in the object
  let blog = {
    projectName: projectName,
    description: description,
    startDate: startDate,
    endDate: endDate,
    nodeJs: nodeJs,
    reactJs: reactJs,
    nextJs: nextJs,
    typescript: typescript,
    image: image
  }
  // inserts objects into an empty array
  blogs.push(blog)
  // make sure the output can be handlle
  console.log(blogs)
  // call function renderBlog()
  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ""
  // make looping the result of the function getBlog()
  for(let i = 0; i < blogs.length; i++) {
    document.getElementById("contents").innerHTML += `
        <!-- item grid -->
        <div class="grid-item">
          <img class="img-project" src=${blogs[i].image} alt="project">
          <div class="info-project">
            <h3>${blogs[i].projectName}</h3>
            <p style="opacity: 0.8;">durasi: 3 bulan</p>
            <p>${blogs[i].description}</p>
          </div>
          <div class="framework-logo">
            <img src="assets/img/nextJs.png" alt="">
            <img src="assets/img/reactjs.png" alt="">
            <img src="assets/img/nodejs.png" alt="">
            <img src="assets/img/ts.png" alt="">
          </div>
          <div class="btn-project">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>`
  }
}
