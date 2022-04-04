

export default class Get {
    static async getAll(login, password) {

        let axios = require("axios");
        let MockAdapter = require("axios-mock-adapter");

        let mock = new MockAdapter(axios);

        mock.onGet("https://jsonplaceholder.typicode.com/users", { params: { login: "adm", password: 1234 } }).reply(200, {
            users: [{ id: 1, login: "adm", password: 1234 }],
        });

        const response = axios
            .get("https://jsonplaceholder.typicode.com/users", { params: { login: "adm", password: 1234 } })
            .then(function (response) {

                return response.status
            });
        return response

    }
}

