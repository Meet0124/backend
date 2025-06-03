const asyncHandler = (requestHandler) => {
    //we are not executing function we are wrapping and sending the request

    return(req, res, next) => {// next is middleware
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}
export {asyncHandler}

//the job is to wrap everything inside promise so errors can be handle better and can design custom error
// and if you don't do still everything is promisified.