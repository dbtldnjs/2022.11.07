// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(
//     (response) => response.text()
// )
// .then((result) => {console.log(result)})
async function fetchStr(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const result = await response.text()
    console.log(result)
}
fetchStr();