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

exports.updateTeacherById = async (id,data) => {
    try {
        const updatedTeacher = await teacherModel.findByIdAndUpdate(id,data,{new:true})
        if(!updatedTeacher) {
            throw new Error (`Update Teacher Unsuccessful`)
        }
        return createResponse(true,"Update Successful",updatedTeacher)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}

exports.deleteTeacherById = async (id) => {
    try {
        const deletedTeacher = await teacherModel.findByIdAndUpdate(id,{deleted: true},{new:true})
        if (!deletedTeacher) {
            throw new Error (`Delete Teacher Unsuccessful`)
        }
        return createResponse(true,"Delete successful",deletedTeacher)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}

exports.deactivateTeacherAccount = async (id) => {
    try {
        const deactivatedTeacher = await teacherModel.findByIdAndUpdate(id,{active:false},{new: true})
        if (!deactivatedTeacher) {
            throw new Error (`Teacher Account deactive Unsuccessful`)
        }
        return createResponse(true,"Deactive successful",deactivatedTeacher)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}

exports.activeTeacherAccount = async (id) => {
    try {
        const activatedTeacher = await teacherModel.findByIdAndUpdate(id,{active:true},{new: true})
        if (!activatedTeacher) {
            throw new Error (`Teacher Account deactive Unsuccessful`)
        }
        return createResponse(true,"Deactive successful",activatedTeacher)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}