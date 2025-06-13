// handling error they are so common in js that we have a class in itself to handle errors

class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors=[],
        stack= ""
    ){
        super(message) // call constructor from error class
        this.statusCode= statusCode
        this.data=null
        this.message= message
        this.success =false
        this.errors = this.errors

        if(stack){
            this.stack= stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export {ApiError}