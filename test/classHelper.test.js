const mongoose = require('mongoose');
const {createClass, getAllClasses, getClassById, updateClassById, deleteClassById
} = require("../src/helpers/")

const {classModel} = require("../src/models")

require('dotenv').config()
const decodedURI = Buffer.from(process.env.MONGODB_URI, 'base64').toString('utf-8') + "/"+"College";

describe('Class helper functions', () => {
    beforeAll(async () => {
        await mongoose.connect(decodedURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await classModel.deleteMany({})
      });
      beforeEach(async () => {
        return await classModel.deleteMany({})
    
      })
      afterAll(async () => {
        await classModel.deleteMany({})
        return await mongoose.connection.close();
      });
      it('should create a class', async () => {
        const classData = {
            name: "12",
        }
        const createdClass = await createClass(classData)
        expect(createdClass.success).toEqual(true)
        expect(createdClass.data.name).toEqual(classData.name)
    });
    it('should return duplicate Class', async () => {
        const classData = {
            name: "12",
        }
        const createdClass = await createClass(classData)
        const createdClass1 = await createClass(classData)
        expect(createdClass.success).toEqual(true)
        expect(createdClass1.success).toEqual(false)
    });
    it('should get all Classes', async () => {
        const classData = [
            {name:"11"},{name:"12"}
        ]
        await classModel.create(classData)
        const allClasses = await getAllClasses()
        expect(allClasses.success).toEqual(true)
        expect(allClasses.data.length).toEqual(2)
    })
    it('should return No class is present in DB.', async () => {
        const allClasses = await getAllClasses()
        expect(allClasses.success).toEqual(false)
    })
    it('should return class by id', async () => {
        const classData = {
            name: "12",
        }
        const createdClass = await classModel.create(classData)
        const getClass = await getClassById(createdClass._id)
        expect(getClass.success).toEqual(true)
        expect(getClass.data.name).toEqual(classData.name)
    })
    it('should return No Class By id:${id}', async () => {
        const id = "12"
        const getClass = await getClassById(id)
        expect(getClass.success).toEqual(false)
    })
    it('should update a classname',async ()=>{
        const classData = {
            name: "12",
        }
        const createdClass = await classModel.create(classData)
        const updatedClass = await updateClassById(createdClass._id,{name:"11"},{new:true})
        expect(updatedClass.success).toEqual(true)
        expect(updatedClass.data.name).toEqual("11")
    })
    it('should softdelete the class', async () => {
        const classData = {
            name: "12",
        }
        const createdClass = await classModel.create(classData)
        const deletedClass = await deleteClassById(createdClass._id)
        expect(deletedClass.success).toEqual(true)
        expect(deletedClass.data.deleted).toEqual("true")
    })
    it('should not delete the class', async () => {
        const id = "123"
        const deletedClass = await deleteClassById(id)
        expect(deletedClass.success).toEqual(false)
    })
});