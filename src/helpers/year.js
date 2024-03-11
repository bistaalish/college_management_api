const Year = require("../models/year")
const createResponse = require("./createResponse")
// Create New Year
const createYear = async(data) => {
    try {
        const createdYear = await Year(data)
        if (!createdYear){
            throw new Error("Unable to create Year Data")
        }
        return createResponse(true,"Created Year",createdYear)
    }
    catch (err) {
        return createResponse(false,err.message,null)
    }
}

module.exports = {
    createYear
}