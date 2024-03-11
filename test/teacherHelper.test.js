const mongoose = require('mongoose');
const {classModel,teacherModel} = require("../src/models")
const {
    createTeacher,
    getAllTeachers
} = require("../src/helpers")

require('dotenv').config()
const decodedURI = Buffer.from(process.env.MONGODB_URI, 'base64').toString('utf-8') + "/"+"College";

describe("Teacher Helper Functions", () => {
    
    beforeAll(async () => {
        await mongoose.connect(decodedURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await classModel.deleteMany({})
        await teacherModel.deleteMany({})
      });
      beforeEach(async () => {
        await classModel.deleteMany({})
        return await teacherModel.deleteMany({})
    
      })
      afterAll(async () => {
        await classModel.deleteMany({})
        await teacherModel.deleteMany({})
        return await mongoose.connection.close();
      });
      it("should create a Teacher", async () => {
        const createdClass = await classModel.create({name:"12"})
        const TeacherData = {
            name: "Sam Llyoid",
            username: "LSam",
            password: "Sam123!",
            email: "lsam@gmail.com",
            phone :"9807999753",
            classes: [createdClass._id]
        }
        const createdTeacher = await createTeacher(TeacherData)
        expect(createdTeacher.success).toEqual(true)
      })
      it("should show duplicate Teacher", async () => {
        const createdClass = await classModel.create({name:"12"})
        const TeacherData = {
            name: "Sam Llyoid",
            username: "LSam",
            password: "Sam123!",
            email: "lsam@gmail.com",
            phone :"9807999753",
            classes: [createdClass._id]
        }
        const createdTeacher = await createTeacher(TeacherData)
        const createdTeacher1 = await createTeacher(TeacherData)
        expect(createdTeacher.success).toEqual(true)
        expect(createdTeacher1.success).toEqual(false)
      })
      it("should return all the teachers",async ()=>{
        const createdClass = await classModel.create({name:"12"})
        const TeacherData = [{
          name: "Sam Llyoid",
          username: "LSam",
          password: "Sam123!",
          email: "lsam@gmail.com",
          phone :"9807999753",
          classes: [createdClass._id]
        },{
          name: "Pink Llyoid",
          username: "PFloyid",
          password: "Sam123!",
          email: "lsam1@gmail.com",
          phone :"9807999753",
          classes: [createdClass._id]
        }]
      const createdTeachers = await teacherModel.create(TeacherData)
      const allTeachers = await getAllTeachers()
      expect(allTeachers.success).toEqual(true)
      expect(allTeachers.data.length).toEqual(2)
      })
      it("should return no record on teacher database",async ()=>{
      const allTeachers = await getAllTeachers()
      expect(allTeachers.success).toEqual(false)
      })
})