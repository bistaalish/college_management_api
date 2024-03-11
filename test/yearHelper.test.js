const mongoose = require('mongoose');
const {createYear} = require("../src/helpers/")
const {Year} = require("../src/models")
require('dotenv').config()
const decodedURI = Buffer.from(process.env.MONGODB_URI, 'base64').toString('utf-8');


describe('Year helper functions', () => {
    beforeAll(async () => {
        await mongoose.connect(decodedURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await Year.deleteMany({})
      });
      beforeEach(async () => {
        return await Year.deleteMany({})
    
      })
      afterAll(async () => {
        await Year.deleteMany({})
        return await mongoose.connection.close();
      });
      it('should create a Year', async () => {
        const yearData = {
            name: "12",
        }
        const createdYear = await createYear(yearData)
        expect(createdYear.success).toEqual(true)
        expect(createdYear.data.name).toEqual(yearData.name)
    });
});