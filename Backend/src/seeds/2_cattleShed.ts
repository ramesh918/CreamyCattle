import CattleShedModel from "../models/CattleShed";
import UserModel from "../models/User";
import RoleModel from "../models/Role"; // Import the RoleModel
import connectToDatabase from "../db";
import mongoose from "mongoose";


connectToDatabase(
  () => {
    console.log("dbConnection Successful");
    seedCattleSheds();
  },
  (error) => {
    console.error("Unable to connect to database", error);
  }
);


// Function to seed cattle shed data
const seedCattleSheds = async () => {
  try {
    const managerRole = await RoleModel.findOne({ name: 'Manager' });


    console.log(managerRole)
    const managerId = managerRole?._id.toString()
    console.log(managerId)
    const managerRecords = await UserModel.find({
      roles: { $in: [managerId] } // Replace managerRoleId with the ObjectId of the "Manager" role
    })
    // console.log(managerRecords)
    const cattleSheds: any[] = [];
    for (let i = 0; i <managerRecords.length ; i++) {
      const cattleManagerId = managerRecords[i]._id.toString();
      const newCattleShed = {
        location: `Location ${i}`,
        manager:cattleManagerId,
        address: `Address ${i}`,
        city: `City ${i}`,
        state: `State ${i}`,
        pincode: `Pincode ${i}`,
        country: `Country ${i}`,
      };
      cattleSheds.push(newCattleShed);
    }
    // Loop through the cattleSheds array and create documents in the database
    for (const cattleShed of cattleSheds) {
      await CattleShedModel.create(cattleShed);
      console.log(`CattleShed created at ${cattleShed.location}`);
    }
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};


// Call the seedCattleSheds function to insert data





