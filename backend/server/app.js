import express from 'express';
import cors from 'cors';

import authenticationRoute from './routes/authenticationRoute.js';
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the authentication server");
    }
);

app.use("/api", authenticationRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });