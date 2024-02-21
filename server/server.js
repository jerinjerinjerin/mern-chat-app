import path  from 'path';
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

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use('/api/auth/' , authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', usersRoutes);



app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'client/dist/index.html'));
})



server.listen(PORT, () => {
    connectDatabase();
    console.log(`Server Running the port ${PORT}`)
})