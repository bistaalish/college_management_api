const {
    createClass,
    getAllClasses,
    getClassById,
    updateClassById,
    deleteClassById

} = require('./class');
const {
    createTeacher,
    getAllTeachers
} = require("./teacher")
module.exports = {
    createClass,
    getAllClasses,
    getClassById,
    updateClassById,
    deleteClassById,
    createTeacher,
    getAllTeachers
}