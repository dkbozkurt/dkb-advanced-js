const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve,reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 Recorded')
})


// Promise.all is used to wait for all promises to resolve before proceeding
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })

// Promise.race is used to return the first promise that resolves or rejects
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})