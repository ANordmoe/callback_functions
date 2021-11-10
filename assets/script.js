function myDisplayer(some) {
    document.getElementById("greeting").innerHTML = some;
  }
  
  let name = document.getElementById("inputId").value; 

  function onSubmit() {
    let submit = document.getElementById("inputId").value;

    document.querySelector("h1").innerHTML = submit;

  }

  
  