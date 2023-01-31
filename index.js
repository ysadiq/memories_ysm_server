import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// TODO: Secure your credentials
// Create enviromental variable to store the connection url
const CONNECTION_URL = 'mongodb+srv://ysaddiq:IwbiJ89IiE@cluster0.j5sky1w.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

// useNewUrlParser + useUnifiedTopology used to avoid errors and warnings.
mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));