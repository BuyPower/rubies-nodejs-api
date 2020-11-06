const axios = require('axios');

module.exports = {
    post(url, data = {}, headers = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                url: url,
                data: data
            })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error);
            });
        })
    }
}