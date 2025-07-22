const usersWrapper = document.querySelector('#wrap-users')
const deleteModal = document.querySelector('#delete-modal')
const editModal = document.querySelector('#edit-modal')
const editUserBtn = document.querySelector("#edit-user")

firstNameInput = document.querySelector("#firstName")
lastNameInput = document.querySelector("#lastName")
usernameInput = document.querySelector("#username")
passwordInput = document.querySelector("#password")

let userId = null;

window.addEventListener('load', () => {
    getAllUsers();
})

function getAllUsers() {
    fetch(`http://localhost:3000/api/users/all`)
        .then(res => res.json())
        .then((users) => {
            console.log(users);

            usersWrapper.innerHTML = '';

            users.forEach(user => {
                usersWrapper.insertAdjacentHTML('beforeend',
                    `<div class="user">
            <div class="btn-groups-column">
                <button class="delete-user-btn" onClick=showDeleteModal("${user.id}")>Delete</button>
                <button class="edit-user-btn" onClick='showEditModal(${JSON.stringify(user)})'>Edit</button>
            </div>
            <div class="user-profile-wrap">
                <div class="user-profile-description">
                    <h1 class="user-profile-name">${user.username}</h1>
                    <h3 class="user-explanations">${user.firstname} - ${user.lastname}</h3>
                </div>
                <img class="user-profile" src="image/icons8-no-camera-80.png" alt="default-image">
            </div>
        </div>
                    `)
            });
        })
}

function showDeleteModal(id) {
    userId = id;
    deleteModal.classList.add('active')
}

function closeDeleteModal() {
    deleteModal.classList.remove('active')
}

function removeUser() {
    fetch(`http://localhost:3000/api/users/remove/${userId}`, {
        method: 'DELETE',
    }).then(res => res.json())
        .then(data => {
            closeDeleteModal();
            getAllUsers();
        })
}

function showEditModal(user) {
    userId = user.id;
    firstNameInput.value = user.firstname;
    lastNameInput.value = user.lastname;
    usernameInput.value = user.username;
    passwordInput.value = user.password;
    editModal.classList.add('active')
    console.log(user)
}

function closeEditModal() {
    editModal.classList.remove('active')
}

editUserBtn.addEventListener('click', event => {
    event.preventDefault();

    let userNewInfo = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        username: usernameInput.value,
        password: passwordInput.value,
    };

    fetch(`http://localhost:3000/api/users/edit/${userId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "Application/Json"
        },
        body: JSON.stringify(userNewInfo)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            closeEditModal();
            getAllUsers();
            emptyEditModalInput();
        })
})

function emptyEditModalInput() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";
}

window.addEventListener('click', (event) => {
    if (event.target.id === "edit-modal") {
        closeEditModal()
    }
})

window.addEventListener('keydown', event => {
    if (event.code === "Escape") {
        closeEditModal();
        emptyEditModalInput();
    }
})