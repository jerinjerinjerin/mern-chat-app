import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectDatabase from './db/connectToMongoDB.js';
import usersRoutes from './routes/users.routes.js';
import { app, server } from './socket/socket.js';


// const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.get('/', (req,res) =>{
    //root route
    res.send('hellow world');
})

app.use('/api/auth/' , authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    connectDatabase();
    console.log(`Server Running the port ${PORT}`)
})