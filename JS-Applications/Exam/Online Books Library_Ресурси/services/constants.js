const BASE = 'http://localhost:3030';
const CURRENT = `${BASE}/data/books`;
const MOST_RECENT = `${CURRENT}?sortBy=_createdOn%20desc`;
const LOGIN = `${BASE}/users/login`;
const REGISTER = `${BASE}/users/register`;
const LOGOUT = `${BASE}/users/logout`;
const LIKES = 'http://localhost:3030/data/likes';

export default {
    BASE,
    CURRENT,
    LOGIN,
    REGISTER,
    LOGOUT,
    MOST_RECENT,
    LIKES
}