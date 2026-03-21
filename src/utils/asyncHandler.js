const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res,next)).catch((error) => next(error))
    }
}




export { asyncHandler }



// Higher-order function to handle async errors in Express routes
// What is Higher-order function? A higher-order function is a function that takes another 
// function as an argument or returns a function as its result. 

// This means we are passing a function to another function.
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

