// Basic Promise structure
let p = new Promise((resolve,reject) => 
{
    let a = 1+1

    if(a == 2)
    {
        resolve('Success');
    }else
    {
        reject('Failed')
    }
})

// The parameters message stands for the resolve parameter here. And The parameter for catch is stands for reject.
p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) =>
{
    console.log('This is in the catch ' + message);
})