
export const setLs = (key,value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLs = key => {
    window.localStorage.getItem(key)
}

if(value){
    return JSON.parse(value)
}