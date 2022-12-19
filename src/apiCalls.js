export const getData = (url) => {
 return fetch(url)
    .then(res => res.json())
}

export const postData = (url, postBody) => {
  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
  .then(res=> res.json())
}
