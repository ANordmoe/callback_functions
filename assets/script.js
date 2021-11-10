function myDisplayer(num) {
  document.getElementById("demo").innerHTML = num;
}
 
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

	
// setInterval(myFunction, 1000);
 
// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }

// function getFile(myCallback) {
// let req = new XMLHttpRequest();
// req.open('GET', "mycar.html");
// req.onload = function() {
//     if (req.status == 200) {
//     myCallback(this.responseText);
//     } else {
//     myCallback("Error: " + req.status);
//     }
// }
// req.send();
// }

// getFile(myDisplayer); 


	
function ajaxCall() {
    let ajaxRequest = new XMLHttpRequest();
   
    ajaxRequest.onreadystatechange = function() {
      if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
        if (ajaxRequest.status == 200) {
          let myDiv = document.getElementById('main');
          let newDiv = document.createElement('div');
          newDiv.innerHTML = ajaxRequest.responseText;
          myDiv.appendChild(newDiv);
        }
        else if (ajaxRequest.status == 400) {
          console.log('There was an error 400');
        }
        else {
          console.log('something else other than 200 was returned');
        }
      }
    };
   
    ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
    ajaxRequest.send();
  }

  function clearMain(){
    document.getElementById('main').innerHTML = "";
  }

  	
var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}