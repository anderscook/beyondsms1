exports.handler = function (event, context, callback) {
    let jsonStr = event;

    let parsedObj = JSON.parse(jsonStr);

  callback(null, { "message": "Successfully executed" });
}