

export default class Get {
    static async getAll(login, password) {
        let axios = require("axios");
        let MockAdapter = require("axios-mock-adapter");

        let mock = new MockAdapter(axios);

        mock.onGet("https://jsonplaceholder.typicode.com/users", { params: { login: login, password: password } }).reply(200);

        const response = axios
            .get("https://jsonplaceholder.typicode.com/users", { params: { login: login, password: password } })
            .then(function (response) {

                return response.status
            });
        return response

    }
}

