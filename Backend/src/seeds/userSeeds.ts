import UserModel from "../models/User"; // Import your UserModel
import connectToDatabase from "../db";
import bcrypt from "bcrypt";
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
const seedUsers = async () => {
  try {
    // Create an array of user objects
    const users: any[] = [];

    for (let i = 1; i <= 10; i++) {
      const newManager = {
        username: `Manager${i}`,
        password: `Manager${i}@123`,
        roles: ["64e2416f6a3c6fe629f46ce3"], // Keep roles value the same
        firstName: `Manager`,
        lastName: `${i}`,
        adharNumber: 1234567890 + i, // Generate unique adharNumber
        email: `manager${i}@example.com`, // Generate unique email
        adharImageURL: "null",
        profilePic: "null",
      };
      users.push(newManager);
    }

    // Loop through the users array and create documents in the database
    for (const user of users) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);

      const newUser = {
        ...user,
        password: hashedPassword,
      };

      await UserModel.create(newUser);
      console.log(`User created: ${user.username}`);
    }

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Call the seedUsers function to insert data
seedUsers();
