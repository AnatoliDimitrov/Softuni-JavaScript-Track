const BASE = 'http://localhost:3030';
const CURRENT = `${BASE}/data/ideas`;
const MOST_RECENT = `${CURRENT}?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`;
const LOGIN = `${BASE}/users/login`;
const REGISTER = `${BASE}/users/register`;
const LOGOUT = `${BASE}/users/logout`;

export default {
    BASE,
    CURRENT,
    LOGIN,
    REGISTER,
    LOGOUT,
    MOST_RECENT
}