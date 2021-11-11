function myDisplayer(some, opt) {
    document.getElementById("greeting").innerHTML = some;

    if (opt == "greet") {
      document.getElementById("greeting").innerHTML = "Hello " + some;
  }
    if (opt == "goodbye") {
      document.getElementById("greeting").innerHTML = "Goodbye " + some;
  }
    if (opt == "welcome") {
      document.getElementById("greeting").innerHTML = "Welcome " + some;
  }
}
  

  function onSubmit() {
    let submit = document.getElementById("inputId").value;
    let option = document.getElementById("option").value;
    document.querySelector('h1').innerHTML = "Getting your Response";

    setTimeout(() => {
    myDisplayer(submit, option);
  }, 1000);
  }

  