const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    console.error(err);

    //Mongoose bad ObjectId error
    if (err.name === "CastError") {
      const message = "Resource not found.";
      error = new Error(message);
      error.statusCode = 404;
    }

    //Mongoose duplicate key error
    if (err.code === 11000) {
      const message = "Duplicate field value entered.";
      error = new Error(message);
      error.statusCode = 400;
    }

    //Mongoose validation error(s)
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((er) => er.message);
      error = new Error(messages.join(", "));
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;