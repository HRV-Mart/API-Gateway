const {logMessage, logError} = require("../logging/logging");

async function fetchData(path, body, header, method, isJson) {
    logMessage({
        path:path,
        body:body,
        header:header,
        method:method,
        isJson:isJson
    })
    if (path.charAt(path.length - 1) == `/`) {
        path = path.slice(0, path.length - 1);
    }
    path = path.replace("/?", "?");

    try {
        const configs = {
            method: method,
            headers: header,
        };
        if (method != "GET") {
            configs["body"] = JSON.stringify(body);
        }
        const result = await fetch(path, configs);

        if (isJson) {
            const data = {
                data: await result.json(),
                status: result.status
            }
            return data;
        }
        else {
            const data = {
                data: await result.text(),
                status: result.status
            }
            return data;
        }
        logMessage(data)
    }
    catch (error) {
        const data = {
            data: error,
            status: 500
        }
        logError(data)
        return data
    }
}
async function getRequest(path, header, isJson) {
    const result = await fetchData(path, {}, header, "GET", isJson);
    return result
}
async function postRequest(path, body, header, isJson) {
    const result = await fetchData(path, body, header, "POST", isJson);
    return result
}
async function putRequest(path, body, header, isJson) {
    const result = await fetchData(path, body, header, "PUT", isJson);
    return result
}
async function deleteRequest(path, body, header, isJson) {
    const result = await fetchData(path, body, header, "DELETE", isJson);
    return result
}
module.exports = { getRequest, postRequest, putRequest, deleteRequest };