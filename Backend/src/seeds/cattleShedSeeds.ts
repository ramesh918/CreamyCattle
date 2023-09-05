import CattleShedModel from "../models/CattleShed"; // Import your CattleShedModel
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

// Function to seed cattle shed data
const seedCattleSheds = async () => {
  try {
    // Array of managerIds
    const managers = [
      "64f55586cde63febdae902bf",
      "64f55586cde63febdae902bd",
      "64f55586cde63febdae902bb",
      "64f55586cde63febdae902b9",
      "64f55586cde63febdae902b7",
      "64f55586cde63febdae902b5",
      "64f55586cde63febdae902b3",
      "64f55585cde63febdae902b1",
      "64f55585cde63febdae902af",
      "64f55585cde63febdae902ad",
    ];

    // Create an array of cattle shed objects
    const cattleSheds: any[] = [];

    for (let i = 1; i <= 20; i++) {
      // Randomly select a manager from the managers array
      const randomManagerId =
        managers[Math.floor(Math.random() * managers.length)];

      const newCattleShed = {
        location: `Location ${i}`,
        manager:randomManagerId,
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
seedCattleSheds();
