fetch('https://jsonplaceholder.typicode.com/users')
.then((a) => a.text())
.then(
    (result) => {
        const users = JSON.parse(result)
        const {id} = users[0]
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((a) => a.text())
        .then((posts) => {
            console.log(posts)
        })
    }
)