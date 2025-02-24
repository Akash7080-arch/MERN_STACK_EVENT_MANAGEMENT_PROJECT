import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "MERN_STACK_EVENT_MANAGEMENT_SYSTEM" }).then(() => {
        console.log("Connected to database!")
    }).catch(err => {
        console.log("Some error occured while connecting to the database:", err)
    });

};
