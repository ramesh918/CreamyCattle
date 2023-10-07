import AnimalModel from "../models/Animal";
import CattleShedModel from "../models/CattleShed";
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


// Function to seed animal data
const seedAnimals = async () => {
    try {
        // Array of animal types and corresponding milk production
        const animalTypes = ["Bull", "Cow", "Calf", "Buffalo Bull", "She Buffalo", "Buffalo Calf"];
        const animalMilkProduction = [0, 7, 0, 0, 10, 0];
        const cattleSheds = await CattleShedModel.find()


        // Array of cattle sheds
     


        // Create an array of animal objects
        const animals: any[] = [];


        // Loop through each cattle shed and create two animals for each
        for (const shed of cattleSheds) {
            for (let i = 0; i < 20; i++) {
                const randomAnimalIndex = Math.floor(Math.random() * animalTypes.length);
                const type = animalTypes[randomAnimalIndex];
                const capacityOfMilkInLiters = animalMilkProduction[randomAnimalIndex];
                const newAnimal = {
                    cattleShed: shed._id,
                    type: type,
                    healthCondition: `Good`,
                    isProvideMilk: capacityOfMilkInLiters > 0,
                    capacityOfMilkInLiters,
                };
                animals.push(newAnimal);
            }
        }


        // Loop through the animals array and create documents in the database
        for (const animal of animals) {
            await AnimalModel.create(animal);
            console.log(`Animal created in CattleShed: ${animal.cattleShed}`);
        }


        console.log("Seed data inserted successfully");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
};


// Call the seedAnimals function to insert data
seedAnimals();



