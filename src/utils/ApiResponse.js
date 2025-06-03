// sending some response to user from forntend. We want to make sure that our response send to the front end. our response to the user gets standardized, sometimes forget to send them status code, message
// for this we ahve created this file
// api error and response are always in class format

class ApiResponse{
    constructor(statusCode, data, message="Success"){
        this.statusCode= statusCode
        this.data= data
        this.success = statusCode<400

    }
}
export {ApiResponse}

//API IS STANDARDIZED TILL NOW