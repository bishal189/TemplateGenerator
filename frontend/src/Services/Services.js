import apiClient from "../utils/api-client";

export  function Login(user){
    return apiClient.post("/user/login",user)
}