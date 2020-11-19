import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "/ClinicaWeb-1.0-SNAPSHOT/";

export default {
    login(name, pass) {
        const user = { name, pass };
        return axios.post(ENDPOINT_PATH + "login", user);
    },
    
    setUserLogged(userLogged){
        Cookies.set("userLogged", userLogged);
    },
    getUserLogged(){
        return Cookies.get("userLogged");
    },
    deleteUserLogged(){
        Cookies.remove("userLogged");
    }
};