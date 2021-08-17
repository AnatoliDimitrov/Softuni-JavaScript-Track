const ideas = 'http://localhost:3030/data/ideas';
const register = 'http://localhost:3030/users/register';
const login = 'http://localhost:3030/users/login';
const logout = 'http://localhost:3030/users/logout';
const allIdeas = 'http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc';

export default {
    ideas,
    register,
    login,
    logout,
    allIdeas,
}