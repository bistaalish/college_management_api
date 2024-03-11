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

exports.getAllTeachers = async (limit=10) => {
    try {
        const allTeachers = await teacherModel.find({deleted:false}).limit(limit)
        if (allTeachers.length == 0){
            throw new Error ("No Teachers recorded")
        }
        return createResponse(true,"All Teachers",allTeachers)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}

exports.getTeacherById = async (id) => {
    try {
        const selectedTeacher = await teacherModel.findOne({deleted:false,_id:id})
        if (!selectedTeacher){
            throw new Error (`No Teacher found by: ${id}`)
        }
        return createResponse(true,`ID:${id}`,selectedTeacher)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}