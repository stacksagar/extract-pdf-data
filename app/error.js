function notFoundHandler(_req, _res, next) {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
}

function errorHandler(error, _req, res, _next) {
  if (error?.status) {
    return res.status(error.status).json({
      message: error?.message,
    });
  }

  return res
    .status(500)
    .send('<h1 style="color:red;font-size:100px;">Access Denied</h1>');
}

export default { notFoundHandler, errorHandler };
