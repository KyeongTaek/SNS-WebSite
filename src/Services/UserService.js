import { API_BASE_URL } from "./app-config"
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request){
    let headers = new Headers({
        "Content-Type" : "application/json",
    });

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !==null){
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers : headers,
        url : API_BASE_URL + api,
        method : method,
    };

    if(request){
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
    .then((response)=>
    response.json().then((json)=>{
        if(!response.ok){
            Promise.reject(json);
        }
        return json;
    }))
    .catch((error) => {
        console.log(error.status);
        if(error.status ===403){
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
    );

}


export function login(userDTO){
    return call("/user/login", "POST", userDTO).then((response)=>{
        if(response.token){
            localStorage.setItem(ACCESS_TOKEN, response.token);
            window.location.href = "/mainPage";
        }

    });
}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/";
  }

