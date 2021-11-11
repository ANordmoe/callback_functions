function myDisplayer(some) {
  document.getElementById("greeting").innerHTML = some;
}

let name = document.getElementById("inputId").value;
let nameDisplay = document.querySelector("#nameDisplay");

let btn;
btn.addEventListener((click = () => {}));

async function addName() {
  setTimeout(() => {
    let submit = document.getElementById("inputId").value;

    nameDisplay.innerHTML = submit;
    nameDisplay.classList.add("animate__animated", "animate__bounceInRight");
  }, 1000);
}

function onSubmit() {
  // let submit = document.getElementById("inputId").value;
  document.querySelector("#greeting").innerHTML = "Top O' the Morning... ";
  addName();
}
