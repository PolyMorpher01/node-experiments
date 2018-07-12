function generic(err, req, res, next) {
  res.status(err.output.statusCode);
  res.json({
    Error: err.message
  });
}

module.exports = {
  generic
};
