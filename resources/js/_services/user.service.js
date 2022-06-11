
export const userService = {
    login,
    logout,
    register,
};

function login(email, password) {
    const datas = {
        email,
        password
    };

    return axios.post(`/login`, datas)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    return axios.post(`/register`, user).then(handleResponse);
}


function handleResponse(response) {
    return response.data;
}