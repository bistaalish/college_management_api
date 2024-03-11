const {teacherModel} = require('../models/');
const createResponse = require("../misc/createResponse")

// This function creates school teacher
exports.createTeacher = async (data) =>{
    try {
        const createdTeacher = await teacherModel.create(data)
        if (!createdTeacher){
            throw new Error ("Teacher not added")
        }
        return createResponse(true,"Teacher is Added",createdTeacher)
    }
    catch (err) {
        return createResponse(false,err.message,null)
    }
}
