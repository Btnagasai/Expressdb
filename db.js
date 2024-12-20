// user name : tulasinagasai11
// password: gsURuOY5VRHRlJ0B

import mongoose from "mongoose";


// mongodb+srv://tulasinagasai11:<db_password>@cluster0.ph8cf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const CONNECTION_STRING = "mongodb+srv://tulasinagasai11:gsURuOY5VRHRlJ0B@cluster0.ph8cf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const connectToDatabase = async () => {
    try{
        await mongoose.connect(CONNECTION_STRING);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log(error, "error in null");
        }
        }