function generic(err, req, res, next) {
  res.status(err.output.statusCode);
res.json({
    Error: err.message
});

}

function notAllowed(err, req, res, next) {
    res.status(400);
    res.json({
        message: 'Method not allowed'
    })
}

module.exports = {
    generic,
    notAllowed
};