import RoleModel from "../models/Role"; // Import your UserModel
import connectToDatabase from "../db";
import mongoose from "mongoose";


connectToDatabase(
  () => {
    console.log("dbConnection Successful");
  },
  (error) => {
    console.error("Unable to connect to database", error);
  }
);
// Function to seed user data
const seedRoles = async () => {
  try {
    // Create an array of user objects
    const admin = {
      name: "Administrator",
      permissions: "__ALL_",
    };
    const manager = {
      name: "Manager",
      permissions: "ONLY_SHED_ACCESS_IN_WHICH_MANAGER_IS_TAKEN_CHARGE"
    };
    // Loop through the users array and create documents in the database
    await RoleModel.create(admin);
    await RoleModel.create(manager);
    console.log(`Roles Created Successfully`);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};


// Call the seedUsers function to insert data
seedRoles();



