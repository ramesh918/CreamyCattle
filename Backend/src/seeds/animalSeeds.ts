import AnimalModel from "../models/Animal"; // Import your AnimalModel
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

        // Array of cattle sheds
        const cattleSheds = [
            {
                "_id": "64f6a7b102a71615b254adc1",
                "city": "City 1"
            },
            {
                "_id": "64f6a7b102a71615b254adc4",
                "city": "City 2"
            },
            {
                "_id": "64f6a7b102a71615b254adc6",
                "city": "City 3"
            },
            {
                "_id": "64f6a7b102a71615b254adc8",
                "city": "City 4"
            },
            {
                "_id": "64f6a7b102a71615b254adca",
                "city": "City 5"
            },
            {
                "_id": "64f6a7b102a71615b254adcc",
                "city": "City 6"
            },
            {
                "_id": "64f6a7b102a71615b254adce",
                "city": "City 7"
            },
            {
                "_id": "64f6a7b102a71615b254add0",
                "city": "City 8"
            },
            {
                "_id": "64f6a7b102a71615b254add2",
                "city": "City 9"
            },
            {
                "_id": "64f6a7b102a71615b254add4",
                "city": "City 10"
            },
            {
                "_id": "64f6a7b102a71615b254add6",
                "city": "City 11"
            },
            {
                "_id": "64f6a7b102a71615b254add8",
                "city": "City 12"
            },
            {
                "_id": "64f6a7b102a71615b254adda",
                "city": "City 13"
            },
            {
                "_id": "64f6a7b102a71615b254addc",
                "city": "City 14"
            },
            {
                "_id": "64f6a7b102a71615b254adde",
                "city": "City 15"
            },
            {
                "_id": "64f6a7b102a71615b254ade0",
                "city": "City 16"
            },
            {
                "_id": "64f6a7b102a71615b254ade2",
                "city": "City 17"
            },
            {
                "_id": "64f6a7b102a71615b254ade4",
                "city": "City 18"
            },
            {
                "_id": "64f6a7b102a71615b254ade6",
                "city": "City 19"
            },
            {
                "_id": "64f6a7b102a71615b254ade8",
                "city": "City 20"
            }
        ]

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
