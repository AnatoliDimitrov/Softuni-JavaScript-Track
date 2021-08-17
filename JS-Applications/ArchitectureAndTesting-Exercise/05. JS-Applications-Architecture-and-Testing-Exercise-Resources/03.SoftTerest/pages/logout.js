import auth from "../services/authService.js";

function logoutBtn() {
    let btn = document.querySelector('#logout-button');
    btn.addEventListener('click', sendLogoutRequest);
}

async function sendLogoutRequest(e) {
    e.preventDefault();
    try {
        await auth.logout();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

export default {
    logoutBtn,
}