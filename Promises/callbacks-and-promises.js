
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallBack(callback,errorCallback)
{
    if(userLeft)
    {
        errorCallback({
            name: 'User left',
            message: ':('
        })
    }
    else if(userWatchingCatMeme)
    {
        errorCallback({
            name: 'User watching cat meme',
            message: 'WebDevSimplified < Cat'
        })
    } else
    {
        callback ('Thumbs up and Subs')
    }
}

watchTutorialCallBack((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})