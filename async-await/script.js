function makeRequest(location)
{
    return new Promise((resolve,reject) =>
    {
        console.log(`Making request to ${location}`)
        if(location == "Google")
        {
            resolve('Google says hi')
        }
        else
        {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response)
{
    return new Promise((resolve,reject) => 
    {
        console.log('Processing response')
        resolve(`Extra Information ${response}`)
    })
}

// Promise based
// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err => {
//     console.log(err)
// })

// Async - await based
async function doWork(){
    try {
        // Code will wait till get the response from the makeRequest function
        const response = await makeRequest('Facebook')
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse);
    }
    catch (err)
    {
        console.log(err)
    }
}

doWork()