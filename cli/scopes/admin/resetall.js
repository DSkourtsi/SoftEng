const env = require("../../env.js");

function resetallFunction() {
    env.instance.post(`${env.baseURL}/admin/resetall`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { resetallFunction };
