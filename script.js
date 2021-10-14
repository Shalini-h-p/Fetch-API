function fetchData() {
  fetch("https://reqres.in/api/users").then(response => {
    console.log(response);
    if (!response.ok) {
      throw error("ERROR");
    }
    return response.json();
  })
    .then(data => {
      console.log(data.data);

      const html = data.data.map(user => {
        return `
        <div class = "user">
        <p><img src=${user.avatar} alt=${user.first_name}/></p>
        <p>Name:${user.first_name}</p>
        <p>Email:${user.email}</P>
        </div>
        `;
      })
        .join('');
      document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData();


function postData() {
  fetch("https://reqres.in/api/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "morpheous",
      job: "leader"
    })
  })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
postData();