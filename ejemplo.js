// 1. GET axios
const buttonData = document.querySelector('#getData')
const postDataBtn = document.getElementById('postData')
const container = document.querySelector('#postContainer')

const textInput = document.getElementById('textInput')

// 2. asignar data a variable global post

// let postsList = []

// axios
// .get('https://jsonplaceholder.typicode.com/posts')
// .then((res) => {
// 	const { data } = res
// 	data.forEach((item) => {
// 		container.innerHTML += `
// 			<h1>${item.title}</h1>
// 			<p>${item.body}</p>
// 		`
// 	})
// })
// .catch((err) => console.error(err))

const getData = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      const { data } = res
      data.forEach((item) => {
        container.innerHTML += `
          <h1>${item.title}</h1>
          <p>${item.body}</p>
          <button onclick=editPost(${item.id})>EDIT</button>
          <button onclick=deletePost(${item.id})>DELETE</button>
        `
      })
    })
    .catch((err) => console.error(err))
}

// 3. POST
const postData = () => {
  axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Titulin',
      body: 'Body title',
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

// 4. PUT
const editPost = (id) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: textInput.value,
      body: 'Body updated',
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

// 5. DELETE
const deletePost = (id) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

buttonData.addEventListener('click', getData)
postDataBtn.addEventListener('click', postData)
