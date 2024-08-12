
const userLeft = false;
const userWatchingCatMeme = false;

// Callback
// function watchTutorialCallBack(callback,errorCallback)
// {
//     if(userLeft)
//     {
//         errorCallback({
//             name: 'User left',
//             message: ':('
//         })
//     }
//     else if(userWatchingCatMeme)
//     {
//         errorCallback({
//             name: 'User watching cat meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else
//     {
//         callback ('Thumbs up and Subs')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })



// Promise
function watchTutorialPromise()
{
    return new Promise((resolve,reject) => {
        if(userLeft)
            {
                reject({
                    name: 'User left',
                    message: ':('
                })
            }
            else if(userWatchingCatMeme)
            {
                reject({
                    name: 'User watching cat meme',
                    message: 'WebDevSimplified < Cat'
                })
            } else
            {
                resolve ('Thumbs up and Subs')
            }
    })
}

watchTutorialPromise()
    .then((message) => {
        console.log('Success: ' + message)
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message)
    })