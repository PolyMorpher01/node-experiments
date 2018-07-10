function generic(err, req, res, next) {
  res.status(err.output.statusCode);
  console.log(err);
  res.json({
    Error: err.message
  });
}

module.exports = {
  generic
};
