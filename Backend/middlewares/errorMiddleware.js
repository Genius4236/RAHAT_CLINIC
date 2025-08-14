import { response } from "express";

class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
}
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal Server Error';
    err.statusCode = err.statusCode || 500;

    if (err.name === 11000) {
        const message = `Duplicate ${object.keys(error.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
        const message = "Json Web Token is invalid, Please Try Again!";
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "TokenExpiredError") {
        const message = "Json Web Token is Expired, Please Try Again!";
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
     
    //   const errorMessage = err.errors ? object.values(err.errors).map((error)=> error.message).join(" ") : err.message;
    const errorMessage = err.errors ? Object.values(err.errors).map((error) => error.message).join(" ") : err.message;

    


    return res.status(err.statusCode).json({
        status: false,
        message: errorMessage,
    });

};


export default ErrorHandler;