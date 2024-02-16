

import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import geneartTokenAndSetCookie from "../utils/generateToken.js";

export const signup =async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword, gender} = req.body;
        

        if(password !== confirmPassword){
            return res.status(400).json({
                error: 'paswword don,t match'
            })
        }
        const user =await User.findOne({username})

        if(user){
            return res.status(400).json({
                error: 'username already taken'
            })
        }
        //hash password 
        const slat = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, slat);
        

        const boyProiflePic = `https://avatar.iran.liara.run/public/boy${username}`
        const girlProiflePic = `https://avatar.iran.liara.run/public/girl${username}`

        const newUser = new User({
            fullname,
            username,
            password : hashPassword,
            gender,
            profilePic: gender === 'male' ? boyProiflePic : girlProiflePic
        })

        if(newUser){
            //generate jwt token here

             geneartTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                //gender: newUser.gender,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error:'invalid user data'});
        }
    } catch (error) {
        console.log('errpr in signup controller', error.message);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({
                error: 'invalid username or password'
            })
        }

        geneartTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log('Error in login controller', error.message);
        res.status(400).json({error: 'internal server error'})
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 0})
        res.status(200).json({
            message: 'logged out successfully'
        })
    } catch (error) {
        console.log('Error is logout controller',error.message)
        res.status(400).json({error: 'internal server error'})
    }
}