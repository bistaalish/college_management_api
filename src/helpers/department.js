const {Department} = require('../models/')

const createDepartment = async (data) => {
    try {
        // Validation: Ensure required fields are present
        if (!data.name || !data.code) {
            throw new Error("Name and location are required fields.");
        }
        const newDepartment = await Department.create(data)
        return createResponse(true,"Added Department Successfully!",newDepartment)
    }
    catch (err) {
        return createResponse(false,err.message,null)
    }
}

const createResponse = (success,message,data) => {
    return {success,message,data}
}
const getAllDepartments = async () => {
    try{
        const Departments = await Department.find({deleted: false})
        if (Departments.length == 0) {
            throw new Error ("No Department found")
        }
        return createResponse(true,"All the Departments",Departments)
    }
    catch (err) {
        return createResponse(false,err.message,[])
    }
}
const getDepartmentById = async (id) => {
    try {
        const department = await Department.findOne({_id:id,deleted:false})
        if (!department) {
            throw new Error ("No Department Found")
        }
        return createResponse(true,`department: ${department._id}`,department)
    }
    catch (err) {
        return createResponse(false,err.message,{})
    }
}
const updateDepartmentById = async (id,data) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(id,data,{new: true})
        if(!updatedDepartment){
            throw new Error ("No Todo Found by that ID.")
        }
        return createResponse(true,"Update Successful",updatedDepartment)
    }
    catch (err) {
        return createResponse(false,err.message,null)
    }
}
const deleteDepartmentById = async (id) => {
    try {
        const deletedDepartment = await Department.findByIdAndUpdate(id,{deleted: true},{new: true})
        if(!deletedDepartment){
            throw new Error ("No Todo Found by That ID.")
        }
        return createResponse(true,`Deleted ${id}`,deletedDepartment)
    }
    catch (err) {
        return createResponse(false,`Unable to find ${id}`,{})
    }
}
module.exports = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartmentById,
    deleteDepartmentById
}