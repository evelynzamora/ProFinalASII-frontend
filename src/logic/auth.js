import axios from "axios";

const ENDPOINT_PATH = "/ClinicaWeb-1.0-SNAPSHOT/";

export default {
    login(name, pass) {
        const user = { name, pass };
        return axios.post(ENDPOINT_PATH + "login", user);
    }
};