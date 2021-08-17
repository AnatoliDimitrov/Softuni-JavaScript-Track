const BASE = 'http://localhost:3030/data/memes';
const MOST_RECENT = 'http://localhost:3030/data/memes?sortBy=_createdOn%20desc';
const LOGIN = 'http://localhost:3030/users/login';
const REGISTER = 'http://localhost:3030/users/register';
const LOGOUT = 'http://localhost:3030/users/logout';

export default {
    BASE,
    LOGIN,
    REGISTER,
    LOGOUT,
    MOST_RECENT
}