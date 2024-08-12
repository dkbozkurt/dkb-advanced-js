// Fetch will return a promise.
// console.log(fetch('https://reqres.in/api/users'));

// Then will return response data
// fetch('https://reqres.in/api/users')
//     .then (res => console.log(res));


// This will return another promise
// console.log(fetch('https://reqres.in/api/users')
//     .then (res => {
//         console.log(res.ok); // true
//         console.log(res.status ); // 200
//         res.json()}
//     ));

// We can get our actual data with the following
// fetch('https://reqres.in/api/users')
//     .then (res => res.json())
//     .then (data => console.log(data));

// Error handling for 404 for 23th user
// fetch('https://reqres.in/api/users/23')
//     .then (res => res.json())
//     .then (data => console.log(data))
//     .catch(error => console.error('Error:', error));

// Catch Error on through response
// fetch('https://reqres.in/api/users/23')
//     .then (res => {
//         if(res.ok)
//         {
//             console.log('Success');
//         }
//         else
//         {
//             console.log('Not Successful');
//         }
//     })
//     .then (data => console.log(data))
//     .catch(error => console.error('Error:', error));

// Data updates  on server by using JSON
fetch('https://reqres.in/api/users/23', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },   // Add the data we want to send as JSON
    body : JSON.stringify({ // json stringify for data
        name: 'User 1',
    })
})
    .then (res => {
        return res.json();
    })
    .then (data => console.log(data))
    .catch(error => console.error('Error:', error));