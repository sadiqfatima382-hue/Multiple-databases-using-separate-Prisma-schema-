import express from "express";
import dotenv from "dotenv";

import postgres from "./config/postgres.js";
import mongodb from "./config/mongodb.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const random = Math.floor(Math.random() * 100000);

        const user = await postgres.user.create({
            data: {
                name: "Fatima",
                email: `fatima${random}@example.com`,
            },
        });


        const product = await mongodb.product.create({
            data: {
                name: "Laptop",
                description: "Gaming Laptop",
                price: 1500,
            },
        });

        res.json({
            postgres: user,
            mongodb: product,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message,
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});