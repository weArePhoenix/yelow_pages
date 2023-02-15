import { isExpired } from "react-jwt";
import { showFailureToast } from "./useToast";
export function setHeaderAtLocalStorage(token){
    localStorage.setItem(
        "auth-token" ,token
    );

}

export function getHeaderFromLocalStorage(){
    return localStorage.getItem("auth-token")
}

export function removeHeaderFromLocalStorage(){
    localStorage.removeItem("auth-token")
}
export function headers(){
    return {
        headers : {
            "auth-token" : getHeaderFromLocalStorage(),
        }
    }
}

export function authentication(){
    try {
        return !isExpired(getHeaderFromLocalStorage())
    } catch (error) {
        showFailureToast(error)
    }
}


