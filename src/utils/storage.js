export const saveItem = (key, val) => {
    sessionStorage.setItem(key, val);
}

export const getItem = key => {
    return sessionStorage.getItem(key)
}

export const removeItem = key => {
    sessionStorage.removeItem(key)
}

export const clearItems = () => {
    sessionStorage.clear();
}