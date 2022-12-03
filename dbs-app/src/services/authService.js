import http from "../http-common";

class authService{
    register(payload){
        return http.post("/auth/signup")
    }
}
export default new authService();