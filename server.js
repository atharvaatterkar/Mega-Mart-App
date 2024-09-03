import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'
//congif env
dotenv.config();

//rest object
const app = express();

//middelware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/vi/auth", authRoutes);

//rest api 
app.get('/', (req, res) => {
    res.send("<h1>welcome to MegaMart</h1>");
});



//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log('Server runnig on${process.env.DEV_MODE} mode on port ${PORT}'.bgCyan.white);
});