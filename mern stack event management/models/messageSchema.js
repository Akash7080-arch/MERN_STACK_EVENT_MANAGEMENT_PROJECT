import mongoose from "mongoose";
// import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minlength: [3, "Name must contain at least 3 characters!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        match: [/.+@.+\..+/, "Please provide a valid email!"], // ✅ Custom email validation message
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        minlength: [5, "Subject must contain at least 5 characters!"],
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        minlength: [10, "Message must contain at least 10 characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);
