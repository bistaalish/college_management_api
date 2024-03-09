const {Department} = require('../models/')

const createDepartment = async (data) => {
    try {
        const newDepartment = await Department.create(data)
        return {
            success: true,
            message: "Added Department successfully",
            data: newDepartment
        }
    }
    catch (err) {
        return {
            success: false,
            message: err.message,
            data: null
        }
    }
}

const getAllDepartments = async () => {
    try{
        const Departments = await Department.find({deleted: false})
        if (Departments.length == 0) {
            return {
                success: false,
                message: "No Department found"
            }
        }
        return {
            success: true,
            message: "All the Departments",
            data: Departments
        }
    }
    catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}
const getDepartmentById = async (id) => {
    try {
        const department = await Department.findById(id)
        if (!department) {
            return {
                success: false,
                message: "No Department Found"
            }
        }
        return {
            success: true,
            message: `department: ${department._id}`,
            data: department
        }
    }
    catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}
const updateDepartmentById = async (id,data) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(id,data,{new: true})
        if(!updatedDepartment){
            return {
                success: false,
                message: "No Todo Found by that ID."
            }
        }
        return {
            success: true,
            message: "Update Successful",
            data: updatedDepartment
        }
    }
    catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}
module.exports = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartmentById
}