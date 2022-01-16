import Cookies from 'js-cookie'

export const createCookie = (key, value) => {
    Cookies.set(key, value, {
        expires: 3
    });
}

export const removeCookie = key => {
    Cookies.remove(key);
}

export const getCookie = key => {
    return Cookies.get(key)
}

export const authenticate = (res, next) => {
    createCookie('token', res.data.token);
    next();
}

export const isAuth = () => {
    const token = getCookie('token')

    if(token) return true

    return false
}

export const logout = () => {
    removeCookie('token');
}