// export const getData = () => {
//     return fetch('http://localhost:3001/sightings')
//         .then(response => {
//             if (!response.ok) {
//                 throw Error(response.statusText)
//             } else {
//                 return response.json()
//             }
//         })
// }

// export const postData = (postBody) => {
//     return fetch('http://localhost:3001/sightings', {
//         method: "POST",
//         body: JSON.stringify(postBody),
//         headers: {
//             'Content-Type': 'application/JSON'
//         }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw Error(response.statusText)
//             } else {
//                 return response.json()
//             }
//         })
// }

// export const deleteData = (id) => {
//     return fetch(`http://localhost:3001/sightings/${id}`, {
//         method: "DELETE",
//         headers: { 'Content-Type': 'application/json' },
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw Error(response.statusText)
//             } else {
//                 return response.json()
//             }
//         })
// }
