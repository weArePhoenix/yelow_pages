export function setHeaderAtLocalStorage(token){
    localStorage.setItem(
        "auth-token" ,token
    )
}

export function getHeaderFromLocalStorage(){
    return localStorage.getItem("auth-token")
}

export function headers(){
    return {
        headers : {
            "auth-token" : getHeaderFromLocalStorage(),
            "Content-Type":"multipart/form-data"
        }
    }
}
