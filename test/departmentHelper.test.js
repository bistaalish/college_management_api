const mongoose = require('mongoose');
const {Department} = require('../src/models')
const {createDepartment,getAllDepartments,getDepartmentById} = require('../src/helpers')

require('dotenv').config()
const decodedURI = Buffer.from(process.env.MONGODB_URI, 'base64').toString('utf-8');

describe('Department helper functions', () => {
    beforeAll(async () => {
        await mongoose.connect(decodedURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await Department.deleteMany({})
      });
      beforeEach(async () => {
        await Department.deleteMany({})
        return await Department.deleteMany({})
    
      })
      afterAll(async () => {
        await Department.deleteMany({})
        return await mongoose.connection.close();
      });
      it('should create a new Department', async () => {
        const departmentData = {
            name: "Business in Management",
            code: "BIM"
        }
        const createdDepartment = await createDepartment(departmentData)
        expect(createdDepartment.success).toEqual(true)
        expect(createdDepartment.data.name).toEqual(departmentData.name)
        expect(createdDepartment.data.code).toEqual(departmentData.code)
    });
    it('should Show duplicate error', async () => {
        const departmentData = {
            name: "Business in Management",
            code: "BIM"
        }
        const createdDepartment1 = await createDepartment(departmentData)
        const createdDepartment = await createDepartment(departmentData)
        expect(createdDepartment1.success).toEqual(true)
        expect(createdDepartment.success).toEqual(false)
    })
    it('should get All Departments',async ()=> {
        const departments = [{
                name: "Business in Management",
                code: "BIM"
            },
            {
                name: "Business Information Technology",
                code: "BIT"
            }
        ]
        await Department.insertMany(departments)
        const allDepartments = await getAllDepartments()
        expect(allDepartments.data[0].code).toEqual("BIM")
        expect(allDepartments.data[1].code).toEqual("BIT")
    })
    it("should return No Department found", async () => {
        const allDepartments = await getAllDepartments()
        expect(allDepartments.success).toEqual(false)
        expect(allDepartments.message).toEqual('No Department found')
    })
    it("should return Department by ID",async() => {
        const departmentData = {
            name: "Business in Management",
            code: "BIM"
        }
        const createdDepartment = await Department.create(departmentData)
        const findDepartmentById = await getDepartmentById(createdDepartment._id)
        expect(findDepartmentById.success).toEqual(true)
        expect(findDepartmentById.data._id).toEqual(createdDepartment._id)
    })
})


