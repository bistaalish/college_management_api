const {deleteDepartmentById,createDepartment,getAllDepartments,getDepartmentById,updateDepartmentById} = require('./department')
const {createYear} = require("./year")
module.exports = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartmentById,
    deleteDepartmentById,
    createYear
}