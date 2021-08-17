import authService from "../../services/authService.js";

async function logout(context) {
    await authService.logout();
    authService.cleanStorage();
    context.page.redirect('/');
}

export default {
    logout
}