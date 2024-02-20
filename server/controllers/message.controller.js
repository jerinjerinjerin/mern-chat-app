import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReciverSocketId, io } from "../socket/socket.js";

export const sendMessage =async (req, res) =>{
    try {
        const { message } = req.body;
        const {id: receiverId} = req.params;
        
        console.log(req.params)
        
        const senderId = req.user._id;

       let conversation = await Conversation.findOne({
        participants : {$all: [senderId, receiverId]},
       });

       if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        })
       }

       const newMessage = new Message({
        senderId,
        receiverId,
        message
       })

       if (newMessage){
        conversation.messages.push (newMessage._id);
       }
      
       
       //this will run parallel
       await Promise.all([conversation.save(), newMessage.save()]);
       //socket io functionality will go here
       const receiverSocketId = getReciverSocketId(receiverId);
       //io.to(<socket_id>).emit() used to send events to specific client
       if(receiverSocketId){
        io.to(receiverSocketId).emit('newMessage', newMessage);
       }

       res.status(201).json(newMessage);


    } catch (error) {
        console.log('Error in sendMessage controller: ', error.message)
        res.status(500).json({error: 'intanal server error'})
    }
}

export const getMessages = async (req, res) =>{
    try {
         const {id: userToChatId} = req.params;
         const senderId = req.user._id;

         const conversation = await Conversation.findOne({
            participants : {$all: [senderId, userToChatId]},
         }).populate('messages'); //not reference but actual messages

         if(!conversation) return res.status(200).json([]);

         const messages = conversation.messages;
         res.status(200).json(messages);

    } catch (error) {
        console.log('Error in getMessages controller: ', error.message)
        res.status(500).json({error: 'intanal server error'})
    }
}