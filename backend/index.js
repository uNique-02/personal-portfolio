import express from 'express';  // Import express
import { PORT } from './config.js';


const app = express();  // Create an express app

app.get('/', (req, res) => {  // Create a route for the root path 
    res.send('Hello World!');  // Send a response to the client
    });

app.listen(PORT, () => {  // Start the app
  console.log(`Server is running on http://localhost:${PORT}`);
});