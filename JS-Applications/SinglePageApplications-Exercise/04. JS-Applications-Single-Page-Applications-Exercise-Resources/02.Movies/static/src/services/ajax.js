
let get = async function (url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

let getLogout = async function (url) {
    try {
        await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.movieAccessToken,
            }
        })
    } catch (error) {
        alert(error);
    }
}

let post = async function (url, body) {
    try {
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

let postWithAuth = async function (url, body) {
    try {
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.movieAccessToken,
            },
            method: 'post',
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

let del = async function (url, body) {
    try {
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.movieAccessToken,
            },
            method: 'delete'
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

let put = async function (url, body) {
    try {
        let response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.movieAccessToken,
            },
            method: 'put',
            body: JSON.stringify(body)

        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

export default {
    get,
    post,
    getLogout,
    del,
    postWithAuth,
    put
}