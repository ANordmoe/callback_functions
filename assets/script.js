function myDisplayer(some) {
    document.getElementById("greeting").innerHTML = some;
  }
  
  let name = document.getElementById("inputId").value; ;

  function onSubmit() {
    document.querySelector('h1').innerHTML = name;

  }

  