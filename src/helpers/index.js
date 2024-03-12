const {
    createClass,
    getAllClasses,
    getClassById,
    updateClassById,
    deleteClassById

} = require('./class');
const {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById,
    deactivateTeacherAccount,
    activeTeacherAccount
} = require("./teacher")
module.exports = {
    createClass,
    getAllClasses,
    getClassById,
    updateClassById,
    deleteClassById,
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById,
    deactivateTeacherAccount,
    activeTeacherAccount
}