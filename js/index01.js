// fetch('https://www.google.com')
// // .htan((response) =>{return response.text()})
// .hten((response) => response.text())
// then((result) => {console.log(response)})

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((Response) => Response.text())
.then((result) => {console.log(result)})


