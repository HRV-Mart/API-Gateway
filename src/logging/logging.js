function logError(error) {
    log({
        type: "Error",
        data: error,
        date: Date.now()
    });
}
function logMessage(message) {
    log({
        type: "Message",
        data: message,
        date: Date.now()
    });
}

function log(data) {
    console.log(data)
}

module.exports = { logError, logMessage }