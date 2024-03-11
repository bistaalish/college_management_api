const {classModel} = require("../models/")
const createResponse = require("../misc/createResponse")

// This function creates school class
exports.createClass = async (data) => {
    try {
        const createdClass = await classModel.create(data);
        if (!createdClass){
            throw new Error ("Class not added")
        }
        return createResponse(true,"Class is created",createdClass)
    }
    catch (err) {
        return createResponse(false,err.message,null)
    }
}

exports.getAllClasses = async(limit=10) => {
    try {
        const allClasses = await classModel.find({deleted: false}).limit(limit)
        if (allClasses.length == 0) {
            throw new Error ("No class is present in DB.")
        }
        return createResponse(true,"All Classes",allClasses)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}

exports.getClassById = async (id) => {
    try {
        const getClass = await classModel.findOne({deleted:false,_id:id})
        if (!getClass) {
            throw new Error (`No Class By id:${id}`)
        }
        return createResponse(true,`Found class by ID:${getClass}`,getClass)
    }
    catch (err) {
        return createResponse(false,err.message,null)
    }
}

exports.updateClassById = async (id,data) => {
    try {
        const updatedClass = await classModel.findByIdAndUpdate(id,data,{new:true})
        if (!updatedClass) {
            throw new Error("No Class Found by that ID.")
        }
        return createResponse(true,`updated: ${updatedClass._id}`,updatedClass)
    }
    catch (err) {
        return createResponse(false,err.message,null) 
    }
}

exports.deleteClassById = async (id) => {
    try {
        const updatedClass = await classModel.findByIdAndUpdate(id,{deleted:true},{new:true})
        if(!updatedClass) {
            throw new Error (`Unable to find class by ID:${id}`)
        }
        return createResponse(true,`Updated class: ${id}`,updatedClass)
    }
    catch (err) {
        return createResponse(false,err.message,null) 
    }
}