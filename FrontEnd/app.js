const $ = document
const form = $.querySelector('form')

const firstnameInput = $.querySelector('#firstname');
const lastnameInput = $.querySelector('#lastname');
const usernameInput = $.querySelector('#username');
const passwordInput = $.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newUserInfo = {
        firstName: firstnameInput.value,
        lastName: lastnameInput.value,
        username: usernameInput.value,
        password: passwordInput.value
    }

    fetch(`http://localhost:3000/api/users/new-user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserInfo),

    })
        .then((res) => res.json())
        .then(result => console.log(result))
})